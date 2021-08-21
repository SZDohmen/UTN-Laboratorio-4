import './App.css';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Detalle from './components/Detalle';

function App() {

  const [datos,setDatos] = useState([]);
  const [datosFiltrados,setFiltrar] = useState(datos);

  useEffect(() => {
    axios('http://localhost:3000/filesjson/listado_facturas.json')
    .then(response => {      
      console.log(response.data);

      setDatos(response.data);
      setFiltrar(response.data);

    }).catch(error => {
      console.log('Error al obtener los datos: ' + error);})
  }, []);

  const buscar = (dataInput) => {
    let value = dataInput.target.value.toString().toLowerCase();   
    let resultadoFiltrado = [];
    console.log(value);

    resultadoFiltrado = datos.filter( (arreglo) => {
      return arreglo.nroDocRec.toString().toLowerCase().search(value) !== -1;
    });
    setFiltrar(resultadoFiltrado);
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Menu buscar={buscar}/>
        <Switch>
          <Route exact path="/"> <Home datos={datosFiltrados}/> </Route>
          <Route exact path="/detalle/:nroCmp"> <Detalle/> </Route>      
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
