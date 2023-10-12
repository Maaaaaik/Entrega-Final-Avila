import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Confirm from '../Confirm/Confirm';
import styles from "./Cart.module.css"
import Box from '@mui/material/Box';


export default function Cart(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (

        <div className={styles.container}>
            <h2>Carrito</h2>
            <div className={styles.cart}>
                {cartItems.length === 0 && <div>El carrito esta vacio</div>}
                {cartItems.map((item) => (

                    <div key={item._id} className={styles.lista}>
                        <List sx={{ bgcolor: 'white' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="item" src={item.thumbnail} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline', fontSize: '1.2rem' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {item.description}
                                            </Typography>
                                            <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                                                <Typography sx={{ fontSize: '1.5rem' }}> <strong>{item.qty}</strong> x ${item.price}</Typography>
                                                <CardActions >
                                                    <Button className={styles.boton} color='primary' sx={{ borderRadius: 50, minWidth: '0px' }} variant='contained' onClick={() => onRemove(item)}>
                                                        -
                                                    </Button >
                                                    <Typography className={styles.cantidad} sx={{ mt: 3 }}>  {item.qty}  </Typography>
                                                    <Button className={styles.boton} color='primary' sx={{ borderRadius: 50, ml: '0%', minWidth: '0px' }} style={{ margin: 0 }} variant='contained' onClick={() => onAdd(item)}>
                                                        +
                                                    </Button>
                                                </CardActions></Box>

                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>
                        <Divider orientation="vertical" variant="middle" flexItem />
                    </div>

                ))}
                <div className={styles.chekout}>
                    {cartItems.length !== 0 && (
                        <>
                            <List sx={{ minWidth: 30 }}>

                                <ListItem>
                                    <ListItemText
                                        primary="Precio de los productos"
                                        secondary={itemsPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="IVA"
                                        secondary={taxPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Envio"
                                        secondary={shippingPrice.toFixed(2)}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="TOTAL"
                                        secondary={totalPrice.toFixed(2)}
                                    />
                                </ListItem>
                            </List>


                            <div><Confirm cartItems={cartItems} /></div>

                        </>
                    )}

                </div>
            </div>
        </div>

    );
}

