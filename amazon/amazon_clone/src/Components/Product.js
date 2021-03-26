import React from 'react';
import './Product.css';
import {useStateValue} from '../Context/StateProvider'
function Product({ id, title, rating, price, image, }) {
    const [, dispatch] = useStateValue()
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            payload: {
                id,
                title,
                price,
                rating,
                image
            }
        })
    }
    return (
        <div className="product">
         <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{ price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                    .map((_,index)=><p key={index}>⭐</p>)
                }
            </div>
        </div>
            
            <img src={image} alt="Not found"></img>
            <button className="product__button" onClick={addToBasket}>AddToChart</button>
        </div>
    )
}

export default Product
