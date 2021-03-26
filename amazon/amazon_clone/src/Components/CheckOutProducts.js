import React from 'react'
import './CheckOutProduct.css';
import {useStateValue} from '../Context/StateProvider'
function CheckOutProducts({ item: { id, price, rating, image, title } }) {
    const [{basket}, dispatch] = useStateValue()
    // const removeFromBasket = () => {
    //     dispatch({
    //         type: "REMOVE_FROM_BASKET",
    //         payload:id
    //     })
        
    // }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="not found"></img>
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">{title}</div>
                <p className="product__price">
                    <small>$</small>
                    <strong>{ price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                        .map((_,index)=><p key={index}>⭐</p>)
                    }
                </div>
                <button onClick={()=>dispatch({type:"REMOVE_FROM_BASKET", payload:id})}>RemoveFromBasket</button>
            </div>
            
        </div>
    )
}

export default CheckOutProducts
