import React, { useEffect, useState } from 'react'
import { DOMElement } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Products.css'

function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        document.getElementById('products').classList.add('toggle')
    }, [])

    useEffect(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products').then((response) => {
            setLoading(false);
            setData(response.data);
            setFilter(response.data);
        }).catch(() => {
            console.log("Some error occurred");
        });
    }, []);

    const Loading = () => {
        return (
            <div className='loading'>
                Loading ...
            </div>
        )
    }

    const filterProduct = (element) => {
        const updatedList = data.filter((x) => x.category === element);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <div className='products'>
                <div className='button'>
                    <button className='btn' onClick={() => setFilter(data)}>All</button>
                    <button className='btn' onClick={() => 
                        filterProduct("men's clothing")
                    }>Men's Clothing</button>
                    <button className='btn' onClick={() => 
                        filterProduct("women's clothing")
                    }>Women's Clothing</button>
                    <button className='btn' onClick={() => 
                        filterProduct("electronics")
                    }>Electronics</button>
                    <button className='btn' onClick={() => 
                        filterProduct("jewelery")
                    }>Jewelery</button>
                </div>
                <div className='cards'>
                {filter.map((element) => {
                    return (
                        <div className='card' key={element.id}>
                            <img src={element.image}></img>
                            <div className='card-text'>
                                <h2>{element.title.substring(0,18)}</h2>
                                <p>Rs.{element.price}</p>
                                <button><NavLink to={`/products/${element.id}`}>Buy Now</NavLink></button>
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        )
    }

    return (
        <div className='product'>
            <h2>Latest Collection</h2>
            <hr />
            {loading ? <Loading /> : <ShowProducts />}
        </div>
    )
}

export default Products
