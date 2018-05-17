import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup,Label,CardGroup,CardBody,Collapse,CardHeader } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'; 

export default class Contrats extends React.Component {
    constructor(){
        super();
        this.state = {
            isInCart: false,
            items: [ 
                { 
                    id: 344684, 
                    alias: "Casa", 
                    nombreAbonado:"Guillermo Vargas Rojas",
                    pendingBill: 2,
                    outBalance: 60252.00,
                    isInCart: false,
                    isCollapse: false 
                }  
            ],
            products: [ 
              { 
                  tipoServicio: "TV Cable", 
                  monto: "₡29,232.00", 
                  estado: "Suspendido",
                  claseServicio: "Digital Plus",
                  mesesPendientes:  2,
                  isCollapse: false 
              },
              { 
                  tipoServicio: "Internet", 
                  monto: "₡31,020.00", 
                  estado: "Suspendido",
                  claseServicio: "10mb/2mb",
                  mesesPendientes:  2,
                  isCollapse: false 
            }
      
          ]  
        }
        this.handleClickshowCollapse = this.handleClickshowCollapse.bind(this);
        this.handleClickAddCart = this.handleClickAddCart.bind(this);
        this.controlDesplegarProductos = this.controlDesplegarProductos.bind(this);
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

    controlDesplegarProductos(event){
        let products = this.state.products;
        let id = event.target.id;
        products.forEach(item => { 
          if (item.tipoServicio == id){
              item.isCollapse = !item.isCollapse; 
          }  
        }); 
        this.setState({products,}); 
      }
    
render() {
    const showMorePayments = this.state.products.map((item,index) =>
      <div id="accordion" key={index}>
          <Card>
            <CardHeader id="headingOne">
              <Button color="link" id={item.tipoServicio} className=" btnShowMore" data-toggle="collapse" data-target={"#collapsePropios"+index} 
              aria-expanded="false" aria-controls={"collapsePropios"+index} onClick={this.controlDesplegarProductos}><strong  id={item.tipoServicio}>{item.tipoServicio}</strong>
              {item.isCollapse ?  
                                <Label id={item.tipoServicio} className="fa fa-caret-up fa-lg labelInvoice"></Label>
                                :
                                <Label id={item.tipoServicio} className="fa fa-caret-down fa-lg labelInvoice"></Label>}
              </Button>  
            </CardHeader>
            <div id={"collapsePropios"+index} className="collapse" aria-labelledby="headingOne" data-parent="#accordion"> 
              <CardBody>
                  <Label className="titleColor">Monto: </Label> {item.monto}<br/>
                  <Label className="titleColor">Estado:  </Label> {item.estado}<br/>
                  <Label className="titleColor">Clase de Servicio: </Label> {item.claseServicio}  <br/>  
                  <Label className="titleColor">Meses Pendientes: </Label> {item.mesesPendientes} 
              </CardBody> 
            </div> 
          </Card>
        </div>
   
    );
      return this.state.items.map(item => {
        return (  
            <Card key={item.id}>  
                <CardHeader>
                  <Button color="link" id={item.id}  onClick={this.handleClickshowCollapse} className="btnShowMore"><strong id={item.id}>Nº Contrato: </strong>{item.id}
                    {item.isCollapse ?  
                                <Label id={item.id} className="fa fa-caret-up fa-lg labelInvoice"></Label>
                                :
                                <Label id={item.id} className="fa fa-caret-down fa-lg labelInvoice"></Label>}
                  </Button>
                </CardHeader>
                <CardBody>
                    <Label className="titleColor">Nombre:</Label> {item.nombreAbonado}<br/>
                    <Label className="titleColor">Alias:</Label> {item.alias}<br/>
                    <u>
                      {item.pendingBill > 0 ?
                        <u>
                          <Link to="/payments/checkinvoice"  className="titleColor">Facturas Pendientes: {item.pendingBill}
                            <Label className="fa fa-arrow-right labelInvoice"></Label> 
                          </Link>
                        </u> 
                        :
                        <Label className="titleColor">Facturas Pendientes:{item.pendingBill}</Label>
                      }
                    </u>
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
}