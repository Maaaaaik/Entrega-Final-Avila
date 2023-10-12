import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import styles from "./CardV2.module.css";
import Box from '@mui/material/Box';

const MediaCard = (props) => {
    const { producto, onAdd, onRemove } = props;
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        onAdd(producto);
        setQuantity(quantity + 1);
    };

    const removeFromCart = () => {
        onRemove(producto);
        setQuantity(quantity - 1);
    };

    return (
        <Card color='primary-light' sx={{ minWidth: 350, maxWidth: 350 }}>
            <Link style={{ textDecoration: 'none' }} to={"../../item/" + `${producto._id}`}>
                <CardMedia sx={{ height: 250 }} image={producto.thumbnail} title={producto.title} />
            </Link>
            <CardContent>
                <Typography sx={{ pb: 1, height: 64 }} gutterBottom variant="h5" component="div">
                    {producto.title}
                </Typography>
                <Link style={{ textDecoration: 'none' }} to={"../../category/" + `${producto.category}`}>
                    <Button size='small' variant='outlined' sx={{ borderRadius: 50 }}>
                        {producto.category}
                    </Button>
                </Link>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                    {quantity === 0 ? (
                        <Button
                            key={producto._id}
                            className={styles.addToCart}
                            onClick={addToCart}
                            sx={{ mb: 2, ml: 1, borderRadius: 50 }}
                            color="primary"
                            size="medium"
                            variant="contained"
                            endIcon={<ShoppingCartRoundedIcon />}
                        >
                            Agregar al carrito
                        </Button>
                    ) : (
                        <>
                            <Button
                                key={producto._id}
                                className={styles.addToCart}
                                onClick={removeFromCart}
                                sx={{ mb: 2, borderRadius: 50 }}
                                style={{ marginLeft: '0' }}
                                color="primary"
                                size="medium"
                                variant="contained"
                            >
                                -
                            </Button>
                            <Typography sx={{ fontSize: 20, mb: 2, minWidth: '20px', textAlign: 'center' }} variant='h5'>
                                {quantity}
                            </Typography>
                            <Button
                                key={producto._id}
                                className={styles.addToCart}
                                onClick={addToCart}
                                sx={{ mb: 2, borderRadius: 50 }}
                                style={{ marginLeft: '0' }}
                                color="primary"
                                size="medium"
                                variant="contained"
                            >
                                +
                            </Button>
                        </>
                    )}</Box>
                <Typography sx={{ fontSize: 20, mr: 2, mb: 2 }} variant='h5'>
                    ${producto.price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default MediaCard;