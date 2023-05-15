import React,{useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './NavBar.scss'
const NavBar = () => {
    const {pathname}=useLocation();
    const [active,setActive]=useState(false);
    const [open,setOpne]=useState(false);
    const currentUser=useSelector(state=>state.auth);
    const isActive=()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    useEffect(()=>{
        window.addEventListener('scroll',isActive);
        return ()=>{
            window.removeEventListener('scroll',isActive);
        }
    },[currentUser])
    
  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
        <div className="container">
            <div className="logo">
                <Link to={'/'} className='link'>
                    <span className="logo-text">fiverr</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>FiverrBusiness</span>
                <span>Explore</span>
                <span>English</span>
                {!currentUser[0]?.isSeller && <span>Become a Seller</span>}
                {!currentUser &&<Link to={'/login'} className='link'><span>Sign in</span></Link>}
                {!currentUser &&<Link to={'/register'} className='link'><button>join</button></Link>}
                {
                    currentUser &&(
                        <>
                            <div className="user" onClick={()=>setOpne(!open)}>
                                <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                                <span>{currentUser[0]?.username}</span>
                                {open && <div className="options">
                                    {
                                        currentUser[0]?.isSeller &&(
                                            <>
                                            <Link className='link' to={'/myGigs'}><span>Gigs</span></Link>
                                            <Link className='link' to={'/add'}><span>Add New Gigs</span></Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to={'/orders'}><span>Order</span></Link>
                                    <Link className='link' to={'/messages'}><span>Message</span></Link>
                                    <Link className='link'></Link>
                                    <span>Logout</span>
                                </div>}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
        {
            (active || pathname!=='/') &&(
            <>
                <hr/>
                <div className="menu">
                    <Link className='link' to={'/'}>Graphics & Design</Link>
                    <Link className='link' to={'/'}>Video & Animation</Link>
                    <Link className='link' to={'/'}>Writing & Transition</Link>
                    <Link className='link' to={'/'}>Ai Services</Link>
                    <Link className='link' to={'/'}>Digital Marketing</Link>
                    <Link className='link' to={'/'}>Music & Audio</Link>
                    <Link className='link' to={'/'}>Programming & Tech</Link>
                    <Link className='link' to={'/'}>Business</Link>
                    <Link className='link' to={'/'}>LifeStyle</Link>
                </div>
            </>)
        }
    </div>
  )
}

export default NavBar