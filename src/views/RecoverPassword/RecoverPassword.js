
import React from 'react';
import { Button, Form, ButtonGroup,FormGroup, Label, Input, FormText, Row, Col, Container} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom';

export default class RecoverPassword extends React.Component {
    constructor(){
        super();
        this.state={
          selectedType:"",
          itemsDropdown: [
            {
                name:"Teléfono"
            },
            {
                name:"Correo Electrónico"
            }
        ]
        }
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    
    renderDropdownTipoEnvio(){
      return this.state.itemsDropdown.map(item => {
          return (  
              <option className="dropdownItem" value={item.name} key={item.name}>
              {item.name}
              </option>
          )  
      });  
    }
    renderTipoDeEnvio(){
      var tipoEnvio = this.state.selectedType;
      if(tipoEnvio === "Teléfono"){
        return(<Input type="number" className="inputBranding" id="userCode" placeholder="*****658" disabled />);
      }
      else if (tipoEnvio === "Correo Electrónico"){
        return(<Input type="number" className="inputBranding" id="userCode" placeholder="mab***********@gmail.com" disabled />);
      }
    }
    render() {
      return (
        <Container>
          <Form className = "formProfile">
            <h4 className="spacing">Recuperación de Contraseña</h4>
            <FormGroup>
              <Label className = "titleColor">Código de Asociado</Label>
              <Input type="number" className="inputBranding" id="userCode" />
            </FormGroup>
            <FormGroup>
              <Label className = "titleColor">Número de Cédula</Label>
              <Input type="number" className="inputBranding" id="idNumber"/>
            </FormGroup>
            <Label className = "titleColor">Medio para Recuperar Contraseña</Label> 
            <Col>
              <FormGroup row>
              <select name="selectedType" className="dropdownBranding" onChange={this.onInputChange}>
                {this.renderDropdownTipoEnvio()}
              </select>
            </FormGroup> 
          </Col>
          {this.renderTipoDeEnvio()}
            <Link to= '/login' className="float-right btn btnBranding btnNotification" ><Label><i className="fa fa-pencil-square-o marginRight" aria-hidden="true"></i>Recuperar Contraseña</Label></Link>
          </Form>
        </Container>
      )
    }
}