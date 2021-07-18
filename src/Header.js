import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Header = () => {

    const [inputSearch, setInputSearch] = useState('')

    return (
        <div className = "header">
            <div className="header__left">
                <MenuIcon />

                <Link to = '/'>
                    <img className = "header__logo"
                        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png" 
                        alt = "" 
                    
                    />
                    
                </Link>
                
            </div>

            <div className="header__input">
                <input value = {inputSearch}
                 onChange = {(e) => setInputSearch(e.target.value)}
                 placeholder = "search" type = "text"/>

                <Link to = {`/search/${inputSearch}`}>
                    <SearchIcon />
                </Link>
                

            </div>

            <div className="header__icons">
       
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar 
                    src = "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102"
                    alt = ""
                />
        
            </div>
           
                 
        </div>
    )
}

export default Header
