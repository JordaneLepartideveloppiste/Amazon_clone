import React from 'react';
import "./styles/CheckoutProduct.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, title, price, img, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,

        })
    }

    let emptyStar = 5 - rating;

    return (
      <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={img} alt="_" />
        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkoutProduct_rating">
            {Number.isInteger(rating)
              ? Array(rating)
                  .fill()
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      style={{ fontSize: 18, color: "#fbcb2c" }}
                    />
                  ))
              : Array(Math.floor(rating))
                  .fill()
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      style={{ fontSize: 18, color: "#fbcb2c" }}
                    />
                  ))}
            {!Number.isInteger(rating) && (
              <StarHalfIcon style={{ fontSize: 18, color: "#fbcb2c" }} />
            )}
            {emptyStar !== 0 &&
              Array(Math.floor(emptyStar))
                .fill()
                .map((_, i) => (
                  <StarBorderIcon
                    key={i}
                    style={{ fontSize: 18, color: "#fbcb2c" }}
                  />
                ))}
          </div>
          <button onClick={removeFromBasket}>Retirer du panier</button>
        </div>
      </div>
    );
}

export default CheckoutProduct
