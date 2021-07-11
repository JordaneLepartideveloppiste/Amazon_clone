import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "./styles/Checkout.css";
import SubTotal from "./SubTotal";


function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="./ama_banner.jpg" alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Votre Panier</h2>
        </div>
       { 
        basket.map((item, i) => (
          <CheckoutProduct
            key={i.toString()}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
