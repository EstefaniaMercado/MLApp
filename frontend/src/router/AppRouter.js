import React from 'react'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import { DetailsItem } from '../components/DetailsItem'
import { HeaderSearch } from '../components/HeaderSearch'
import { ListItems } from '../components/ListItems'

export const AppRouter = () => {

  return (
    <Router>
      <div className="container-fluid">
        <Switch>
          <Route path="/" exact>
            <HeaderSearch />
          </Route>
          <Route
            path='/items/:id'
            render={(props) => (
              <DetailsItem {...props} />
            )}
          />
          <Route
            path='/items'
            render={(props) => (
              <ListItems {...props} />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
