import React from 'react'
import '../compStyles/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='header'>
            {/* Amazon Logo */}
            <Link to='/'>
                <img className='amazon__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* Search */}
            <div className="header__search">
                <input type="text" className='header__searchInput' />
                {/* Search Logo */}
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* Header Nav */}
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header