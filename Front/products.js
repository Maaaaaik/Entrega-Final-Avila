const products = [
    {
        title: "Televisor 4K Smart TV Samsung",
        price: 799.99,
        description: "Televisor con resolución 4K, pantalla de 55 pulgadas y conexión a internet",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.5,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Camisa de vestir para hombre",
        price: 39.99,
        description: "Camisa de vestir de algodón para hombre en color blanco",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.2,
        category: {
            name: "moda"
        }
    },
    {
        title: "Sofá reclinable de piel",
        price: 1499.99,
        description: "Sofá de piel reclinable con capacidad para tres personas",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.8,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Cámara réflex Nikon",
        price: 899.99,
        description: "Cámara réflex con sensor de 24 megapíxeles y lente de 18-55mm",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.4,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Mueble de TV de madera",
        price: 299.99,
        description: "Mueble de TV de madera con espacio de almacenamiento para accesorios",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.6,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Zapatos de cuero para mujer",
        price: 79.99,
        description: "Zapatos de cuero para mujer en color negro",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.1,
        category: {
            name: "moda"
        }
    },
    {
        title: "Mesa de centro de vidrio",
        price: 199.99,
        description: "Mesa de centro de vidrio con marco de metal",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.3,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Altavoz inalámbrico Bluetooth",
        price: 99.99,
        description: "Altavoz inalámbrico Bluetooth con micrófono integrado y batería de larga duración",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.7,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Silla de escritorio ergonómica",
        price: 249.99,
        description: "Silla de escritorio ergonómica con soporte lumbar y reposabrazos ajustables",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.9,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Auriculares inalámbricos con cancelación de ruido",
        price: 199.99,
        description: "Auriculares inalámbricos con cancelación de ruido y micrófono integrado",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.3,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Lámpara de pie moderna",
        price: 149.99,
        description: "Lámpara de pie con pantalla de tela y base de metal en color negro",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.6,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Chaqueta para hombre",
        price: 89.99,
        description: "Chaqueta de cuero sintético para hombre en color marrón",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.2,
        category: {
            name: "moda"
        }
    },
    {
        title: "Sofá de jardín modular",
        price: 1199.99,
        description: "Sofá de jardín modular con cojines de tela impermeable y estructura de aluminio",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.8,
        category: {
            name: "jardineria"
        }
    },
    {
        title: "Robot aspirador",
        price: 499.99,
        description: "Robot aspirador con mapeo inteligente y función de limpieza programable",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.7,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Mesa de comedor extensible",
        price: 799.99,
        description: "Mesa de comedor extensible de madera maciza en color natural",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.5,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Sudadera con capucha para mujer",
        price: 59.99,
        description: "Sudadera con capucha para mujer en color gris oscuro",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.1,
        category: {
            name: "moda"
        }
    },
    {
        title: "Tablet Samsung Galaxy Tab A7",
        price: 299.99,
        description: "Tablet Samsung Galaxy Tab A7 con pantalla de 10.4 pulgadas y 32 GB de almacenamiento interno",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.6,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Mesa de centro de cristal",
        price: 149.99,
        description: "Mesa de centro de cristal templado y base de metal cromado",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.4,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Zapatillas deportivas para mujer",
        price: 79.99,
        description: "Zapatillas deportivas para mujer con tecnología de amortiguación de impacto",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.3,
        category: {
            name: "moda"
        }
    },
    {
        title: "Mueble de televisión",
        price: 299.99,
        description: "Mueble de televisión con estantes y puertas de cristal templado",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.7,
        category: {
            name: "muebles"
        }
    },
    {
        title: "Cortacésped eléctrico",
        price: 199.99,
        description: "Cortacésped eléctrico con cuchillas de acero inoxidable y altura de corte ajustable",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.5,
        category: {
            name: "jardineria"
        }
    },
    {
        title: "Cámara réflex digital Canon EOS 90D",
        price: 1199.99,
        description: "Cámara réflex digital Canon EOS 90D con sensor CMOS de 32.5 megapíxeles",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.8,
        category: {
            name: "tecnologia"
        }
    },
    {
        title: "Mesa plegable para exterior",
        price: 99.99,
        description: "Mesa plegable para exterior con superficie de resina y estructura de metal",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.2,
        category: {
            name: "jardineria"
        }
    },
    {
        title: "Silla de comedor",
        price: 79.99,
        description: "Silla de comedor tapizada en tela y patas de madera maciza",
        images: "https://api.lorem.space/image?w=400&h=320",
        rating: 4.1,
        category: {
            name: "muebles"
        }
    }
]

export default products

async function addImagesToProducts() {
    for (let i = 0; i < products.length; i++) {
        const productName = products[i].title;
        const query = encodeURIComponent(productName);
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=1&client_id=lE5j-DC42aa0XF9uyWIiD119bkIS0bT3wHaENX0oCwI`;
        const response = await fetch(url);
        const data = await response.json();
        const imageUrl = data.results[0].urls.regular;
        products[i].images.push(imageUrl);
    }
}

addImagesToProducts()
    .then(() => {
        console.log(products);
    })
    .catch((error) => {
        console.error(error);
    });

