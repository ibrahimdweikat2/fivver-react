import React from 'react'
import './ProductCard.scss'
const ProductCard = ({product}) => {
  return (
    <div className='product'>
        <img src={product?.pp} alt="" />
        <div className="desc">
            <img src={product?.img} alt="" />
            <div className="title">
                <h1>{product?.cat}</h1>
                <p>{product?.username}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard