import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Detalle from './components/Detalle';
import Diametro from './components/Diametro';
import axios from 'axios';

function App() {

  //hooks para la obtención y el filtrado de datos
  const [datos,setDatos] = useState([]);
  const [datosFiltrados,setFiltrar] = useState(datos);

  //obtención de datos
  useEffect(() => {
    axios('http://localhost:3000/test/ta/sistema_solar.json')
    .then(response => {      
      //console.log(response.data);//muestro lo obtenido de la url

      //cambio el estado de los hooks con lo obtenido de la url
      setDatos(response.data);
      setFiltrar(response.data);

    }).catch(error => {
      console.log('Error al obtener los datos: ' + error);})
  }, []);

  //función recibe el valor del input, filtra el hook de datos y guarda el resultado en el filtro
  const buscar = (dataInput) => {
    let value = dataInput.target.value.toLowerCase(); //guardo lo escrito en el input    
    let resultadoFiltrado = [];
    //console.log(value); //muestro lo que se esta escribiendo en el input en tiempo real

    //se filtra dentro de un 'arreglo' los datos segun el atributo del arreglo ('nombre' en este caso)
    resultadoFiltrado = datos.filter( (arreglo) => {
      return arreglo.nombre.toLowerCase().search(value) !== -1; //si da -1 es porque el valor no existe
    });
    setFiltrar(resultadoFiltrado);
  }

  return (
    <Fragment>
      <BrowserRouter>
        <Menu buscar={buscar}/>
        <Switch>
          <Route exact path="/"> <Home datosF={datosFiltrados}/> </Route>
          <Route exact path="/detalle/:codigo"> <Detalle/> </Route>  
          <Route exact path="/diametros"> <Diametro datos={datos}/> </Route>       
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
