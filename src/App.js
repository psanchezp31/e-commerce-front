import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';

 

function App() {

  const [products, setProducts] = useState([]);

 

  useEffect(() => {

    axios.get('http://localhost:3001/api/getAll').then((response) => {

      setProducts(response.data);

    });

  }, []);

 

  return (

    <div className="App">

      <Header />

      <main>

        <h2>Products Available</h2>

        <ul>

          {products.map((product) => (

            <li key={product._id}>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <p>${product.price}</p>

            </li>

          ))}

        </ul>

      </main>

    </div>

  );

}

 

export default App;