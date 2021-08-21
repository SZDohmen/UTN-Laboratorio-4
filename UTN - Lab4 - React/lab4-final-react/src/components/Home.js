import { Fragment } from "react";
import { Container, Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Home = (props) => {

    const { datos } = props;

    const history = useHistory();
    const redirect = (nroCmp, data) => {
        history.push(`detalle/${nroCmp}`, data);
    }

    const ordenar = (datos) => {
        let sortDirection = "ASC";

        if (sortDirection === "ASC") {
            sortDirection = "DESC";
        } else {
            sortDirection = "ASC";
        }

        datos.sort(function (a, b) {
            if (sortDirection === "ASC") {
                return parseFloat(a.importe) < parseFloat(b.importe) ? 1 : -1;
            }

            if (sortDirection === "DESC") {
                return parseFloat(a.importe) > parseFloat(b.importe) ? 1 : -1;
            }
        }.bind(this));
    }

    return (
        <Fragment>
            <Container>
                <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>N° Comprobante</th>
                            <th> Importe
                                <Button variant="light" onClick={ordenar(datos)}>Ordenar</Button>
                            </th>
                            <th>Documento Cliente</th>
                            <th> </th>
                        </tr>
                    </thead>
                    {datos.map((data) => ( //recorro el hook guardando los elementos en data
                        <tbody >
                            <tr>
                                <td>{data.fecha}</td>
                                <td>{data.nroCmp}</td>
                                <td>{data.importe}</td>
                                <td> {data.nroDocRec} </td>
                                <td>
                                    <Button variant="dark" style={{ margin: "10px" }} onClick={() => {
                                        //guardo los datos con los nombres de las variables donde las recibiria el otro componente
                                        redirect(data.nroCmp, {
                                            ver: data.ver,
                                            fecha: data.fecha,
                                            cuit: data.cuit,
                                            ptoVta: data.ptoVta,
                                            tipoCmp: data.tipoCmp,
                                            nroCmp: data.nroCmp,
                                            importe: data.importe,
                                            moneda: data.moneda,
                                            ctz: data.ctz,
                                            tipoDocRec: data.tipoDocRec,
                                            nroDocRec: data.nroDocRec,
                                            tipoCodAut: data.tipoCodAut,
                                            codAut: data.codAut
                                        })
                                    }}> Ver detalle </Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </Container>
        </Fragment>
    )
}
export default Home;