import React, { useState } from 'react';
import { Button, Container, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './ProductForm.css'


function NewProductForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        code: '',
        stock: '',
        category: '',
        thumbnail: '',
        price: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        let newValue = value;


        if (id === 'stock' || id === 'price') {
            newValue = value.trim();
            if (/^\d+(\.\d{1,2})?$/.test(newValue)) {
                newValue = parseFloat(newValue);
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [id]: newValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestData = {
            title: formData.title,
            description: formData.description,
            code: formData.code, // Convierte a número con base 10
            stock: parseInt(formData.stock), // Convierte a número con base 10
            category: formData.category,
            thumbnail: formData.thumbnail,
            price: parseFloat(formData.price), // Convierte a número de punto flotante
        };

        fetch("http://localhost:8080/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData), // Enviamos los datos del formulario como JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error en la solicitud.");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Producto enviado exitosamente:", data);
            })
            .catch((error) => {
                console.error("Error al enviar el producto:", error);
            });
    };

    return (
        <Container className='form' maxWidth="sm">
            <Typography variant="h5" gutterBottom>
                Crear un nuevo producto
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Título"
                    id='title'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='description'
                    label="Descripción"
                    variant="outlined"
                    fullWidth
                    multiline
                    margin="normal"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='code'
                    label="Código"
                    variant="outlined"
                    fullWidth
                    type='text'
                    margin="normal"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='stock'
                    label="Stock"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='category'
                    label="Categoria"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='thumbnail'
                    label="Thumbnail"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="thumbnail"
                    value={formData.thumbnail}
                    onChange={handleChange}
                    required
                />
                <TextField
                    id='price'
                    label="Precio"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <Button sx={{ m: 3, width: 100 }} type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </form>
        </Container >
    );
}

export default NewProductForm;