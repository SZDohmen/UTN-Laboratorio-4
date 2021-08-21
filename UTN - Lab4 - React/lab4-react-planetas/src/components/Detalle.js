import { Fragment } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import '../css/Detalle.css';

//Detalle
const Detalle = () => {

    //recupera los datos enviados desde el otro componente al ingresar a la url de Detalle
    const location = useLocation();
    const { nombre, diametro, rotacionDias, urlImg, descripcion, temperatura, satelites } = location.state;

    console.log(satelites);

    return (
        <Fragment>
            <Container className="detalleContainer">
                <Row>
                    <Col xs={6} md={4}>
                        <img src={urlImg} alt={urlImg} class="imagenDetalle" />
                        <h3> {nombre} </h3>
                    </Col>
                    <Col xs={12} md={8}>
                        <div> Diametro: {diametro} </div>
                        <div> Rotacion: {rotacionDias} </div>
                        <div> Temperatura: {temperatura} </div>
                        <div> Satelites: {
                            satelites.map((satelites, i) => (
                                <tr key={i} className="sinlinea"> {satelites} </tr>
                            ))}
                        </div>
                        <div> Descripcion: {descripcion} </div>
                    </Col>

                </Row>
                <Button variant="dark" className="botonVolver" href={`/`} > Volver </Button>
            </Container>

        </Fragment>
    )
}
export default Detalle;