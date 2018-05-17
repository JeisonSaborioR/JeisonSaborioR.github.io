import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card,Collapse, Button, Col, FormGroup,Label,CardGroup,CardBody,CardHeader,Row } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'; 

export default class Groups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false, 
            items: [ 
                { 
                    id: 553, 
                    name: "Caja Costarricense Ciclo 2", 
                    totalServices: 2,
                    outBalance:1095920.53,
                    isCollapse: false,
                    isInCart: false
                }
            ],
            contratos:[
                {
                    id:4680,
                    nombreContrato:"Caja Costarricense Seguro Social",
                    vencimiento:" 8/1/2018",
                    total:"₡816,746.7",
                    abonado:" ₡816,746.7",
                    saldoPendiente:"₡0.00",
                    isCollapse: false,
                },
                {
                    id:170432,
                    nombreContrato:"Caja Costarricense Seguro Social",
                    vencimiento:" 8/1/2018",
                    total:"₡816,746.7",
                    abonado:" ₡816,746.7",
                    saldoPendiente:"₡0.00",
                    isCollapse: false,

                },
            ]
        };
        this.handleClickshowCollapse = this.handleClickshowCollapse.bind(this);
        this.toggleButton = this.toggleButton.bind(this);
        this.handleClickAddCart = this.handleClickAddCart.bind(this);
        this.controlDesplegarContratos = this.controlDesplegarContratos.bind(this);
    }
    toggleButton() {
        this.setState({ collapse: !this.state.collapse });
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
    handleClickshowCollapse(e) {
        let items = this.state.items; 
        let id = e.target.id;  
        items.forEach(item => { 
            if (item.id == id){
                item.isCollapse = !item.isCollapse; 
            }  
        }); 
        this.setState({items,}); 
    } 
    controlDesplegarContratos(event){
        let contratos = this.state.contratos;
        let id = event.target.id;
        contratos.forEach(item => { 
          if (item.id == id){
              item.isCollapse = !item.isCollapse; 
          }  
        }); 
        this.setState({contratos,}); 
    }
    
    
    renderList(){  
        const showMorePayments = this.state.contratos.map((item,index) =>
            <div  id="accordion" key={index}>
            <Card>
                <CardHeader id="headingOne">
                    <Button color="link" className="btn btn-link" id={item.id} onClick={this.controlDesplegarContratos} data-toggle="collapse" data-target={"#collapseGrupos"+index} aria-expanded="false" aria-controls={"collapseGrupos"+index} 
                    ><strong id={item.id}>Nº Contrato: </strong>{item.id}
                    {item.isCollapse ?  
                        <Label id={item.id} className="fa fa-caret-up fa-lg labelInvoice"></Label>
                        :
                        <Label id={item.id} className="fa fa-caret-down fa-lg labelInvoice"></Label>}
                    </Button>  
                </CardHeader>
                <div id={"collapseGrupos"+index} className="collapse" aria-labelledby="headingOne" data-parent="#accordion"> 
                    <CardBody>
                        <Label className="titleColor">Nombre: </Label> {item.nombreContrato}<br/>
                        <Label className="titleColor">Vencimiento:</Label> {item.vencimiento}<br/>
                        <Label className="titleColor">Total: </Label> {item.total}<br/> 
                        <Label className="titleColor">Abonado:</Label> {item.abonado}<br/>
                        <Label className="titleColor">Saldo Pendiente: </Label> {item.total}
                    </CardBody> 
                </div> 

            </Card>
          </div>
          );
        return this.state.items.map(item => {
            return (  
                <Card key={item.id}>  
                    <CardHeader >
                      <Button color="link" id={item.id}  onClick={this.handleClickshowCollapse} className="btnShowMore"><strong id={item.id}>Nº Recaudo: </strong>{item.id}
                        {item.isCollapse ?  
                                <Label id={item.id} className="fa fa-caret-up fa-lg labelInvoice"></Label>
                                :
                                <Label id={item.id} className="fa fa-caret-down fa-lg labelInvoice"></Label>}
                    </Button>
                    <Button color="link" className="float-right"><i href="" className="fa fa-trash-o fa-lg"></i></Button>  
                    </CardHeader>
                    <CardBody>
                        <Label className="titleColor">Nombre:</Label> {item.name}
                        <br/>
                        <Label><strong className="titleColor">Total de Servicios: </strong> {item.totalServices}</Label>
                        <br/>  
                        <Label><strong className="titleColor">Saldo Pendiente: </strong> ₡{item.outBalance}</Label>
                        <br/> 
                        <Collapse isOpen={item.isCollapse}>
                            {showMorePayments}
                        </Collapse>
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
            )  
        });  
      }  
    render() {
      

        return (
        <div className="animated fadeIn">

            <Row>
                <Col sm="12">
                    {this.renderList()}
                </Col>
            </Row>
        </div>
        );
    }
}