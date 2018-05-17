import React, { Component } from 'react';
import { FormGroup,Label,Col,Input,Form,Button,Card,CardHeader,CardBody,Row } from 'reactstrap';

class Form_Add_Contract extends Component{
    constructor(props){
        super(props);
        this.state = {
            request: false
        }

    }
    showRequestResult = () => {
        this.setState({ request: !this.state.request });
    }

    render(){
        const showInputRequest = (
            <Form> 
                <hr/>
                <h4 className="spacing">Grupo de Recaudo</h4>
               
           
                <FormGroup>
                    <Label className="titleColor">Nombre:{' '}</Label> Caja Costarricense Ciclo 2
                </FormGroup>
        
                <Button color="primary" className="px-4 btn-block spacingTop btnBranding float-right"> <i className="fa fa-plus-circle" aria-hidden="true"></i> Matricular</Button>  
                <br/>   
           
            </Form>
        );
        const searchContract = (
            <Form> 
                <h4 className="spacing">Matricule su Grupo de Recaudo</h4>
                <Label className="titleColor">Grupo de Recaudo</Label>
                <Col>
                <FormGroup row>
                    <Input type="number"  className="inputBranding size"/>
                    <Button color="primary" className="btn btn-block btnBranding float-right askButton" onClick={this.showRequestResult}><i className="fa fa-search marginRight " aria-hidden="true"></i>Consultar</Button>  
                </FormGroup>
                </Col>
           </Form>
        );
        return(
            <div>  
                {searchContract}
                {this.state.request ? showInputRequest : null}   
            </div>
        )
    }
     
}

export default Form_Add_Contract;
