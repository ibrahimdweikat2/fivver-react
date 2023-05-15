import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {login} from '../../action/index';
import './Login.scss'
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [user,setUser]=useState({
    username:'',
    password:''
  })
  const handlerChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  const handlerSubmit=e=>{
    e.preventDefault();
    dispatch(login(user));
    navigate('/');
  }
  return (
    <div className='login'>
        <h1>Sign In</h1>
        <form onSubmit={handlerSubmit} className="sign">
          <input type="text" name="username"  onChange={handlerChange}/>
          <input type="password" name="password"  onChange={handlerChange}/>
          <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login