import React from 'react'
 import Banners from './Banners';
 import Products from './Products';
 import '../styles/App.css'

function MainPage () {
    return ( 

        <div className='container'>
        <h1>FashionStore</h1>
        <Banners />
        <Products />
    </div>
     );
}
 
export default MainPage;