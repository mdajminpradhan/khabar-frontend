import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './user/Home'
import Menu from './user/Menu'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/menu" exact component={Menu} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
