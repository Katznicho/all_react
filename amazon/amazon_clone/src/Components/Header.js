import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../Context/StateProvider';
import {auth} from './FirebaseConfig/firebase'
function Header() {
    const username = localStorage.getItem('username')
    const [{ basket, user }] = useStateValue()
    const handleSignOut = () => {
        if (user) {
            auth.signOut()
        }
        
    }
    return (
        <nav className="header">
            <Link to="/">
                <img
                className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="not found">
               </img>
            </Link>
            <div className="header__search">
                <input type="text"
                className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}
                    className="header__link">
                    <div
                    onClick = {handleSignOut}
                        className="header__option">
                        <span className="header__optionLineOne">hello { user?user.displayName :"Guest"}</span>
                        <span className="header__optionLineTwo">{user?'signOut':'signin'}</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                        <span
                            className="header__optionLineTwo header__optionBasketCount">
                            {basket && basket.length}</span>
                            <ShoppingBasketIcon/>
                </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">&orders</span>
                    </div>
                </Link>
                <Link to={'/login'} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
