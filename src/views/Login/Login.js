import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText, FormGroup,Label} from 'reactstrap';
import { Redirect, Link } from 'react-router-dom';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//Action
import { fetchAuthentication,fetchShowNotifications,iniciarSesion  } from '../../actions';

class Login extends Component {

  constructor(){
    super()
    this.state = {usuario: "" , contrasenna: ""};
    this.onClickLogin = this.onClickLogin.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    this.setState({[event.target.name]: event.target.value})
    }
  // click handler over login button
  onClickLogin(event) {
    event.preventDefault();
    //if (this.state.usuario == "" || this.state.contrasenna ==""){
   //   alert("Algunos datos son incorrectos");
    //}
    //else{
    this.props.iniciarSesion(this.state.usuario,this.state.contrasenna);
    this.props.fetchAuthentication(true);
    this.props.fetchShowNotifications(true);
    //}
  }

  render() {
  
    if(this.props.isAuthenticated){
      return (<Redirect to={'/payments'}/>);
    }
    return (
      

      <Row className="justify-content-center">
        <Col md="7">
          <CardGroup className="cardGroupLogin">
            <Card className="p-4" >
              <CardBody>
                <h4 className="text-center spacing">Iniciar Sesión</h4>
                <form onSubmit={this.onClickLogin}>
                <InputGroup className="mb-3">  
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input type="text" name="usuario" className="inputBranding" placeholder="Usuario" value={this.state.usuario} onChange={this.onInputChange}/>
                </InputGroup>
                <InputGroup className="mb-4">         
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>         
                  <Input type="password" name="contrasenna" className="inputBranding" placeholder="Contraseña" value={this.state.contrasenna} onChange={this.onInputChange}/>
                </InputGroup>
                <FormGroup row>
                  <Col sm={{ size: 10 }}>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Recordar Usuario
                      </Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <Button className="btn-block spacing btnLogin" type="submit">Iniciar Sesión</Button>
              </form>
              <Link to=""><u>¿Necesita Ayuda para Iniciar Sesión?</u></Link><br></br>
              <Link to="/recoverpassword"><u>Recuperar Contraseña</u></Link>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
    </Row>

     
       
    );
  }
}

function mapDispatchToProps(dispath){
  return bindActionCreators({fetchAuthentication,fetchShowNotifications,iniciarSesion}, dispath);
}

//State of props
function mapStateToProps(state){
  return {
      isAuthenticated:state.isAuthenticated   
  };
}

export default reduxForm({
  //validate,
  form: 'FieldForm'
}) ( connect(mapStateToProps, mapDispatchToProps) (Login));
  
