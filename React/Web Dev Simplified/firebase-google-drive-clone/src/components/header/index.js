import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom"


const index = ({ showIcons }) => {
    return (
        <div className='header'>
            <Link className="header__logo" to="/">
                {/* <div > */}
                <img src={GDriveLogo} alt="Google Drive" style={{ height: '75%', marginLeft: '25px' }} />
                <span>Drive</span>
                {/* </div> */}
            </Link>
            {showIcons && <>
                <div className="header__searchContainer" style={{ justifyContent: 'center' }}>
                    <div className="header__searchBar">
                        <SearchIcon />
                        <input type="text" placeholder='Search in Drive' />
                        <ExpandMoreIcon />
                    </div>
                </div>
                <div className="header__icons">
                    <span>
                        <HelpOutlineIcon />
                        <SettingsIcon />
                    </span>
                    <AppsIcon />
                    <Link to="/user">
                        <Avatar />
                    </Link>
                </div>
            </>
            }
        </div>
    )
}

export default index
