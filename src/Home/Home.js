import React from "react";
import {IoMdAddCircle} from 'react-icons/io';
import {BsPersonCircle} from 'react-icons/bs';
import { useState } from "react";
import home from '../Home/home.css'
import SellCard from '../Components/sellCard'

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
 
    return (
        <div>
            <div className="topInsti">
                <div style ={{fontSize:'20px' , }}>
                    Insti marketplace
                </div>
                <div style={{width :"20vw"}}>
                </div>
                <div style ={{marginRight:'350px'}}>
                    <input placeholder="Search for products..." rows="1" className="search" style={{width :"500px"}}/>
                </div>
                <button onClick={logout}>Logout</button>
                <BsPersonCircle size='23px'style={{marginLeft:'5vw', marginTop:'2px'}}/>
            </div>
            <button className="upload">
                Upload items
                <IoMdAddCircle size='20px' style ={{marginLeft:'15px', marginTop: '-3px'}}/>
            </button>

          
           <div style ={{marginLeft: '-93vw', marginTop:'5px'}}>
            Buy items
           </div>
          <div className="BuyList">
        <SellCard productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>
         <SellCard productName={"Study lamp"} productPrice={"₹999.99"} productAge={"14 months old"}  productWarranty={"2 years Warranty period"} productSpecs={"A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps."}/>

          </div>

         
        </div>
        
    );
}
export default Home;
