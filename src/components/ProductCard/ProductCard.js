import React, { useState } from "react";
import './ProductCard.css';

const ProductCard = ({ productData }) => {

    return (
        <div>
            <div className="productCard">
                <div className="productImage">
                    <img src={productData.images[0].src} alt={productData.name} />
                </div>
                <h3 className="productName">{productData.name}</h3>
                <h5 className="productPrice"><b>Price:</b>{productData.price}</h5>
                <h5 className="discountPrice"><b>Discounted Price:</b>{productData.sale_price}</h5>
            </div>
            
        </div>
    )

}

export default ProductCard;