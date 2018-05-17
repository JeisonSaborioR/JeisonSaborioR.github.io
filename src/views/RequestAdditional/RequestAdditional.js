import React, { Component } from 'react';
import { FormGroup,Label,Col,Input,Form,Button,Card,CardHeader,CardBody } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RequestAdditional extends Component{
    constructor(props){
        super(props);

        this.state = {
            request: false,
            items: [ 
                { 
                    id: 95599, 
                    period: "mayo, 2017", 
                    expirationDate: "12/5/2017", 
                    pendingBill: 317735.67,
                    isInCart:false

                }, 
                { 
                    id: 95596, 
                    period: "septiembre, 2017", 
                    expirationDate: "12/5/2017",
                    pendingBill: 4455.43, 
                    isInCart:false
                }
            ],
            selectOptions:[
                { 
                    name: 1, 
                    value: "Nº Contrato",
                }, 
                { 
                    name: 2, 
                    value: "Grupo Recaudo", 
                }, 
            ]   
        } 
        this.handleClickAddCart = this.handleClickAddCart.bind(this);
    }
 
    showRequestResult = () => {
        this.setState({ request: !this.state.request });
    }

    handleClickAddCart(e){
        let items = this.state.items; 
        let id = e.target.id;  
        items.forEach(item => { 
            if (item.id == id){
                item.isInCart = !item.isInCart; 
            }  
        }); 
        this.setState({items,}); 
    }

    renderList(){  
        return this.state.items.map(item => {  
            return (  
                <Col xs="12" md="6"  key={item.id}>
                    <Card key={item.id}>  
                        <CardHeader>  
                            <Button color="link" className="btn"><strong >Nº Factura: </strong>{item.id}</Button>    
                        </CardHeader>  
                        <CardBody>  
                            <Label className = "titleColor">Periodo: </Label> {item.period}
                            <br></br>  
                            <Label className = "titleColor">Vencimiento:</Label> {item.expirationDate}
                            <br></br> 
                            <Label className = "titleColor">Saldo Pendiente: </Label>  ₡{item.pendingBill}
                            <hr></hr>
                            {item.isInCart ?
                                <Button className="float-right btnSpacingBottom btnBranding isInCart" id={item.id} onClick={this.handleClickAddCart} >
                                <i href="" className="fa fa-cart-plus marginRight btnIsInCart" id={item.id}></i>Quitar del carrito</Button>
                            :
                                <Button className="float-right btnSpacingBottom btnBranding" id={item.id} onClick={this.handleClickAddCart} >
                                <i href="" className="fa fa-cart-plus marginRight" id={item.id}></i>Agregar al carrito</Button>
                            }
                        </CardBody>  
                      
                    </Card>  
                </Col>
            )  
        });  
    }  
    renderDynamicField(field){ 
     
        return(
            <div>
            {field.options.map(item => ( 
                <div key={item.name}>
                <Label className="labelOptions">
                <Field
                    component="input"
                    name={field.input.name}
                    type={field.type}
                    value={item.value}
                />
                <span className="checkmark"></span>
                {item.value}</Label>
                </div>
            ))}
            </div>
        )
        
    }
    render(){
        const showMorePayments = (
            <div >
                <hr></hr>
                <FormGroup row className="spacing">
                    <Col xs="12" md="3">
                        <Label className="titleColor labelBranding">Contrato:  </Label> 95599
                    </Col>
                    <Col xs="12" md="5">
                        <Label className="titleColor labelBranding">Nombre: </Label> Christoph Felber
                    </Col>
                    <Col xs="12" md="4">
                        <Label className="titleColor labelBranding">Saldo Total:</Label><strong> ₡451,236.96</strong>
                    </Col>
                </FormGroup>
                <div className="row">
                    {this.renderList()}
                </div>
                   
                <Link to= '/shoppingcart' className="float-right btn btnBranding float-right spacingTop">
                    <Label><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Efectuar Pago</Label>
                </Link>
            </div> 
        );
     
        return(

            <div>
                <h4 className="spacing">Pagos Adicionales</h4>  
                <Form>
                    <FormGroup>
                        <Label className="titleColor">Tipo de Consulta</Label>
                        <Field
                            key="servicesTypesAdditional"
                            type="radio"
                            name="servicesTypesAdditional"
                            component={this.renderDynamicField}
                            options={this.state.selectOptions}
                        />
                    </FormGroup>
                    
                    <Label className="titleColor">Digite el Nº a Consultar</Label>
                    <Col xs="12" md="12">
                        <FormGroup row>
                            <Input type="number" className="inputBranding size"/>
                            <Button className="btn btn-block btnBranding float-right askButton" onClick={this.showRequestResult}><i className="fa fa-search marginRight" aria-hidden="true"></i>Consultar</Button>  
                        </FormGroup>
                    </Col>
                    
                </Form>

                {this.state.request ? showMorePayments :null}   
            </div>
        )
    }
     
}
function mapDispatchToProps(dispath){
    return bindActionCreators({}, dispath);
}
  
export default reduxForm({
form: 'FieldForm'
}) ( connect(null, mapDispatchToProps) (RequestAdditional));
    


