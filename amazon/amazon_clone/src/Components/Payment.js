import React from 'react';
import './Payment.css';
import { useStateValue } from '../Context/StateProvider';
import CheckOutProducts from './CheckOutProducts';
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../Context/reducer';
function Payment() {
    const [{basket, user}] = useStateValue()
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    checkout {
                        <Link to="/checkout">{basket.length } items</Link>
                    }
                </h1>
                <div className="payment__title">
                    <h3>Delivery Addrress</h3>
                    
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__specificDetails">
                <h3>EmailAddress : {user && user.email}</h3>
                <strong>Name:
                { user&&user.displayName}</strong>
                </div>

            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Review items and delivery</h3>
                    <div className="payment__items">
                    {
                        basket.map((item, index) => (<CheckOutProducts key={index}item={ item}/>))
                    }
                    </div>
                </div>
            </div>
            <div className="payment__section">
                <div>
                    <h3 className="payment__title">Payment Method</h3>
                    <button onClick={()=>alert('I will continue man am tired')}>PayFromhere</button>
                </div>
               
                <div className="payment__details">
                    <h2>Total: ${ getBasketTotal(basket)}</h2>
                </div>

            </div>
        </div>
    )
}

export default Payment
