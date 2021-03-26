import React,{useEffect, useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../stateProvider'
const Header = () => {
    const [showShadow, setShowShadow] = useState(false)
    const [{ basket, user }, dispatch] = useStateValue()
    console.log(basket)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setShowShadow(true)
            }
            else {
                setShowShadow(false)
            }
        })
        return ()=>window.removeEventListener('scroll', ()=>console.log('removed'))
    }, [])

    return (
        <nav className={`header ${showShadow&&"header__shadow"}`}>
            <Link to='/'>
                <img alt="not found"
                    className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/320px-Image_created_with_a_mobile_phone.png"
                ></img>
            </Link>
            <div className="header__input">
                    <SearchIcon className="header__searchIcon" />
                    <input placeholder="search for products" type="text" className="header__searchInput"/>
            </div>
            <div className="header__links">
                <div className="header__linkOne">
                    <Link to={`${user?"/login" :"/login"} `}>
                        <p>{ user&&'name' in user?user.name:"Hello Guest"}</p>
                        <h2>{ user&&'name' in user?<p>logout</p>:<p>signin</p>}</h2>
                    </Link>
                </div>
                <div className="header__linkTwo">
                <Link to="/login">
                        <p>{ basket?basket.length : 0}</p>
                  <h2><ShoppingBasketIcon/></h2>
            </Link>
                </div>
            </div>


        </nav>
    )
}

export default Header
