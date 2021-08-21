import { Fragment } from "react";
import { Button, Row, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../css/Home.css';

const Home = (props) => {

    //recibo los datos filtrados de App
    const { datosF } = props;

    //para redireccionar al componente detalle enviandole el elemento del arreglo al cual queremos ingresar
    const history = useHistory();

    const redirect = (codigo, data) => {
        //redirecciono segun atributo 'codigo' del arreglo y le envio los datos del elemento
        history.push(`detalle/${codigo}`, data);
    }

    return (
        <Fragment>
            <div class="contenedor">
                <Row class="row">
                    {datosF.map((value, index) => {
                        return (
                            <Card bg="light" style={{ width: '18rem'}} key={index} class="card">
                                <Card.Title className="titulo" style={{ marginTop:"5px"}}> <h3> {value.nombre} </h3> </Card.Title>

                                <div>
                                    <img src={value.urlImg} alt={value.urlImg} class="imagen"/>
                                </div> 
                                
                                <div>
                                <Button variant="dark" style={{ margin:"10px"}} onClick={() => {
                                    //guardo los datos con los nombres de las variables donde las recibiria el otro componente
                                    redirect(value.codigo, {
                                        nombre: value.nombre,
                                        codigo: value.codigo,
                                        diametro: value.diametro,
                                        rotacionDias: value.rotacionDias,
                                        urlImg: value.urlImg,
                                        descripcion: value.descripcion,
                                        temperatura: value.temperatura,
                                        satelites: value.satelites
                                    })
                                }}> Ver detalle </Button>
                                </div>
                            </Card>
                        )
                    })}
                </Row>
            </div>
        </Fragment>
    )
}
export default Home;