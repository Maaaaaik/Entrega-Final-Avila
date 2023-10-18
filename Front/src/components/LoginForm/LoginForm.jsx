import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const LoginForm = (props) => {
    const { setIsLoggedIn } = props

    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }
    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleGitHubLogin = () => {
        // Redirigir al servidor de autenticación de GitHub
        window.location.href = 'https://malakit.onrender.com/api/users/github/';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://malakit.onrender.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                navigate('/home')
                setIsLoggedIn(true)
                setOpen(true)
                localStorage.setItem('jwtToken', data.token);

            } else {
                console.error('Error en el inicio de sesion');
            }
        } catch (error) {
            console.error('Error en el incio de sesion', error);
        }
    }

    return (
        <Container maxWidth="sm">
            <form method="POST" action="/api/users" onSubmit={handleSubmit}>
                <Typography sx={{ m: 4 }} variant="h4" align="center">
                    Inicia Sesión
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Correo Electrónico"
                            type="email"
                            id="email2"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            id="password2"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            onClick={handleGitHubLogin}
                        >
                            Iniciar Sesión con GitHub
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ borderRadius: '50px', maxWidth: '150px' }}
                        >
                            Iniciar Sesión
                        </Button>
                        <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message='Sesion iniciada'
                            action={action}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default LoginForm;