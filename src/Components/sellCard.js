import React from 'react'
import home from '../Home/home.css'

const sellCard = ({
    productName, productPrice, productWarranty, productAge, productSpecs
}) => {
  return (
    <div>
        <div className="itemCard">
            <div>
           <img className="itemImage" src="data:image/jpeg;base64,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" />
            </div>
           <div className="description">
             <div className="productName">{productName}</div>
             <div className="productDetail">{productPrice}</div>
             <div className="productDetail">{productWarranty}</div>
             <div className="productDetail">{productAge}</div>
             <divs className="textDescription">{productSpecs}</divs>
             
           </div>
           </div>
    </div>
  )
}

export default sellCard