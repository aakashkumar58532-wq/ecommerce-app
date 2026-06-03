import { useEffect, useState } from "react";

import Login from "./Login";

import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [products, setProducts] = useState([]);

  const [cartCount, setCartCount] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  const [name, setName] = useState("");

  const [price, setPrice] = useState("");

  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");




  useEffect(() => {

    fetch("https://ecommerce-app-ungw.onrender.com/api/products")

      .then((res) => res.json())

      .then((data) => {

        setProducts(data);

      });

  }, []);




  const addToCart = (price) => {

    setCartCount(cartCount + 1);

    setTotalPrice(totalPrice + Number(price));

  };




  const deleteProduct = async (id) => {

    await fetch(`
      https://ecommerce-app-ungw.onrender.com/api/products/${id}`, {

      method: "DELETE"

    });

    setProducts(

      products.filter((product) => product._id !== id)

    );

  };




  const addProduct = async () => {

    const newProduct = {

      name,

      price,

      category,

      image

    };



    const res = await fetch(

      "https://ecommerce-app-ungw.onrender.com/api/products",

      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        body: JSON.stringify(newProduct)

      }

    );



    const data = await res.json();



    setProducts([...products, data]);



    setName("");

    setPrice("");

    setCategory("");

    setImage("");

  };




  if (!isLoggedIn) {

    return <Login setIsLoggedIn={setIsLoggedIn} />;

  }




  return (

    <div className="app">




      <div className="navbar">

        <h1 className="logo">

          MyShop 🛒

        </h1>



        <div className="cart">

          Cart: {cartCount} | ₹{totalPrice}

        </div>

      </div>





      <div className="form-container">

        <h2>Add Product</h2>



        <input

          type="text"

          placeholder="Product Name"

          value={name}

          onChange={(e) => setName(e.target.value)}

        />



        <input

          type="number"

          placeholder="Price"

          value={price}

          onChange={(e) => setPrice(e.target.value)}

        />



        <input

          type="text"

          placeholder="Category"

          value={category}

          onChange={(e) => setCategory(e.target.value)}

        />



        <input

          type="text"

          placeholder="Image URL"

          value={image}

          onChange={(e) => setImage(e.target.value)}

        />



        <button

          className="add-btn"

          onClick={addProduct}

        >

          Add Product

        </button>

      </div>





      <div className="products">

        {products.map((product) => (

          <div

            className="card"

            key={product._id}

          >

            <img

              src={product.image}

              alt={product.name}

            />



            <h2>{product.name}</h2>



            <p>{product.category}</p>



            <h3>₹{product.price}</h3>





            <button

              className="cart-btn"

              onClick={() => addToCart(product.price)}

            >

              Add To Cart

            </button>





            <button

              className="delete-btn"

              onClick={() => deleteProduct(product._id)}

            >

              Delete

            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default App;
