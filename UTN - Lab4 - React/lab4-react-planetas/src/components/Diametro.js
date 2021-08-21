import { Fragment } from "react";
import { Container, Table } from 'react-bootstrap';

const Diametro = (props) => {

    const { datos } = props;

    const ordenarPorDiametro = () => {
        let diametros;
        let nombres;
        let datosOrdenaditos;

        return (
            console.log("holis")
        );
    }


    return (
        <Fragment>
            <br></br>
            <Container>
                <Table striped bordered hover>
                    {ordenarPorDiametro()}
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Diametro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((data) => {
                            return (
                                <tr>
                                    <td>{data.nombre}</td>
                                    <td>{data.diametro}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </Fragment >
    )
}
export default Diametro;