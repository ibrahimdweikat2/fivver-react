import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './GigCard.scss'
const GigCard = ({item}) => {
    const [active, setActive] = useState(false)
  return (
      <div className='gigCard'>
        <Link to={`/gig/${item?.id}`} className='link'>
            <img src={item?.img} alt="" />
        </Link>
        <div className="info">
            <div className="user">
                <img src={item?.pp} alt="" />
                <span>{item?.username}</span>
            </div>
            <p>{item?.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{item.star}</span>
            </div>
        </div>
        <hr />
        <div className={active ? "detal active":"detal"}>
            <img src="./img/heart.png" alt=""  onClick={()=>setActive(!active)}/>
            <div className="price">
                <span>STARTING AT</span>
                <h2>
                $ {item.price}
                <sup>99</sup>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default GigCard