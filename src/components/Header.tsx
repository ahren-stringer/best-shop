import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {

    const cartCount = useAppSelector(state => state.cart)

    return (
        <div className="navbar-area">

            <div className="main-navbar">
                <div className="container">
                    <nav className="navbar  navbar-light">
                        <Link className="navbar-brand" to="/">
                            BestShop
                        </Link>

                        <div>

                            <div className="others-options d-flex align-items-center">

                                <div className="option-item">
                                    <div className="cart-btn">
                                        <Link to="/cart">
                                            {/* <i className='flaticon-shopping-cart'></i> */}
                                            <ShoppingCartIcon/>
                                            <span>{cartCount.cartCount}</span>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="others-option-for-responsive">
                <div className="container">

                    <div className="container">
                        <div className="option-inner">
                            <div className="others-options d-flex align-items-center">
                                <div className="option-item">
                                    <div className="languages-list">
                                        <select>
                                            <option value="1">Eng</option>className
                                            <option value="2">Ger</option>
                                            <option value="3">Span</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div className="cart-btn">
                                        <a href="cart.html">
                                            <i className='flaticon-shopping-cart'></i>
                                            <span>0</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <form className="search-box">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button type="submit"><i className="flaticon-search"></i></button>
                                    </form>
                                </div>

                                <div className="option-item">
                                    <div className="burger-menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
