import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';


export const ItemArticulo = ({ data }) => { //data con la informacion de articulo
    const { id, instrumento, imagen, precio, costoEnvio, cantidadVendida } = data;
    //console.log(data);
    const history = useHistory();
    const redirectToDetails = (id) => {
        history.push(`instrumento/${id}`);
    }

    return (
        <React.Fragment>
            <Card className="mb-2" border="dark" style={{ width: '18rem', margin: '5px' }}>
                <img src={`assets/images/${imagen}`} alt="" />
                <Card.Body>
                    <Card.Title>{instrumento}</Card.Title>
                    <div className="container">
                        {costoEnvio === "G" ? (
                            <p style={{ color: "green" }}> Envio a Todo el Pais </p>
                        ) : (
                            <p style={{ color: "orange" }}> Costo Envio Interior De Argentina ${precio} </p>
                        )}
                    </div>
                    <p>Vendidos: {cantidadVendida} </p>
                    <Button onClick={() => redirectToDetails(id)}> Detalles </Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}