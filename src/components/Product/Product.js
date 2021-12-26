import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addCart } from '../../redux/action';
import axios from 'axios';
import {useParams} from 'react-router';
import './Product.css' ;
import { NavLink } from 'react-router-dom';

function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = product => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setLoading(false);
            setProduct(response.data);
        }).catch(() => {
            console.log("Some error occurred");
        });
        // getProduct();
    }, []);

    const Loading = () => {
        return (
            <div className='loading'>
                Loading...
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='product-info'>
                <img src={product.image} />
                <div className='product-text'>
                    <h2 className='category'>{product.category}</h2>
                    <h2 className='title'>{product.title}</h2>
                    <p className='rating'>Rating : {product.rating && product.rating.rate} ★</p>
                    <p className='price'>Rs.{product.price}</p>
                    <p className='description'>{product.description}</p>
                    <div className='buttons'>
                        <button className='add' onClick={() => addProduct(product)}>Add to Cart</button>
                        <NavLink to='/cart'><button className='go'>Go to Cart</button></NavLink>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='container'>
                {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    )
}

export default Product
