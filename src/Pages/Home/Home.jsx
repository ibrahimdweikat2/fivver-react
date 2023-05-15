import { Slider } from 'infinite-react-carousel/lib'
import React from 'react'
import Featured from '../../Components/Featured/Featured'
import TrustedBy from '../../Components/trustedBy/TrustedBy'
import CatCard from '../../Components/catCard/CatCard'
import ProductCard from '../../Components/productCard/ProductCard'
import {cards,projects} from '../../data'
import './Home.scss'
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <div className="slider">
        <div className="container">
          <Slider arrowsScroll={5} slidesToShow={5}>
          {
            cards.map((card,index)=>(
              <>
                <CatCard item={card} key={index}/>
              </>
            ))
          }
          </Slider>
        </div>
      </div>
      <div className="feature">
        <div className="container">
          <div className="item">
            <h1>A Whole of freelancer talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates,just project-based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates,just project-based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates,just project-based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates,just project-based pricing</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates,just project-based pricing</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="feature dark">
        <div className="container">
          <div className="item">
            <h1>fiverr <i>business</i></h1>
            <h1>A business solution designed for <i>teams</i></h1>
            <p>Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses</p>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Connect to freelancers with proven business experience
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Get matched with the perfect talent by a customer success manager
              </div>
              <div className="title">
                <img src="./img/check.png" alt="" />
                Manage teamwork and boost productivity with one powerful workspace
              </div>
              <button>Explore Liverr Business</button>
          </div>
          <div className="item">
          <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="container">
          <Slider arrowsScroll={4} slidesToShow={4}>
          {
            projects.map((project,index)=>(
              <>
                <ProductCard product={project} key={index}/>
              </>
            ))
          }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Home