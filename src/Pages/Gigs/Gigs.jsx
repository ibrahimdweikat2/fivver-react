import React from 'react'
import GigCard from '../../Components/gigCard/GigCard'
import {gigs} from '../../data'
import './Gigs.scss'
const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">Fiverr > Graphics & Design ></span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" name="" id="" placeholder='min' />
            <input type="text" name="" id="" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <select name="" id="">
              <option value="new">Newest</option>
              <option value="best">Best Selling</option>
            </select>
          </div>
        </div>
        <div className="cards">
          {gigs.map((item)=>(
            <GigCard item={item} key={item?.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs