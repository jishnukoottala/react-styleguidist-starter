import React from 'react'
import './style.css'
import {Link } from "react-router-dom"
export default function index() {
  return (
    <div className='navbar'>
        <h1 className="brand-name">Users Demo</h1>
      <ul>
  <li><Link class="active" to="/">Home</Link></li>
  <li><Link to="/">Users</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>
    </div>
  )
}
