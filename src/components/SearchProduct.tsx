import  React, { useEffect } from 'react';
import '../styles/Products.css'
import { useInput } from '../hooks/input';

function SearchProduct() {
    const input = useInput('')

    useEffect(()=> {
        console.log(input.value)
    }, [input.value])
  
    return (  
        <div className='relative-product'>
            <input type="text" placeholder="Type something here" className="product-search" {...input}/>
            {/* <div className='absolute-product'></div> */}
        </div>
    );
}
 
export default SearchProduct;