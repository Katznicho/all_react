import React,{useEffect, useState} from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    //bem
    const [scrolled, setScrolled] = useState(false)
    //var scrolled = false
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
       })
        return () => {
            window.removeEventListener('scroll', ()=>console.log('removed'))
        }

    }, [])
    
    return (
        <nav className= {`header ${scrolled&&"header__boxShadow"}`}>
            <img
                className="header__logo"
                alt="not found"
                src = './images/nico.png'
            ></img>
            <div className="header__input">
                <SearchIcon className="header__searchIcon"/>
                <input
                    type="text"
                    className="header__searchInput"
                />
            </div>
            <div className="header__info">
                <Link to="/signin">
                <div className="header__infoOne">
                    <p>Hello</p>
                    <h2>signin</h2>
                </div>
                </Link>
                <Link to="/signin">
                <div className="header__infoTwo">
                    <p>0</p>
                    <ShoppingBasketIcon/>
                </div>
                </Link>
                <Link to="/signin">
                <div className="header__infoThree">
                    <p>katende</p>
                    <Avatar/>
                </div>
                </Link>
            </div>

        </nav>
    )
}

export default Header
