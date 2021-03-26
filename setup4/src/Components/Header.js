import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../StateProvider'
function Header() {
    const [{user}] = useStateValue()
    return (
        <div className="header">
            <div className="header__left">
                <img
                
                    src="https://media4.picsearch.com/is?gPDtiAWo8Zg17fxINT7rI8gtk5PpFKuR2EcZqf7aWkc&height=341"
                    alt="not found"
                ></img>
                <div className="header__search">
                    <SearchIcon />
                    <input className="header__input" placeholder="search facebook" />
                </div>

            </div>
            <div className="header__center">
                <div className="header__options header__options--active">
                   <HomeIcon fontSize="large"/>
                </div>
                <div className="header__options">
                   <FlagIcon fontSize="large"/>
                </div>
                <div className="header__options">
                   <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header__options">
                   <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header__options">
                   <SupervisedUserCircleIcon fontSize="large"/>
             </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{ user.displayName}</h4>
                </div>
                <div>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                       <ForumIcon/>
                    </IconButton>
                    <IconButton>
                       <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                      <ExpandMoreIcon/>
                </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
