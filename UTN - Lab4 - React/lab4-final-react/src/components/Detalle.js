import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Card, Container } from 'react-bootstrap';

const Detalle = () => {

    const location = useLocation();
    const { fecha, cuit, ptoVta, nroCmp, importe, moneda, tipoDocRec, nroDocRec, codAut } = location.state;

    return (
        <Fragment>
            <Container>
                <br></br>
                <Card>
                    <Card.Body>
                        <h3 style={{ color: "green" }}> CUIT EMPRESA: {cuit} </h3>
                        <div> Fecha: {fecha} </div>
                        <div> N° Comprobante: {ptoVta} - {nroCmp} </div>
                        <div> Importe: {importe} </div>
                        <div> Moneda: {moneda} </div>
                        <div> Cliente Documento: {tipoDocRec}: {nroDocRec} </div>
                        <div> Cod. Autorización: {codAut} </div>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    )
}
export default Detalle;