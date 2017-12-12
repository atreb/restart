import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/common/Header'
import Home from './components/pages/Home'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import TodoReactState from './components/pages/TodoReactState'
import TodoRedux from './components/pages/TodoRedux'
import Entry from './components/pages/Entry'
import Entries from './components/pages/Entries'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer);

render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page1' component={Page1}/>
          <Route path='/page2' component={Page2}/>
          <Route path='/todoreactstate' component={TodoReactState}/>
          <Route path='/todoredux' component={TodoRedux}/>
          <Route path='/entries/:number' component={Entry}/>
          <Route path='/entries' component={Entries}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
