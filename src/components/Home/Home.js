import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <section className='home'>
            <h1>We Bring The Good Cart To Life</h1>
            <div className='boxes'>
                <div className='box1'>
                    <NavLink to='/products'><button>SHOP NOW</button></NavLink>
                </div>
                <div className='box2'>
                    <NavLink to='/products'><button>SHOP NOW</button></NavLink>
                </div>
                <div className='box3'>
                    <NavLink to='/products'><button>SHOP NOW</button></NavLink>
                </div>
            </div>
            <h2>Fresh and cosy new looks for your adventures</h2>
        </section>
    )
}

export default Home
