import React from 'react';
import TopPage from '../components/TopPage';
import FrontPage from '../components/FrontPage';
import Footer from '../components/Footer';
import ScrollNav from '../components/ScrollNav';

function HomeFront() {
  return (
    <div>
        <FrontPage 
        topImg="images\model-s22.jpg" 
        topHeader="Model S"
        subTopHeader="Order Online for "
        link="Touchless Delivery"
        btn="Existing Inventory"
        btn1="Custom Order"
        />
        <FrontPage 
        topImg="images\model-y.jpg" 
        topHeader="Model Y"
        subTopHeader="Order Online for "
        link="Touchless Delivery"
        btn="Existing Inventory"
        btn1="Custom Order"
        />
        <FrontPage 
        topImg="images\model-x.jpg" 
        topHeader="Model X"
        subTopHeader="Order Online for "
        link="Touchless Delivery"
        btn="Existing Inventory"
        btn1="Custom Order"
        />
        <FrontPage 
        topImg="images\model-3.jpg" 
        topHeader="Model 3"
        subTopHeader="Order Online for "
        link="Touchless Delivery"
        btn="Existing Inventory"
        btn1="Custom Order"
        />
        <FrontPage 
        topImg="images\model-s.jpg" 
        topHeader="Model S"
        subTopHeader="Order Online for "
        link="Touchless Delivery"
        btn="Existing Inventory"
        btn1="Custom Order"
        />
        <FrontPage 
        topImg="images\solar-roof.jpg" 
        topHeader="Solar Roof"
        subTopHeader="Produce Clean Energy From Your Roof"
        btn="Learn More"
        btn1="Order Now"
        />
        <FrontPage 
        topImg="images\solar-panel.jpg" 
        topHeader="Solar Panels"
        subTopHeader="Lowest Cost Solar Panels in America"
        link="Touchless Delivery"
        btn="Learn More"
        btn1="Order Now"
        />
        <FrontPage 
        topImg="images\accessories.jpg" 
        topHeader="Accessories"
        btn=""
        btn1="Shop Now"
        />
        <ScrollNav 
        btn1 = 'existing invetory'
        btn2 ='custom order'
        />
        <Footer />
    </div>
  )
}

export default HomeFront