import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/page1'>Page1</Link></li>
        <li><Link to='/page2'>Page2</Link></li>
        <li><Link to='/todoreactstate'>Todo using react state</Link></li>
        <li><Link to='/entries/2'>Entry 2</Link></li>
        <li><Link to='/entries'>Entries</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
