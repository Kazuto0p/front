// import React, { useState } from 'react';

// const ShoppingCart = () => { // Renamed the functional component to ShoppingCart
//   // Sample data for cart items
//   const [cartItems, setCartItems] = useState([
//     { id: 1, name: 'Item 1', price: 10 },
//     { id: 2, name: 'Item 2', price: 20 },
//     { id: 3, name: 'Item 3', price: 15 },
//   ]);

//   // Function to remove item from cart
//   const removeFromCart = (itemId) => {
//     setCartItems(cartItems.filter(item => item.id !== itemId));
//   };

//   return (
//     <div className="App">
//       {/* Render the cart items */}
//       {cartItems.map(item => (
//         <div key={item.id}>
//           <p>{item.name} - ${item.price}</p>
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShoppingCart;
