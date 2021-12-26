import React, {useEffect, useState} from 'react';
import './Mobile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import MobNavLinks from './MobNavLinks';

function Mobile() {

    const [icon1, setIcon1] = useState(faBars);

    useEffect(() => {
        if(icon1==faTimes){
            document.getElementsByClassName('mobile-nav-links')[0].removeAttribute('id', 'hide');
            document.getElementsByClassName('icon')[0].classList.add('white');
            document.body.classList.add('hide-overflow');
        }
        else{
            document.getElementsByClassName('mobile-nav-links')[0].setAttribute('id', 'hide');
            document.getElementsByClassName('icon')[0].classList.remove('white');
            document.body.classList.remove('hide-overflow');
        }
    }, [icon1])

    return (
        <div id='mobile-navbar'>
            <FontAwesomeIcon icon={icon1} onClick={() => {
                icon1 == faBars ? setIcon1(faTimes) : setIcon1(faBars) 
            }} className='icon' />
            <MobNavLinks />
        </div>
    )
}

export default Mobile
