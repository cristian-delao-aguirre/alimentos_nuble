import React from "react";
import { Combobox } from "react-widgets";
import { Form, Row, Col } from "react-bootstrap";

const options = [
  { id: 0, name: "Vendedor 1", area: "Norte" },
  { id: 1, name: "Vendedor 2", area: "Sur" },
  { id: 2, name: "Vendedor 3", area: "Norte" },
  { id: 3, name: "Vendedor 4", area: "Norte" },
  { id: 4, name: "Vendedor 5", area: "Sur" },
  { id: 5, name: "Vendedor 6", area: "Norte" },
  { id: 6, name: "Vendedor 7", area: "Sur" },
];

class Vendedores extends React.Component {
  render() {
    return (
        <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
            <div className="row panel-title general border-bottom">
                <h1 className="h2">Dashboard Vendedores</h1>
            </div>
            <div className="row panel-filter">
                <div className="card text-bg-success mb-3">
                    <div className="card-body">
                        <div className="row">
                            <Form>
                                <Form.Group as={Row} className="mb-3">
                                    <Form.Label column sm="2">Seleccionar vendedor:</Form.Label>
                                    <Col sm="3">
                                        <Combobox
                                            data={options}
                                            dataKey="id"
                                            textField="name"
                                            defaultValue={0}
                                            groupBy={(options) => options.area}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
      </main>
    );
  }
}

export default Vendedores;
