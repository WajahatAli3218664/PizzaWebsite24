 import React from 'react'
 import Navbar from "../app/components/Navbar";
import Carousel from './components/Carousel';
import Progessor from './components/Progessor';
import Burger from './components/burgers'
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Offer from './components/Offer';
import Card from './components/Card';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';
import Reservation from './components/Reservation';






 
 export default function App () {
   return (
     <div className='bg-gradient-to-r from-black to-slate-700 min-h-s' >
     <Navbar />                       
     <Carousel />
     <Progessor /> 
     <Burger/>
     <Banner/>
     <ProductList/>
     <MenuItems/>
     <Offer/>
     <Card/>
     <Reservation/>
     <Testimonials/>
     <Footer/>                   
                           
      
     </div>
   )
 }
 