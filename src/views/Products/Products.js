import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup,Label,CardGroup,CardBody,Collapse,CardHeader,ListGroup,ListGroupItem } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'; 

export default class Products extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      request: false,
      items: [ 
        { 
            typeServices: "TV Cable", 
            amountBoxes: 1, 
            additionalPackages: "No",
            installationDate: "04/11/1992",
        }, 
        { 
            typeServices: "Internet", 
            speed: "8mb/2mb", 
            staticIP: "190.211.97.195",
            installationDate: "04/11/1992",
        },
       
      ],
      itemsDropdown: [
        {
            name:"Energía"
        },
        {
            name:"Internet"
        },
        {
            name:"Cable TV"
        }
    ] 
    }
   
  } 

  renderDropdownProducts(){
    return this.state.itemsDropdown.map(item => {
        return (  
            <option className="dropdownItem" value={item.name} key={item.name}>
            {item.name}
            </option>
        )  
    });  
}
  showRequestResult = () => {
    this.setState({ request: !this.state.request });
  }
  renderList(){  
    
    return (  
      <div className="row">
        <Col xs="12" md="6">
          <Card>  
          
              <CardBody>
                <Label className="titleColor">Tipo de Servicio:</Label> TV Digital Plus<br/>
                <Label className="titleColor">Cantidad de Cajas Decos:</Label> 1<br/>
                <Label className="titleColor">Paquetes Adicionales:</Label> No<br/>
                <Label className="titleColor">Fecha de Instalación:</Label> 05 de Mayo 2015<br/>

                <hr></hr>
                <Label className="titleColor">Solicitudes</Label>
                <ListGroup>
                  <a tag="a" href="#/products/onlineprocedures">Caja Adicional para TV Digital <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  <a tag="a" href="#/products/onlineprocedures">Aumento a Paquete de TV con más Canales <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </ListGroup>
              </CardBody>  
          </Card>  
        </Col>
      <Col xs="12" md="6">
        <Card >  
        
          <CardBody>
            <Label className="titleColor">Tipo de Servicio:</Label> Internet<br/>
            <Label className="titleColor">Velocidad:</Label> 8MB/2MB<br/>
            <Label className="titleColor">IP Fija:</Label> 190.211.97.195<br/>
            <Label className="titleColor">Fecha de Instalación:</Label> 05 de Mayo 2015<br/>
            <hr></hr>
            <Label className="titleColor">Solicitudes</Label>
            <ListGroup>
              <a tag="a" href="#/products/onlineprocedures">Aumento de Ancho de Banda <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              <a tag="a" href="#/products/onlineprocedures">Configuración o Cambio de Contraseña del Router <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            </ListGroup>
          </CardBody>  
        </Card> 
      </Col>
      </div>
    )  
  
  }  
  render() {
    
   
    return (
      <div className="animated fadeIn">
        <h4 className="spacing">Registre su Solicitud</h4>
        <Label className="spacing titleColor"><strong>Nº Contrato: </strong></Label> 3216513
        {this.renderList()}
      </div>
    );
  }
}