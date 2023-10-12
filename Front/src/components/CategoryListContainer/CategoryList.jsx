import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BasicSelect() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/api/products?limit=9999')
            .then((response) => response.json())
            .then((data) => {

                setProductos(data.products.docs);
            })
            .catch((error) => {
                console.error('Error al obtener datos de la API:', error);
            });
    }, [])

    const navigate = useNavigate();
    const uniqueCategories = [...new Set(productos.map((product) => product.category))];
    const [selectedCategory, setSelectedCategory] = React.useState('');



    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
        navigate(`/category/${event.target.value}`);
    };
    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCategory}
                    label="Categoria"
                    onChange={handleChange}
                >
                    {uniqueCategories.map((uniqueCategory) => (
                        <MenuItem key={uniqueCategory} value={uniqueCategory}>
                            {uniqueCategory}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}