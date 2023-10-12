import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cart from './components/Cart/Cart'
import NewProductForm from './components/NewProductForm/ProductForm'
import Login from './components/login/Login'
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer'


function App() {

  const [cartItems, setCartItems] = useState([]);
  const [productos, setProductos] = useState([]);
  const [pages, setPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {

      setIsLoggedIn(true);
    }
  })

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const navigateToPage = (page) => {
    fetch(`https://malakit.onrender.com/api/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products.docs);
        setCurrentPage(page); // Actualiza la página actual cuando obtienes nuevos datos
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  };

  useEffect(() => {

    fetch('https://malakit.onrender.com/api/products')
      .then((response) => response.json())
      .then((data) => {
        setPages(data.products)
        setProductos(data.products.docs);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, [])

  const theme = createTheme({
    palette: {
      primary: {
        mode: 'light',
        main: '#027A4D',
      },
      secondary: {
        main: '#4CDA89',
      },
      background: {
        default: '#DAF1E4',
      },
      text: {
        primary: '#333333',
      },
      error: {
        main: '#b74545',

      },
    },
    typography: {
      fontFamily: 'Product Sans Medium',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
       @import url('https://fonts.cdnfonts.com/css/white-love');
       @import url('https://fonts.cdnfonts.com/css/product-sans')
}
      `,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Navbar productos={productos} cartItems={cartItems} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
              <Route path='/category/:category' element={<CategoryListContainer productos={productos} onAdd={onAdd} />} />
              <Route path="/" element={isLoggedIn ? <ItemListContainer onAdd={onAdd} onRemove={onRemove} productos={productos} navigateToPage={navigateToPage} currentPage={currentPage} pages={pages} /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/home' element={<ItemListContainer onAdd={onAdd} onRemove={onRemove} productos={productos} navigateToPage={navigateToPage} currentPage={currentPage} pages={pages} />} />
              <Route path='/newProduct' element={<NewProductForm productos={productos} />} />
              <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} productos={productos} />} />
              <Route path='/cart' element={<Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
