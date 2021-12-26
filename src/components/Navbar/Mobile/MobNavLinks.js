import React, {useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

function MobNavLinks({ icon }) {

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
        <div className='mobile-nav-links'>
            <ul className='links'>
                <li><NavLink id='home' to='/' onClick={() => setToggle(1)}>Home</NavLink></li>
                <li><NavLink id='products' to='/products' onClick={() => setToggle(2)}>Products</NavLink></li>
                <li><NavLink id='about' to='/about' onClick={() => setToggle(3)}>About</NavLink></li>
                <li><NavLink id='contact' to='/contact' onClick={() => setToggle(4)}>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default MobNavLinks
