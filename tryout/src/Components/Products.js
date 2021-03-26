import React from 'react'
import './Products.css';
import { Button } from '@material-ui/core';
import {useStateValue} from '../stateProvider'
const Products = ({ image, name, price, rating, id }) => {
    //console.log(id)
    const [{}, dispatch] = useStateValue()
    const addToChart = () => {
        dispatch({
            type: "ADD_TO_CHART",
            payload:{image, name, price,rating, id}
        })
    }
    return (
        <div className="products">
            <div className="products__info">
                <img alt="not found"
                    src = {image}
                ></img>
                <div className="products__price">
                    <span>price</span><small>$</small>
                    <p>{ price}</p>
                </div>
                <div className="products__rating">
                    rating{
                        Array(rating).fill()
                        .map((_, index)=>(<p key={index}>⭐</p>))
                    }
                </div>
                <Button
                    className="products__button"
                    variant="contained"
                    onClick = {addToChart}
                    color="primary">AddToChart</Button>
            </div>
        </div>
    )
}

export default Products
