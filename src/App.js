// import { useEffect, useState } from 'react';
// import './App.css';
// import apidata from './apidata';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(apidata);
//   }, []);

//   return (
//     <div>
//       {data.length > 0 ? ( 
//         data.map((item, index) => (
//           <div key={index}>
//             <h2>{item.title}</h2>
//             <p>Category: {item.category}</p>
//             <p>Subtitle: {item.subtitle}</p>
//             <p>Discounted Price: {item.discounted_price}</p>
//             <p>Strike Price: {item.strike_price}</p>
//             <p>Discount: {item.discount}</p>
//             <p>Rating: {item.rating}</p>
//             <p>Rating Count: {item.rating_count}</p>
//             <p>Images:</p>
//             <ul>
//               {item.images.map((image, imgIndex) => (
//                 <li key={imgIndex}>
//                   <img src={image} alt={`Image ${imgIndex + 1}`} />
//                 </li>
//               ))}
//             </ul>
//             <p>Size: {item.size.join(', ')}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;



// import React, { useEffect, useState } from 'react';
// import './App.css';
// import demoapi from './demoapi';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(demoapi);
//   }, []);

//   return (
//     <div>
//       {data.length > 0 ? (
//         data.map((item) => (
//           <div key={item._id.$oid}>
//             <h2>{item.name}</h2>
//             <p>Brand: {item.brand}</p>
//             <p>Price: ${item.price}</p>
//             <p>MRP: ${item.MRP}</p>
//             <p>Discount: {item.discount}%</p>
//             <p>Offer Price: ${item.offer_price}</p>
//             <p>Color: {item.color}</p>
//             <p>Category: {item.category}</p>
//             <p>Sub Category: {item.sub_category}</p>
//             <div>
//               {item.images.map((image, index) => (
//                 <img key={index} src={image} alt={`${item.name} - ${index + 1}`} />
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import amazondemo from './amazondemo'; // Importing the data

// const App = () => {
//   return (
//     <div>
//       {amazondemo.map((product) => (
//         <div key={product.id}>
//           {/* Render product details here */}
//           <h2>{product.title}</h2>
//           <p>Brand: {product.brand}</p>
//           {/* Render other product details as needed */}
//           <img src={product.img} alt={product.title} />
//           {/* Render other product images */}
//           {/* {product.images && Array.isArray(product.images) && product.images.map((image, index) => (
//             <img key={index} src={image} alt={`${product.title} Image ${index}`} />
//           ))} */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

// import React from 'react';
// import demo from './demo'; // Importing demo data from demo.js

// function App() {
//   return (
//     <div>
//       <h1>Product List</h1>
//       {/* Mapping over the array of products */}
//       {demo.Products.map(product => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>Brand: {product.brand}</p>
//           <p>Rating: {product.rating}</p>
//           <p>Category: {product.category}</p>
//           <p>Price: {product.price}</p>
//           {/* You can add more details here */}
//           <img src={product.img} alt={product.title} />
//           {/* You can display additional images here */}
//           <div>
//             {product.images.map((image, index) => (
//               <img key={index} src={image} alt={`Image ${index}`} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

function App(){

  const [data, setData] = useState([]);

    function fetchdata() {
        fetch("https://real-blue-gosling-coat.cyclic.app/products")
        .then((res) => res.json())
        .then((resp) => setData(resp));
    }

    useEffect(() => {
        fetchdata();
        console.log(data);
    }, []);
  

    const [totalitem, setTotal]= useState(0)
    const [cartItem, setCartitems]=useState([])

    const addtocart =(product)=>{
      setCartitems([...cartItem, product])
      setTotal(totalitem + 1)
      }

  return(
    <>
    <Navbar totalitem={totalitem}/>

    <Routes>
    <Route path="/" element={<Home data={data} addtocart={addtocart}/>}/>
    <Route path="/Products" element={<Products />}/>
    <Route path="/About" element={<About cartItem={cartItem}/>}/>
  </Routes>
    </>
    
  );
}

export default App;
