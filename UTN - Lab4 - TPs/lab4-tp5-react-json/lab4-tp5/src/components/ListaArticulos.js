import React, { useState } from 'react';
import jsonData from '../fakedb/instrumentos.json';
import { ItemArticulo } from './ItemArticulo';
import { Row } from 'react-bootstrap';


export const ListaArticulos = () => {

    const [articulos] = useState(jsonData);  //asigno los datos del json a una variable local
    console.log("articulas de ListaArticulos", articulos);

    return (
        <React.Fragment>
            <h2 className="text-center mb-5 mt-5"> Catálogo de productos </h2>
            <div>
                <Row className="cva">
                    {articulos.instrumentos.map((data) => (  //mapeo el json que esta dentro articulos, guardandola en data
                        <ItemArticulo key={data.id} data={data} />  //enviamos por props
                    ))}
                </Row>
            </div>
        </React.Fragment>
    );
}