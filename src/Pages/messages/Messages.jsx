import React from 'react'
import { Link } from 'react-router-dom'
import './Messages.scss'
const Messages = () => {
  const message='lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid'
  return (
    <div className='messages'>
      <div className="container">
        <div className="header">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link className='link' to={`/message/123`}>{message.substring(0,100)}...</Link></td>
            <td>1 Day Ago</td>
            <td><button>Make as Read</button></td>
          </tr>
          <tr className='active'>
            <td>John Doe</td>
            <td><Link className='link' to={`/message/123`}>{message.substring(0,100)}...</Link></td>
            <td>1 Day Ago</td>
            <td><button>Make as Read</button></td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to={`/message/123`}>{message.substring(0,100)}...</Link></td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to={`/message/123`}>{message.substring(0,100)}...</Link></td>
            <td>1 Day Ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link className='link' to={`/message/123`}>{message.substring(0,100)}...</Link></td>
            <td>1 Day Ago</td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default Messages