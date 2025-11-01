import React, { useEffect, useState } from "react";
import "./AddToCart.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || []
    setCart(savedCart)
  }, [])

  const removeItem = (id, name) => { 
    const updatedCart = cart.filter((i) => i.id !== id)
    setCart(updatedCart)
    toast.success(`Successfully Removed ${name}`)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const updateQuantity = (id, type) => { 
    const updatedCart = cart.map((item) => {
        if (item.id === id) {
            const newQuantity = type === 'Inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1)
            return { ...item, quantity: newQuantity}
        }
        return item;
    })
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const total = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace("₹", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    navigate("/payment", { state: { total } }); 
  };

  return (
    <section className="cart">
      <h2 className="cart-title">
        Your <span>Cart</span>
      </h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty ☕</p>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Price: <span>{item.price}</span></p>
                <p>Quantity: {item.quantity}</p>
                <div className="quantity">
                    <button className="inc-btn" onClick={() => updateQuantity(item.id, "Inc")}>+</button>
                    <button className="dec-btn" onClick={() => updateQuantity(item.id, "Dec")}>-</button>
                </div>
              </div>
              <div className="subTotalBtn">
                <div className="cart-subtotal">
                  ₹{parseInt(item.price.replace("₹", "")) * item.quantity}
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id, item.name)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
