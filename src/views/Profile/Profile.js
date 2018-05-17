import React from 'react';
import { Button, Form, ButtonGroup,FormGroup, Label, Input, FormText, Row, Col, Container,TabContent, TabPane, Nav, NavItem, NavLink,ListGroupItem,ListGroup} from 'reactstrap';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      contratoActual:"",
      descripcionContrato: "",
      itemsDropdownContratos: [
        {
            codigo: 344684,
            alias:"344684"
        },
        {
          codigo: 357585,
          alias:"Contrato casa mami"
        },
        {
          codigo: 116518,
          alias:"116518"
        }
    ]
    }
    this.toggle = this.toggle.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  onFormSubmit(event){
    event.preventDefault();
    var nombreContrato = this.state.contratoActual;
    if(nombreContrato === ""){
        this.setState({contratoActual: this.state.itemsDropdown[0].name});
    }
}
  renderPerfil(){
    return (
      <Container>
        <Form className = "formProfile">
          <h4 className="spacing">Michael Blanco Vargas </h4>
          <FormGroup>
            <Label className = "titleColor"  id="userCode">Código de Asociado</Label>
            <Input type="number" className="inputBranding" id="userCode" placeholder="123569" disabled />
          </FormGroup>
          <FormGroup>
            <Label className = "titleColor" id ="userId">Identificación</Label>
            <Input type="number" className="inputBranding" id="userId" placeholder="206770910" disabled />
          </FormGroup>
          <FormGroup>
            <Label for="phone" className = "titleColor"  id="phone">Teléfono</Label>
            <Input type="number" pattern="[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}" className="inputBranding" id="userPhone" placeholder="8722-1442" />
          </FormGroup>
          <FormGroup>
            <Label for ="email" className = "titleColor"  id="email">Correo Electrónico</Label>
            <Input type="email" className="inputBranding" id="email" placeholder="maicolb23@hotmail.com"></Input>
          </FormGroup>
          <Button className="float-right btnBranding" type= "submit" ><i className="fa fa-pencil-square-o marginRight" aria-hidden="true"></i>Actualizar Datos</Button>
          <Link to="/changePassword" className="btnChancePassword" color="link"><u>Cambiar Contraseña</u></Link>
        </Form>
      </Container>
    )
  }
  renderDropdownContratos(){
    return this.state.itemsDropdownContratos.map(item => {
        return (
            <ListGroupItem key={item.codigo}>
            <Row>
                <Col xs="5" md="2">
                <Input type="number" className="inputBranding" id="userCode" placeholder={item.codigo} disabled />
                 
                </Col>
                <Col xs="7" md="8">
                  <Input type="text" name="descripcionContrato" id="userCode" className="inputBranding" defaultValue={item.alias} key={item.codigo} onChange={this.onInputChange}/>
                </Col>
            </Row>
            </ListGroupItem>
            //<option className="dropdownItem" value={item.codigo} key={item.codigo}>
            //{item.codigo}
           // </option>
        )  
    });  
}
cambiarDescripcionContrato(descripcion){
  this.setState({descripcionContrato: descripcion})
}
renderInputEditable(){
  return this.state.itemsDropdownContratos.map(item => {
    if (item.codigo == this.state.contratoActual){
      return(
        <div  key={item.codigo +item.alias}>
           <FormGroup>
            <Label className = "titleColor"  id="userCode">Descripción del Contrato</Label>
            <Input type="text" name="descripcionContrato" id="userCode" defaultValue={item.alias} key={item.codigo} onChange={this.onInputChange}/>
          </FormGroup>
          <Button className="float-right btnBranding" type= "submit" ><i className="fa fa-pencil-square-o marginRight" aria-hidden="true"></i>Modificar Alias</Button>
        </div>
      )
    }
   } )
}
  renderModificarAlias(){
    return(
      <div>
        <h4 className = "spacing"  id="userCode">Contratos Asociados</h4>
        <FormGroup row>
        <Col>
        <Row>
                <Col xs="5" md="2">
                  <Label className="titleColor">N° Contrato</Label>
                </Col>
                <Col xs="7" md="8">
                  <Label className="titleColor">Alias</Label>
                </Col>
        </Row>
          <ListGroup>
            {this.renderDropdownContratos()}
          </ListGroup>
          </Col>
        </FormGroup>
        <Button className="float-right btnBranding" type= "submit" ><i className="fa fa-pencil-square-o marginRight" aria-hidden="true"></i>Modificar Alias</Button>
      </div>
    )
  }
    render() {
      return(
        <div>
          <Nav tabs>
              <NavItem className="navItemSize">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                Perfil
                </NavLink>
              </NavItem>
              <NavItem className="navItemSize">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                Contratos
              </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab} >
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    {this.renderPerfil()}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2"> 
              <Row>
                  <Container>
                    {this.renderModificarAlias()}
                  </Container>
                </Row>
              </TabPane>
            </TabContent>
        </div>
      )
    }
}