import React from 'react';
import { Button, Form, ButtonGroup,FormGroup, Label, Input, FormText, Row, Col, Container} from 'reactstrap';
import {Link,Redirect} from 'react-router-dom';

export default class ChangePassword extends React.Component {
    constructor(){
        super();
    }
    saveData(){
    return(<Redirect to={'/profile'}/>);
    }
    render() {
      return (
        <Container>
          <Form className = "formProfile">
            <h4 className="titleColor spacing">Michael Blanco Vargas</h4>
            <FormGroup>
              <Label className = "titleColor">Código de Asociado</Label>
              <Input type="number" className="inputBranding" id="userCode" placeholder="123569" disabled />
            </FormGroup>
            <FormGroup>
              <Label className = "titleColor">Contraseña Actual</Label>
              <Input type="password" className="inputBranding" id="currentPassword"/>
            </FormGroup>
            <FormGroup>
              <Label className = "titleColor">Nueva Contraseña</Label>
              <Input type="password" className="inputBranding" id="newPassword"/>
            </FormGroup>
            <FormGroup>
              <Label className = "titleColor">Confirmar Contraseña</Label>
              <Input type="password" className="inputBranding" id="confirmPassword"></Input>
            </FormGroup>
            <Link to= '/profile' className="float-right btn btnBranding btnNotification" ><Label><i className="fa fa-pencil-square-o marginRight" aria-hidden="true"></i>Actualizar Datos</Label></Link>
          </Form>
        </Container>
      )
    }
}