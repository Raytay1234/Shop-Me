import React from 'react';
import  CartContext  from '../context/CartContext.jsx';


const Cart = () => {
  const { cartItems, removeFromCart, total } = CartContext();

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i} style={{ marginBottom: '1rem' }}>
                {item.title} × {item.quantity} = ${item.price * item.quantity}
                <button onClick={() => removeFromCart(item.title)} style={{ marginLeft: '1rem' }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;