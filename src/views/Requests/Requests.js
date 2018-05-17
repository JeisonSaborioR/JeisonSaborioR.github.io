import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,Col,Container,Card,CardBody } from 'reactstrap';
import classnames from 'classnames';
import ReCaptcha from 'react-google-recaptcha';


export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
      console.log("Captcha value:", value);
    }
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
  
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
 
  render() {
    return (
  
      <div>
        <h4 className="spacing">Registre su Solicitud en Línea</h4>
        <Form>
          <FormGroup>
            <Label className="titleColor">Nombre del Solicitante</Label>
            <Input type="text" className="inputBranding"/>
          </FormGroup>
          <FormGroup>
            <Label className="titleColor">Teléfono</Label>
            <Input type="text" className="inputBranding"/>
          </FormGroup>
          <FormGroup>
            <Label className="titleColor">Correo Electrónico</Label>
            <Input type="email" className="inputBranding"/>
          </FormGroup>
          <FormGroup>
            <Label className="titleColor">Dirección Exacta</Label>
            <Input type="text" className="inputBranding"/>
          </FormGroup>
          <FormGroup>
            <Label className="titleColor">Indique la consulta o trámite a realizar</Label>
            <Input type="textarea" name="text" className="textAreaRequest" maxLength={200}/>
          </FormGroup>
          <div className="row">
            <div className="col-12">
              <ReCaptcha
                id="g-recaptcha"
                ref="recaptcha"
                sitekey="6Lf4kVgUAAAAAHGldqStBIDsrESWzt7Q-8lZ1qTj"
                onChange={this.onChange}
              /> 
            </div>
          </div>
          <Button className="float-right btnBranding spacingTop" ><i className="fa fa-paper-plane-o" aria-hidden="true"></i> Registrar Solicitud</Button>
        </Form>
      </div>           
    );
  }
}