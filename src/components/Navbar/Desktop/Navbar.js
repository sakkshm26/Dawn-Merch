import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Mobile from '../Mobile/Mobile';

function Navbar() {
    const state = useSelector(state => state.handleCart);

    const [toggle, setToggle] = useState(1)

    useEffect(() => {
        if(toggle == 1){
            document.getElementById('home').classList.add('toggle')
        }
        else if(toggle == 2){
            document.getElementById('products').classList.add('toggle')
        }
        if(toggle == 3){
            document.getElementById('about').classList.add('toggle')
        }
        if(toggle == 4){
            document.getElementById('contact').classList.add('toggle')
        }
    }, [toggle])

    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <p><NavLink to='/' onClick={() => setToggle(1)}>Dawn Merch</NavLink></p>
                </div>   
                <div id='desktop-navbar'>
                    <ul className='nav-links'>
                        <li><NavLink id='home' to='/' onClick={() => setToggle(1)}>Home</NavLink></li>
                        <li><NavLink id='products' to='/products' onClick={() => setToggle(2)}>Products</NavLink></li>
                        <li><NavLink id='about' to='/about' onClick={() => setToggle(3)}>About</NavLink></li>
                        <li><NavLink id='contact' to='/contact' onClick={() => setToggle(4)}>Contact</NavLink></li>
                    </ul>
                </div>
                <Mobile />
                <div className='buttons' id='desktop-navbar'>
                    <div className='btn'>
                        <FontAwesomeIcon icon={faSignInAlt} />
                        <button><NavLink to='/login'>Login</NavLink></button>
                    </div>
                    <div className='btn'>
                        <FontAwesomeIcon icon={faUserPlus} />
                        <button><NavLink to='/register'>Register</NavLink></button>
                    </div>
                    <div className='btn'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <button><NavLink to='/cart'>Cart ({state.length})</NavLink></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
