import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Fragment } from "react/cjs/react.production.min";
import '../css/Menu.css';

//Menu Superior de Opciones
const Menu = (props) => {

    const { buscar } = props;

    return (
        <Fragment>
            <Navbar className="menuBar">
                <Container>
                    <Navbar.Brand href="/"> Home </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/diametros">Ordenados por Diametro</Nav.Link>
                    </Nav>
                    <Form>
                        <FormControl type="text" placeholder="Buscar planeta..."  onChange={(dataInput) => buscar(dataInput)} />
                        {/* Puedo hacer el buscador con un input o un formControl
                            <input type="text" placeholder="Buscar..."  onChange={(dataInput) => buscar(dataInput)} />
                         */}
                    </Form>
                </Container>
            </Navbar>
        </Fragment>
    )
}
export default Menu;