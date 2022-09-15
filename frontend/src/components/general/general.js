import React from "react";
import "../../assets/css/general.css";
import Gral_bar_venta_acumulada from "../charts/gral_bar_venta_acumulada";
import Gral_bar_venta_acumulada_diaria from "../charts/gral_bar_venta_acumulada_diaria";
import Gral_list_proyection_vendor from "../charts/gral_list_proyection_vendor";
import General_list_margen_by_vendor from "../charts/gral_list_margen_vendor";
import General_list_client_by_vendor from "../charts/gral_list_client_vendor";
import { Combobox } from "react-widgets";
import { Form, Row, Col } from "react-bootstrap";

const options = [
    { id: 0, name: "Norte" },
    { id: 1, name: "Sur" },
    { id: 2, name: "Oeste" },
    { id: 3, name: "Este" },
];

class General extends React.Component {
  render() {
    return (
      <main className="col-md-12 ms-sm-auto col-lg-10 px-md-4">
        <div className="row panel-title general border-bottom">
          <h1 className="h2">Dashboard General</h1>
        </div>
        <div className="row panel-filter">
          <div className="card text-bg-success mb-3">
            <div className="card-body">
              <div className="row">
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="1">
                      Zona
                    </Form.Label>
                    <Col sm="2">
                      <Combobox
                        data={options}
                        dataKey="id"
                        textField="name"
                        defaultValue={0}
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="row panel-border panel-margin">
          <div className="row row-1">
            <h1 className="h4">Ventas</h1>
          </div>
          <div className="col-md-6">
            <Gral_bar_venta_acumulada></Gral_bar_venta_acumulada>
          </div>
          <div className="col-md-6">
            <Gral_bar_venta_acumulada_diaria></Gral_bar_venta_acumulada_diaria>
          </div>
        </div>
        <div className="row panel-border panel-margin">
          <div className="row row-1">
            <h1 className="h4">Proyección</h1>
          </div>
          <div className="row row-2">
            <Gral_list_proyection_vendor></Gral_list_proyection_vendor>
          </div>
        </div>
        <div className="row panel-border panel-margin">
          <div className="row row-1">
            <h1 className="h4">Margen</h1>
          </div>
          <div className="row row-2">
            <General_list_margen_by_vendor></General_list_margen_by_vendor>
          </div>
        </div>
        <div className="row panel-border panel-margin">
          <div className="row row-1">
            <h1 className="h4">Clientes</h1>
          </div>
          <div className="row row-2">
            <General_list_client_by_vendor></General_list_client_by_vendor>
          </div>
        </div>
      </main>
    );
  }
}

export default General;
