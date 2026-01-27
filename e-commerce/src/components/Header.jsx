import { Link, useNavigate, useSearchParams } from 'react-router';
import './Header.css'
import { useState } from 'react';

export function Header({ cart }) {
    const [searchParams] = useSearchParams();
    const searchText = searchParams.get('search');
    const navigate = useNavigate();
    const [search, setSearch] = useState(searchText || '');

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    })

    const updateSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const searchProducts = () => {
        navigate(`/?search=${search}`);
    };

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-Link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" value={search} onChange={updateSearchInput}/>

                <button className="search-button" onClick={searchProducts}>
                    <img className="search-icon" src="images/icons/search-icon.png" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-Link header-Link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <a className="cart-Link header-Link" href="checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </a>
            </div>
        </div>

    );
}