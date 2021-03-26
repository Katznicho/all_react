import React from 'react';
import './SubTotal.css';
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Context/reducer';
import {useHistory} from 'react-router-dom'
function SubTotal() {
    const [{ basket, user }] = useStateValue()
    const history = useHistory()
    const pushUser= () =>{
        if (user) {
            history.push('/payment')
        }
        else {
            history.push('/login')
        }
    }
    return (
       
        <div className="subtotal">
            <div>
                <p>Subtotal ({basket.length}) items
                <strong>:${getBasketTotal(basket)}</strong></p>
            </div>
            <div className="subtotal__proceed">
            <span><input type="checkbox"/>This order contains a gift</span>
                <button onClick = {pushUser}>ProceedToCheckOut</button>
            </div>
        </div>
    )
}

export default SubTotal
