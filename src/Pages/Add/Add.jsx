import React from 'react'
import './Add.scss'
const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <div className="left">
            <h1>Add New Gig</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="" id="title" />
          
          
            <label htmlFor="cat">Category</label>
            <select name="" id="cat">
              <option value="music">Music</option>
              <option value="design">Design</option>
              <option value="animation">Animation</option>
              <option value="web">Web Design</option>
            </select>
          
          <div className="image">
            <div className="item">
              <label htmlFor="img">Cover Image</label>
              <input type="file" name="" id="img"/>
            </div>
            <div className="item">
              <label htmlFor="up">Upload Image</label>
              <input type="file" name="" id="up" />
            </div>
          </div>
          
            <label htmlFor="desc">Description</label>
            <textarea />
            <button>Create</button>
        </div>
        <div className="right">
          
            <label htmlFor="service">Service Title</label>
            <input type="text" name="" id="service" />
          
          
            <label htmlFor="short">Short Description</label>
            <textarea />
          
          
            <label htmlFor="">Delivery Time</label>
            <input type="text" name="" id="" />
          
          
            <label htmlFor="">Revision Number</label>
            <input type="text" name="" id="" />
          
          
            <label htmlFor="">Add Features</label>
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
          
        </div>
      </div>
    </div>
  )
}

export default Add