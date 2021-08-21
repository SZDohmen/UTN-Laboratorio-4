import { Fragment } from "react";
import { Navbar, Form, FormControl, Container, Alert} from 'react-bootstrap';

const Menu = (props) => {

    const { buscar } = props;

    let buscador = true;

    console.log(window.location.href);        
    const locationPage = window.location.href;
    if(locationPage !== 'http://localhost:3000/'){
        buscador = false;
    }


    return (        
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"> Home </Navbar.Brand>
                    {
                        buscador ? ( //para evitar un error desde Detalle, desaparece el FormControl
                            <Form className="d-flex">
                                <FormControl type="text" placeholder="Buscar por nro. documento..." onChange={(dataInput) => buscar(dataInput)} />
                            </Form>
                        ) : (
                            <Alert variant="danger" style={{ position:"absolute"}} className="alertCard">
                                Buscar desde Home!
                            </Alert>
                        )
                    }      
                </Container>
            </Navbar>
        </Fragment>
    )
}
export default Menu;