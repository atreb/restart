import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Item from './components/pages/Item'
import Items from './components/pages/Items'

render((
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/page1' component={Page1}/>
        <Route path='/page2' component={Page2}/>
        <Route path='/items/:item' component={Item}/>
        <Route path='/items' component={Items}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));

//Either have this abouve /items or <switch> inside Items
