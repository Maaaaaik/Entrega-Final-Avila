import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import SimpleSnackbar from '../snackbar/Snackbar';

function Register() {
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.backendURL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registro exitoso', data);
                navigate('/home')
                SimpleSnackbar('Te registraste exitosamente')
            } else {
                console.error('Error en el registro');
            }
        } catch (error) {
            console.error('Error en el registro', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <form method="POST" onSubmit={handleSubmit}>
                <Typography sx={{ m: 4 }} variant="h4" align="center">
                    Registrate
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Nombre"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo Electrónico"
                            type="email"
                            id="email1"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            id="password1"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: '50px', maxWidth: '150px' }}
                        >
                            Registrarse
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default Register;