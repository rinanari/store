import React, { useEffect, useState } from 'react';
import Product from './Product';
import '../styles/Products.css'
import { fetchProducts } from '../store/actions/productActions';
import { useAppDispatch, useAppSelector} from '../hooks/redux';
import Loader from './Loader';
import Error from './Error';
import SearchProduct from './SearchProduct';


function Products() {

const dispatch = useAppDispatch()
const {error, loading, products} = useAppSelector(state => state.product)

useEffect(()=> {
  dispatch(fetchProducts())
}, [])




  return (
    <div className='products-section-container' >
        <h1>Products</h1>
        <SearchProduct/>
       {loading && <Loader />}
       {error && <Error error={error}/>}
        <div className="product-container">
{/* link */}
          {products.map(product =>  <Product product={product} key={product.id}/>)}
        </div>
    </div>
  );
}

export default Products;