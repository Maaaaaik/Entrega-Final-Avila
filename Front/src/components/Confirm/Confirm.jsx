import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Confirm() {
    return (

        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirma tus datos
            </Typography>
            <Grid sx={{ maxWidth: 600 }} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Nombre"
                        name="Nombre"
                        label="Nombre"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Documento"
                        name="Documento"
                        label="Documento"
                        fullWidth
                        autoComplete="Documento"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth
                        autoComplete="Email"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="Direccion de entrega"
                        name="Direccion de entrega"
                        label="Direccion de entrega"
                        fullWidth
                        autoComplete="Direccion de entrega"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Numero"
                        name="Numero"
                        label="Numero"
                        fullWidth
                        autoComplete="Numero"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Dpto"
                        name="Dpto"
                        label="Dpto"
                        fullWidth
                        autoComplete="Dpto"
                    />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField
                        id="Numero de tarjeta"
                        name="Numero de tarjeta"
                        label="Numero de tarjeta"
                        fullWidth
                        autoComplete="Numero de tarjeta"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="Vencimiento"
                        name="Vencimiento"
                        label="Vencimiento"
                        fullWidth
                        autoComplete="Vencimiento"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="CVC*"
                        name="CVC*"
                        label="CVC*"
                        fullWidth
                        autoComplete="CVC*"
                    />
                </Grid>
                <Button onClick={() => alert("Compra realizada con exito")} sx={{ m: 2, mt: 3 }} variant='contained' >
                    Realizar compra
                </Button>
            </Grid>
        </React.Fragment>
    );
}

export default Confirm;
