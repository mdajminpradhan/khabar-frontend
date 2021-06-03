import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './user/Home'
import About from './user/About'
import Menu from './user/Menu'
import Contact from './user/Contact'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/About" exact component={About} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
