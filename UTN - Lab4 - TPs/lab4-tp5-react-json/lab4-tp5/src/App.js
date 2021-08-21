import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListaArticulos } from './components/ListaArticulos';
import { DetalleArticulo } from './components/DetalleArticulo';
import { MenuNav } from './components/MenuNav';
import { Map } from './components/Map';

import './components/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
      <React.Fragment>        
        <Router>
          <MenuNav />
          <Switch>
            <Route exact path="/" component={ ListaArticulos } />
            <Route exact path ="/instrumento/:id" component={ DetalleArticulo } />
            <Route exact path ="/map" component={ Map } />
          </Switch>
        </Router>
      </React.Fragment>   
  );
}