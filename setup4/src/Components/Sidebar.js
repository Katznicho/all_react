import React from 'react'
import './Sidebar.css';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../StateProvider'
function Sidebar() {
    const [{user:{photoURL, displayName}}] = useStateValue()
    return (
        <div className ="sidebar">
            <SideBarRow src={photoURL} title={displayName}/>
            <SideBarRow
                Icon={LocalHospitalIcon}
                title = 'Covid 19 information Center'
            />
            <SideBarRow Icon ={EmojiFlagsIcon} title ="pages" />
            <SideBarRow Icon = {PeopleIcon} title ="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messenger" />
            <SideBarRow Icon={StorefrontIcon} title="Market Place" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreIcon} title="Market Place" />
            
            
        </div>
    )
}

export default Sidebar
