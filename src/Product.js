import React from "react";
import "./styles/Product.css";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

import { useStateValue } from "./StateProvider";

function Product({ id, title, price, img, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        img: img,
        price: price,
        rating: rating,
      },
    });
  };

  let emptyStar = 5 - rating;

  return (
    <div className="product">
      <img src={img} alt="_" />

      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <strong>{price}</strong>
          <small> €</small>
        </p>
        <div className="product_rating">
          {Number.isInteger(rating)
            ? Array(rating)
                .fill()
                .map((_, i) => (
                  <StarIcon style={{ fontSize: 18, color: "#fbcb2c" }} />
                ))
            : Array(Math.floor(rating))
                .fill()
                .map((_, i) => (
                  <StarIcon style={{ fontSize: 18, color: "#fbcb2c" }} />
                ))}
          {!Number.isInteger(rating) && (
            <StarHalfIcon style={{ fontSize: 18, color: "#fbcb2c" }} />
          )}
          {emptyStar !== 0 &&
            Array(Math.floor(emptyStar))
              .fill()
              .map((_, i) => (
                <StarBorderIcon style={{ fontSize: 18, color: "#fbcb2c" }} />
              ))}
        </div>
      </div>

      <button onClick={addToBasket}>Ajouter au panier</button>
    </div>
  );
}

export default Product;
