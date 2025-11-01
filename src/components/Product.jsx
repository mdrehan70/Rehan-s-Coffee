import React from "react";
import "./Product.css";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const fetchProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("/products.json")
  if (!res.ok) {
    throw new Error("Failed to Fetch Products!")
  }
  const data = await res.json()
  return data.Coffees
}

const Product = () => {
  const navigate = useNavigate()
  
  const { data: products, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })
  
  if(isLoading) {
    return <p className="loading">Loading Menu...</p>
  }

  if (isError) {
    return <p className="error">Error: {error.message}</p>;
  } 

  const handleOrderBtn = () => { 
    navigate("/payment")
  }

  const handleCartBtn = (item) => { 
    let cartItem = JSON.parse(localStorage.getItem("cart")) || []
    const existingItem = cartItem.findIndex((i) => i.id === item.id)

    if (existingItem !== -1) {
      cartItem[existingItem].quantity = (cartItem[existingItem].quantity || 1) + 1;
      toast.info(`${item.name} Quantity Updated To ${cartItem[existingItem].quantity}`)

      // cartItem.push(item)
      // localStorage.setItem("cart", JSON.stringify(cartItem))
      // toast.success(`${item.name} Added to Your Cart!`)
    } else {
      const updatedCart = [{ ...item, quantity: 1 }, ...cartItem];
      cartItem = updatedCart;
      toast.success(`${item.name} Added to Your Cart!`);

      // toast.error(`${item.name} is already in you Cart.`)
    }
    localStorage.setItem("cart", JSON.stringify(cartItem))
  }

  return (
      <section className="product">
        <h2 className="section-title">
          Our <span>Coffee</span> Menu
        </h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-body">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="price">{item.price}</div>
                <div className="card-buttons">
                  <button className="btn-order" onClick={handleOrderBtn}>Order Now</button>
                  <button className="btn-cart" onClick={() => handleCartBtn(item)}>Add To Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Product;
