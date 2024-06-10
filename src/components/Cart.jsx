import React from 'react';

const Cart = ({ cart, removeFromCart, clearCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  if (cart.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={`${process.env.PUBLIC_URL}${item.images[0]}`} alt={item.title} className="cart-item-image" />
          <div className="cart-item-info">
            <h3>{item.title}</h3>
            <p className="cart-item-price">${item.price}</p>
            <p>Quantity: 1</p>
          </div>
          <button onClick={() => removeFromCart(index)} className="cart-item-remove">Remove</button>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={clearCart} className="cart-clear">Clear Cart</button>
        <button className="cart-checkout">Payment</button>
      </div>
    </div>
  );
}

export default Cart;
