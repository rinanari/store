import React from 'react';
import { IProduct } from '../models';
import '../styles/Product.css'
import { useNavigate } from 'react-router-dom';

interface ProductProps {
    product: IProduct
}
function Product({product}: ProductProps) {
  
  const navigate = useNavigate()
  const clickHandler = () => navigate(`/products/${product.id}`)

  return (
    <div className='product-card' onClick={clickHandler}>
        <img src={product.image} alt={product.title} className="product-image"/>
        <p>{product.title}</p>
        <span>{`${product.price}$`}</span>

    </div>
  );
}

export default Product;