import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./styles/Payment.css";
import axios from './axios';


function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();

  useEffect(() => {
      //generate strip secret to charge custommer
    const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          // Stripe expects total in cents
          url: `/payment/create?total=${getBasketTotal(basket)*100}`,
        });
        setClientSecret(response.data.clientSecret);
        
    }
    getClientSecret();
  }, [basket]);

  console.log('THE SECRET IS >>>', clientSecret);

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        history.replace('/orders')
    })
  };

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Votre panier contient{" "}
          {<Link to="/checkout">{basket.length} articles</Link>}{" "}
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Adresse de Livraison</h3>
          </div>
          <div className="payment_adress">
            <p>{user?.email}</p>
            <p>123 avenue du Reacteur</p>
            <p>Paris, FR</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Confirmation articles et livraisons</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Mode de paiement</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                      <h3>Total de votre commande : {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"€"}
                />
                <button disabled= {processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Payer maintenant"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
