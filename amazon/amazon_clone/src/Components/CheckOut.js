import React from 'react'
import './CheckOut.css';
import { useStateValue } from '../Context/StateProvider';
import CheckOutProducts from './CheckOutProducts'
import SubTotal from './SubTotal';
function CheckOut() {
    const [{basket, user}] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                className="checkout__ad"
                src="https://scontent.febb5-1.fna.fbcdn.net/v/t1.0-9/26230482_135989253859399_907802192853618198_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=fs-lH3c62XoAX_6bJz3&_nc_ht=scontent.febb5-1.fna&oh=033d35140c2fce4fa70e5b3e7565e8a3&oe=5FF2F098"
                alt="Not found"
            ></img>
            {
            
                basket&&basket.length?(
                    <div className="checkout__title">
                            <h1> Hello { user?user.displayName:null}Your shopping basket</h1>
                        {
                            basket.map((item, index) => (<CheckOutProducts key={index}item={ item}/>))
                        }
                    </div> 
                )
                    : (
                            <div className="checkout__empty">
                                <h3>Your shopping basket is empty</h3>
                        
                            </div>
                
                )
            }
            
            </div>
            {
                basket && basket.length?(
                    <div className="checkout__right">
                    <img
                    className="checkout__rightImage"
                    src="https://scontent.febb5-1.fna.fbcdn.net/v/t1.0-9/26230482_135989253859399_907802192853618198_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=fs-lH3c62XoAX_6bJz3&_nc_ht=scontent.febb5-1.fna&oh=033d35140c2fce4fa70e5b3e7565e8a3&oe=5FF2F098"
                    alt="Not found"
                        ></img>
                        <div className="checkout__sub">
                            <SubTotal/>
                        </div>
                        
                    </div>
                ) :
                    (
                        <div className="checkout__right">
                    <img
                    className="checkout__rightImage"
                    src="https://scontent.febb5-1.fna.fbcdn.net/v/t1.0-9/26230482_135989253859399_907802192853618198_n.png?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=fs-lH3c62XoAX_6bJz3&_nc_ht=scontent.febb5-1.fna&oh=033d35140c2fce4fa70e5b3e7565e8a3&oe=5FF2F098"
                    alt="Not found"
                            ></img>
                            </div>
                    )
            }
        </div>
    )
}

export default CheckOut
