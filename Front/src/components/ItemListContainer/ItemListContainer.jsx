import styles from "./listContainer.module.css"
import RecipeReviewCard from "../CardV2/CardV2.jsx";
import { Divider, Pagination, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import BasicSelect from "../CategoryListContainer/CategoryList";

const ItemListContainer = (props) => {
    const { productos, onAdd, onRemove, pages, navigateToPage } = props;

    const [maxPages, setMaxPages] = useState()

    useEffect(() => {
        if (pages) {
            setMaxPages(pages.totalPages);
        }
    }, [pages]);


    const pagChange = (event, value) => {
        navigateToPage(value);
    };



    return (
        <div className={styles.productpage}>
            <div className={styles.TituloYCategoria}>
                <Typography variant="h3" sx={{ m: 2 }} color='primary' className='malakita'>Malakita Tienda</Typography >
                <BasicSelect productos={productos} />
            </div>
            <Divider variant="middle" />
            <div className={styles.container}>

                {productos.map((producto) => (

                    <RecipeReviewCard key={producto._id} onAdd={onAdd} onRemove={onRemove} producto={producto} />

                ))}
            </div>

            <div>
                <Pagination sx={{
                    position: 'fixed', bottom: '0', width: '100%', opacity: [0.8], transition: '250ms', '&:hover': {
                        opacity: [1],
                    }
                }} onChange={pagChange} count={maxPages} color="primary" />
            </div>
        </div>


    );
};



export default ItemListContainer
