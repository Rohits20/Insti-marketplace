import {React, useState} from 'react'
import {BsPersonCircle} from 'react-icons/bs';
import home from '../Home/home.css'
import ItemPagecss from '../Components/ItemPage.css';
import ScrollBar from 'react-custom-scrollbars'

const ItemPage = ({
    productName, productPrice, productWarranty, productAge, productSpecs
}) => {
  const ItemMultipleImages =[
    {
      "id" : 1 ,
       "ImageURL"  : 'https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/e/j/d/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtry73whcz.jpeg?q=70'
    },
    {
      "id" : 2 ,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/2/j/2/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtwkmwdafh.jpeg?q=70"
    },
    {
      "id" : 3 ,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/l/n/l/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdthwmen7ww.jpeg?q=70"
    },
    {
      "id" : 4 ,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/2/j/2/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtwkmwdafh.jpeg?q=70"
    },
    {
      "id" : 5,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/r/w/i/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtmhvwjpws.jpeg?q=70"
    },
    {
      "id" : 6,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/2/j/2/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtwkmwdafh.jpeg?q=70"
    },
    {
      "id" : 7 ,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/2/j/2/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtwkmwdafh.jpeg?q=70"
    },
    {
      "id" : 8 ,
       "ImageURL"  :"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/2/j/2/11-385105-11-puma-peacoat-quarry-high-risk-red-original-imaghrdtwkmwdafh.jpeg?q=70"
    },
    
  ]
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
         window.location.href=`/`
    }
    const [hover, setHover] = useState(false)
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [bigImageURl , setBigImageURL]  = useState(ItemMultipleImages[0].ImageURL);

    const onMouseEnter = e => {
      console.log("Hovering");
      setHover(true);
      setHoverIndex(e.id);
      console.log(e);
      setBigImageURL(e.ImageURL);
      console.log(productPrice);
    }
    const handleMouseLeave = () => {
      setHover(false);
      setHoverIndex(-1);
      console.log(hoverIndex);
   };


    
  return (
    <div>
     <div>
     <div className="topInsti">
                <div style ={{fontSize:'20px' , }}>
                    Insti marketplace
                </div>
                <div style={{width :"20vw"}}>
                </div>
                <div style ={{marginRight:'858px'}}>
                </div>
                <button onClick={logout} style={{height:'30px'}}>Logout</button>
                <BsPersonCircle size='23px'style={{marginLeft:'5vw', marginTop:'2px'}}/>
            </div>
            <div style= {{height:'1px' , backgroundColor: 'gray'}}>

            </div>
     </div>
     
     <div className='ImageAndInfo'>
     <div className='ProductImage'>
    
    <div className='ProductSmallImageGroup'>
    <ScrollBar style={{height: '70px', width:'400px'}}>
      {
      ItemMultipleImages.map(data => (
        <img key={data.id} onMouseEnter={() => onMouseEnter(data)} onMouseLeave={handleMouseLeave} style={hoverIndex === data.id ? { border:'2px solid' , borderColor: 'Blue'} : {border:'2px solid' , borderColor: 'White'}}
        className='ProductSmallImage' src= {data.ImageURL} alt="Product description"></img>
      ))}
       </ScrollBar>
    
    </div>
    
    <img className='ProductBigImage' src={bigImageURl}></img>
   </div>
   <div className='OnlyInfo'>
      <div style={{ fontSize: 18 ,marginBottom:'8px'}} >Pacer Evo 2.2 Walking Shoes For Men</div>
      <div style={{ fontSize: 23 ,marginBottom:'8px'}} >₹999.99</div>
      <div style={{ fontSize: 20 ,marginBottom:'8px'}} >14 months old</div>
      <div style={{ fontSize: 20 ,marginBottom:'8px'}} >2 years Warranty period</div>
      <div className='OnlyInfoDesc'  >A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps.A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps.A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps.A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps.A lamp is a device that makes light and heat. Lamps usually work with electricity, using a lightbulb. In the United States, a lamp is usually considered a desk lamp or floor lamp. Other sources of light are called 'lights', such as streetlights, flashlights, and headlights, which in some countries are called streetlamps, torches and headlamps.</div>
      <div className='BidButton'>
        <div className='BuyNowButton'>
          Buy now
        </div>
      <div className='BidLowButton'>
        Bid High
      </div>
      <div className='BidHighButton'>
        Bid Low
      </div>
      </div>
   
     </div>
     </div>
     
     
    </div>
  )
}

export default ItemPage
