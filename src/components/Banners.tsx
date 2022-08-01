import React from 'react';
import '../styles/Banners.css'
import sale1 from '../img/freestocks-_3Q3tsJ01nc-unsplash.jpg'
import sale2 from '../img/markus-spiske-5UJbKYUjFCk-unsplash.jpg'
import sale3 from '../img/markus-spiske-zVdAkU4s9lI-unsplash.jpg'
import sale4 from '../img/joshua-rawson-harris-L2kkaayv3YY-unsplash.jpg'
import product1 from '../img/md-salman-tWOz2_EK5EQ-unsplash.jpg'
import product2 from '../img/shlomi-platzman-VF0dgmBSf9Q-unsplash.jpg'
import product3 from '../img/thom-bradley-mwa_nzFpnJw-unsplash.jpg'
import product4 from '../img/ussama-azam-5IcEBmSOQq0-unsplash.jpg'

function Banners() {
  return (
    <div className='banners'>
        <img className='sale sale-1'  src={sale1} alt={'реклама'} />
        <img className='sale sale-2' src={sale2} alt={'реклама'}/>
        <img className='product product-1' src={product1} alt={'реклама'}/>
        <img className='product product-2' src={product2} alt={'реклама'}/>
        <img className='sale sale-3' src={sale3} alt={'реклама'}/>
        <img className='sale sale-4'  src={sale4} alt={'реклама'} />
        <img className='product product-3' src={product3} alt={'реклама'}/>
        <img className='product product-4' src={product4} alt={'реклама'}/>
    </div>
    
    
  );
}

export default Banners;