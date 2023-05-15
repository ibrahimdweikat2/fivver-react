import React,{useState} from 'react'
import Switch from "react-switch";
import './Register.scss'
const Register = () => {
  const [checked, setChecked] = useState(false);
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:'',
    file:'',
    country:'',
    phone:'',
    description:''
  })
  const handleChange=(even)=>{
    setForm({...form,[even.target.name]:even.target.value});
  }
  console.log(form,checked);
  return (
    <div className='register'>
      <div className="container">
        <div className="left">
          <h1>Create a New Account</h1>
          <label htmlFor="">Username</label>
          <input type="text" name="username" id="" onChange={handleChange}/>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" onChange={handleChange}/>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" onChange={handleChange}/>
         
            <label htmlFor="">Profile Picture</label>
            <input className='file' type="file" name="file" id="" onChange={handleChange}/>
         
          <label htmlFor="">Country</label>
          <input type="text" name="country" id="" onChange={handleChange}/>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>I Want To Become A Seller</h1>
          <div className="switch">
            <span>Activate A Seller Account</span>
            <Switch className='check' checked={checked} onChange={()=>setChecked(!checked)}/>
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="text" name="phone" id="" onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea name='description' onChange={handleChange}/>
        </div>
      </div>
    </div>
  )
}

export default Register