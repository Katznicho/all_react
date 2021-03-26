import React from 'react'
import Products from './Products';
import './Product.css'
const Product = () => {
    return (
        <div className="product">
            <div className="product__products">
                <Products
                    id ={1}
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    rating = {3}
                />
                <Products
                    id = {2}
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    rating = {4}
                />
                <Products
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    id={3}
                    rating = {4}
                />
                <Products
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    id={4}
                    rating = {4}
                />
                <Products
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    id={5}
                    rating = {4}
                />
                <Products
                    image="https://images.pexels.com/photos/5987154/pexels-photo-5987154.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    name="orange"
                    price="500"
                    id={6}
                    rating = {4}
                />
            </div>
        </div>
    )
}

export default Product
