import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Route } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'
import HomePage from './features/homepage/containers/HomePage'

class App{

  getRouters() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/homepage" component={HomePage}></Route>
        </Switch>
      </HashRouter>
    )
  }

  render() {
    ReactDom.render(this.getRouters(), document.getElementById('app'))
  }
}

new App().render()