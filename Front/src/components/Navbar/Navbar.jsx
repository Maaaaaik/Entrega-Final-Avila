import "./Navbar.css"
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Badge } from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountMenu from "../UserOptions/UserOption";

const Navbar = (props) => {
    const { cartItems, isLoggedIn, setIsLoggedIn } = props
    const totalQuantity = cartItems.reduce((total, product) => total + product.qty, 0)
    const location = useLocation()
    return (
        <nav className="container">

            <Link style={{ textDecoration: 'none' }} to={isLoggedIn ? '/home' : '/'}><h1>Malakita</h1></Link>
            <Link style={{ textDecoration: 'none' }} to={isLoggedIn ? '/home' : '/'}><Button disableElevation variant={location.pathname === '/home' ? 'contained' : null} sx={{ borderRadius: 50, color: "whitesmoke", }}>Inicio</Button></Link>
            <Link style={{ textDecoration: 'none' }} to={isLoggedIn ? '/home' : '/'}><Button disableElevation variant={location.pathname === '/About' ? 'contained' : null} sx={{ borderRadius: 50, color: "whitesmoke", }}>FAQ</Button></Link>
            <Link style={{ textDecoration: 'none' }} to={isLoggedIn ? '/newProduct' : '/'}><Button disableElevation variant={location.pathname === '/newProduct' ? 'contained' : null} sx={{ borderRadius: 50, color: "whitesmoke", }}>Nuevo Producto</Button></Link>
            <Button sx={{ borderRadius: 50, color: "whitesmoke", }}>Conctacto</Button>
            <Link style={{ textDecoration: 'none' }} to={isLoggedIn ? '/cart' : '/'}> <Button disableElevation sx={{ borderRadius: 50, color: 'whitesmoke' }} variant={location.pathname === '/cart' ? 'contained' : null} aria-label="Carrito">
                <Badge badgeContent={totalQuantity} color="secondary">
                    <ShoppingCartRoundedIcon />
                </Badge>
            </Button></Link>
            <AccountMenu setIsLoggedIn={setIsLoggedIn} />
        </nav >
    )
}

export default Navbar
