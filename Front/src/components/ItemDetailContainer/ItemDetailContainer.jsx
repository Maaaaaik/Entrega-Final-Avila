import { Link, useParams } from "react-router-dom"
import styles from "./ItemDetailContainer.module.css"
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import BasicRating from "../Rating/Rating";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const ItemDetailContainer = (props) => {
    const { productos, onAdd } = props;
    const { id } = useParams()
    const producto = productos.find((producto) => producto._id == id)


    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{producto.title}</h1>

            <img src={producto.thumbnail} alt="" width={500} />

            <div className={styles.description}><Typography sx={{ mr: 2, mb: 2 }} variant='h5' >
                {producto.description}
            </Typography></div>
            <div className={styles.button}><Link style={{ textDecoration: 'none' }} to={"../../category/" + `${producto.category}`}>
                <Button size='medium' variant='outlined' sx={{ borderRadius: 50 }}>

                    {producto.category}

                </Button></Link></div>
            <div className={styles.rating}><BasicRating rating={producto.rating} /></div>

            <div className={styles.price}> <Typography sx={{ mr: 2, mb: 2 }} variant='h4' >
                ${producto.price}
            </Typography></div>


            <div className="cart">
                <Button onClick={() => onAdd(producto)} sx={{ mb: 2, ml: 1, borderRadius: 50 }} color="primary"
                    size="medium"
                    variant="contained" endIcon={<ShoppingCartRoundedIcon />}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemDetailContainer