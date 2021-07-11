import React from 'react';
import "./styles/SubTotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router';


function SubTotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    
    

    return (
        <div className="subTotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    {/* part of homework */}
                    Sous-Total({basket.length > 1? basket.length + " articles": basket.length + " article"}) :
                    <strong>{value}</strong>
                </p>
                <small className="subTotal_gift">
                    <input type="checkbox"/> Cette commande contient un cadeau
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"€"}
            />
            <button onClick= {e => history.push('/payment')}>Finaliser votre commande</button>
        </div>
    )
}

export default SubTotal
