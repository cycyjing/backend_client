/*
 * @Author: yang_cui 
 * @Date: 2019-09-30 21:45:14 
 * @Last Modified by: yang_cui
 * @Last Modified time: 2019-10-01 23:23:12
 * @file for root compoent
 */
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login'
import Admin from './pages/admin'
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }
}