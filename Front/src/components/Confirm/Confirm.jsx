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
                        id="Email"
                        name="Email"
                        label="Email"
                        fullWidth
                        autoComplete="Email"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="Repetir Email"
                        name="Repetir Email"
                        label="Repetir Email"
                        fullWidth
                        autoComplete="Repetir Email"
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
