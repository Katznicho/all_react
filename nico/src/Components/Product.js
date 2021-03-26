import React from 'react'
import './Product.css';
import {Button} from '@material-ui/core'
function Product({ image, id, price, rating, name }) {
    //console.log(Array.fill(5))
    //alert(rating)
    return (
        <div className="product">
            <img
                className="product__image"
                alt="no found"
                src={image}
            ></img>
            <div className="product__info">
                <div className="product__name">
                    <p>Name</p>
                    <h3>{ name}</h3>
                </div>
                <div className="product__price">
                    <p>price</p>
                    <small>shs</small>
                    <h3>{ price}</h3>
                </div>
                <div className="product__rating">
                    <p>Rating</p>
                    
                        {
                            Array(rating).fill()
                            .map((_,index)=>(<p key={index}>⭐</p>))

                        }
                    
                </div>
            </div>
            <div className="product__button">
                <Button
                variant="contained"
                color="primary"
            >AddToChart</Button> 
            </div>

        </div>
    )
}

export default Product
