import React from 'react';
import jsonData from '../fakedb/instrumentos.json';
import { Container, Card, Row } from 'react-bootstrap';


export const DetalleArticulo = ({ match }) => { //match es un objeto que contienen info url
    const idSearch = match.params.id;

    const data = jsonData.instrumentos.filter(
        (inst) => inst.id === idSearch
    )[0]; //[0] lo toma como objeto y no como array...

    //const { id, instrumento, imagen, precio, costoEnvio, cantidadVendida, descripcion, marca, modelo } = data;
    const { instrumento, imagen, precio, costoEnvio, cantidadVendida, descripcion, marca, modelo } = data;
    
    return(
        <React.Fragment>
            <Container className="mb-5 mt-5" >
                <Row >
                <img src={`http://localhost:3000/assets/images/${imagen}`} alt="" style={{ width: '18rem'}} />
                
                <Card border="dark" style={{ width: '800px'}}> 
                                   
                    <Card.Body>
                        <Card.Title> <h3> {instrumento} </h3> {marca} / {modelo} </Card.Title>
                        <div className="container">
                            {costoEnvio === "G" ? (
                                <p style={{ color: "green" }}> Envio a Todo el Pais </p>
                            ) : (
                                <p style={{ color: "orange" }}> Costo Envio Interior De Argentina ${precio} </p>
                            )}
                        </div>
                        <p>Vendidos: {cantidadVendida} </p>
                        <p> {descripcion} </p>
                    </Card.Body>
                </Card>
                </Row>
            </Container>            
        </React.Fragment>
    );
}