import { useParams } from "react-router-dom";
import RecipeReviewCard from "../CardV2/CardV2";
import styles from "./CategoryList.module.css"
import { Typography } from "@mui/material";
import BasicSelect from "./CategoryList";
import Divider from "@mui/material/Divider";


const CategoryListContainer = (props) => {
    const { productos, onAdd, onRemove } = props
    const { category } = useParams()
    const producto1 = productos.filter((producto) => producto.category == category)
    return (
        <div className={styles.container}>
            <div className={styles.TituloYCategoria}>
                <Typography variant="h3" sx={{ m: 2 }} color='primary' className='malakita'>Malakita Tienda</Typography >
                <BasicSelect productos={productos} />
            </div>
            <Divider variant="middle" />
            <div className={styles.categoryContainer}>{producto1.map((producto) => (

                <RecipeReviewCard key={producto._id} producto={producto} onAdd={onAdd} onRemove={onRemove} />

            ))}
            </div>


        </div>

    );
};

export default CategoryListContainer
