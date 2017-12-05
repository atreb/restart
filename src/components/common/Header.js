import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>page1</Link></li>
        <li><Link to='/page2'>page2</Link></li>
        <li><Link to='/items'>items</Link></li>
        <li><Link to='/items/2'>item 2</Link></li>
      </ul>
    </nav>
    <br/>header<br/>
  </div>
)

export default Header
