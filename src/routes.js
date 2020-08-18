import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Comics from './pages/comics';
import ComicDetails from './pages/details';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Comics} />
        <Route path="/comicDetails" component={ComicDetails} />

      </Switch>
    </BrowserRouter>
  )
}
