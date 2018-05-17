import React from 'react';
import { Label, Container, FormGroup, Row, Col, Button, Card, CardBody,Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import downloadInvoice from '../../../public/img/download-file-white.png'; 
const payment = [
  {
    id: "23-01-2018 10:18am",
    count: "334568",
    name: "Michael Blanco Vargas",
    pendingDate: "2017 diciembre",
    invoiceNumber: "144555785",
    totalMount: 29254.22
  },
  {
    cardNumber: "5200-2255-XXXX-XXXX"
  }
];

const config = {
  id: "Fecha de pago",
  count: "Contrato",
  name: "Nombre",
  pendingDate: "Mes al cobro",
  invoiceNumber: "N° factura",
  totalMount: "Monto Total"
};

export default class PaymentProof extends React.Component {
  constructor() {
    super();
    this.state = {
      typeEmail: false
    }
    this.changeTypeEmail = this.changeTypeEmail.bind(this);
  }
  renderRows(item){
    let columns = [];
    for (var key in config) {
        columns.push( <Row key={key}><Col xs="5" md="6" key={key}><strong className="titleColor">{config[key]}</strong></Col>
                      <Col xs="7" md="6" key={item[key]}>{item[key]}</Col></Row>)
      
    }

    return columns;
}
changeTypeEmail() {
    this.setState({
      typeEmail: !this.state.typeEmail
    });
}
    render() {
      return (
        <Container>
            <h4 className="spacing">Resultado de Pago de COOPELESCA RL</h4>
            <Card>
              <CardBody>
                <h5 className="titleColor spacing" >Detalle del Pago</h5> 
                  {this.renderRows(payment[0])}
                <hr></hr>
                <h5 className="titleColor">Forma de Pago</h5>
                <strong className="titleColor"><Label >Número de Tarjeta</Label><br></br></strong>
                <Label>{payment[1]["cardNumber"]}</Label><br></br>
                <FormGroup className = "formPaymentProof">
                  <strong><Label>Proceso Satisfactorio</Label></strong><br/>
                  <strong><Label>Pago de Servicios COOPELESCA RL.</Label></strong>
                </FormGroup>
                  <Input type="text"  className="float-right inputEmail inputBranding" placeholder="Ingrese el correo"/>
                  <form onSubmit={this.changeTypeEmail}>
                  <Button className="float-right btnBranding sentMailProof" type= "submit" ><i className="fa fa-envelope marginRight" aria-hidden="true"></i>Enviar correo</Button>
                </form>
                <Button className="float-right btnBranding btnDownloadPaymentProof" type= "submit" ><img className="marginRight" src={downloadInvoice} width="14px"/>Descargar</Button>
              </CardBody>
            </Card>
            
        
        </Container>
      )
    }
}