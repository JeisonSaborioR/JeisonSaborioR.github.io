
import React, { Component } from 'react';
import { FormGroup,Label,Col,Input,Form,Button,Card,CardHeader,CardBody,Row,Alert } from 'reactstrap';
import check from '../../../public/img/check.png'; 
import checkSelected from '../../../public/img/checkSelected.png'; 
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { Field,reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ReCaptcha from 'react-google-recaptcha';


import { obtenerFacturasPagosExternos } from '../../actions/index';

class PagosExterno extends Component{
    constructor(props){
        super(props);
        this.state = {
            peticion: false,
            elementos: [ 
                { 
                    id: 94565, 
                    periodo: "mayo, 2017",
                    fechaVencimiento: "12/5/2017", 
                    saldoPendiente: 317735.67,
                    isCheck: false,
                    isInCart: false
                }, 
                { 
                    id: 95456, 
                    periodo: "mayo, 2017",
                    fechaVencimiento: "12/5/2017",
                    saldoPendiente: 4455.43, 
                    isCheck: false,
                    isInCart: false
                }
            ],
            selectOptions:[
                { 
                    nombre: 1, 
                    valor: "Nº Contrato",
                },
                { 
                    nombre: 2, 
                    valor: "Grupo Recaudo", 
                }, 
            ]  
        } 
        this.onChange = this.onChange.bind(this);
        this.controlAgregarCarrito = this.controlAgregarCarrito.bind(this);
    }

    onChange(value) {
        console.log("Captcha value:", value);
    }
    controlAgregarCarrito(evento){
        let elementos = this.state.items; 
        let id = evento.target.id;  
        elementos.forEach(item => { 
            if (item.id == id){
                item.isInCart = !item.isInCart; 
            }  
        }); 
        this.setState({elementos,}); 
    }

    enviarDatos(values){ 
        let valorConsultar = values.valorConsultar;
        let tipoConsulta = values.tipoConsulta;

        this.props.obtenerFacturasPagosExternos(tipoConsulta, valorConsultar)
        this.setState({ peticion: true });
        
    }

    renderizarFacturas(){  
        return this.state.elementos.map(item => {  
            return (  
                <Col xs="12" md="6"  key={item.id}>
                    <Card key={item.id}>  
                        <CardHeader >    
                            <Button color="link"  className="btn"><strong id={item.id}>Nº Factura: {item.id}</strong></Button>    
                        </CardHeader>  
                        <CardBody>  
                            <div className="row">
                                <div className="col-12">
                                    <Label className = "titleColor">Periodo: </Label> {item.periodo}
                                </div>
                                <div className="col-12">
                                    <Label className = "titleColor">Vencimiento:</Label> {item.fechaVencimiento}
                                </div>
                                <div className="col-12">   
                                    <Label className = "titleColor">Saldo Pendiente: </Label>  ₡{item.saldoPendiente}
                                </div>
                                <div className="col-12">  
                                    <hr></hr>
                                </div>
                                <div className="col-12">
                                {item.isInCart ?
                                <Button className="float-right btnSpacingBottom btnBranding isInCart" id={item.id} onClick={this.controlAgregarCarrito}>
                                <i href="" className="fa fa-cart-plus marginRight btnIsInCart" id={item.id}></i>Quitar del carrito</Button>
                                :
                                <Button className="float-right btnSpacingBottom btnBranding" id={item.id} onClick={this.controlAgregarCarrito}>
                                <i href="" className="fa fa-cart-plus marginRight" id={item.id}></i>Agregar al carrito</Button>
                                }
                                </div>
                            </div>
                        </CardBody>  
                        
                    </Card>  
                </Col>
            )  
        });  
    }  

    renderizarCampos(campo){ 
        const { meta: {touched, error,warning} } = campo;

        const dynamicField = () => {
            return(
              <Input {...campo.input} type={campo.tipo}  className="inputBranding"/>
            )
        }
        const radioField = () => {
            return(
                <div>
                    {campo.opciones.map((item,index) => ( 
                        <div key={item.nombre}>
                            <Label className="labelOptions">
                            <Field
                                component="input"
                                name={campo.input.name}
                                type={campo.tipo}
                                value={item.valor}
                            />
                            <span className="checkmark"></span>
                            {item.valor}</Label>
                        </div>
                    ))}
                </div>
        )}

        return(
            <FormGroup>
                <Label className="titleColor">{campo.etiqueta}</Label>
                {campo.tipo === "number" ?  dynamicField(): 
                  campo.tipo === "radio" ? radioField() : null}
                {touched &&
                  ((error && <Alert color="danger">{error} </Alert>) ||
                    (warning && <span>{warning}</span>))}
            </FormGroup>
        )
        
    }
    
    render(){
        const { error, handleSubmit, pristine, reset, submitting } = this.props
        const mostrarConsulta = (
            <div>
                <hr></hr>
                <FormGroup row>
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
                    {this.renderizarFacturas()}
                </div>
                <Link to= '/shoppingcart' className="float-right btn btnBranding float-right spacingTop">
                    <Label><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Efectuar Pago</Label>
                </Link>  
            </div>
        );
       
        return(
            <div>
                <h4 className="spacing">Realice el Pago de sus Facturas</h4> 
                <Form onSubmit={handleSubmit(this.enviarDatos.bind(this))}>
                    <Field
                        etiqueta="Tipo de Consulta"
                        tipo="radio"
                        name="tipoConsulta"
                        component={this.renderizarCampos}
                        opciones={this.state.selectOptions}
                    />
                    <Field
                        etiqueta="Digite el Nº a Consultar"
                        tipo="number"
                        name="valorConsultar"
                        component={this.renderizarCampos}
                    />
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
                    <div className="row">
                        <div className="col-12">
                            <Button className="btn btn-block btnBranding float-right spacingTop"  type="submit">
                                <i className="fa fa-search marginRight" aria-hidden="true"></i>Consultar
                            </Button>  
                        </div>
                    </div>
                </Form>
                {this.state.peticion ? mostrarConsulta : null}       
            </div>
        )
    }   
}

function validate(valores){
    const errores = {}
    if(!valores.tipoConsulta){
        errores.tipoConsulta = 'Seleccione el tipo de consulta a realizar'
    } else if(!valores.valorConsultar){
        errores.valorConsultar = 'Digite el valor a consultar'
    } else if(valores.valorConsultar && valores.valorConsultar.length > 15){
        errores.valorConsultar = 'Cantidad máxima de caracteres es de 15'
    }
    return errores;
}
  
function mapDispatchToProps(dispath){
    return bindActionCreators({obtenerFacturasPagosExternos}, dispath);
}
  
//State of props
function mapStateToProps(state){
    console.log(state.facturas)
    return {
        facturas:state.facturas   
    };
}

export default reduxForm({
    form: 'FieldForm',
    validate
}) (connect(mapStateToProps, mapDispatchToProps) (PagosExterno));
    

