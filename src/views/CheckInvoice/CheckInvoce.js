import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup,Label,CardGroup,CardBody,Collapse,CardHeader } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'; 
import downloadInvoice from '../../../public/img/download-file-white.png'; 
export default class CheckInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [ 
          { 
              id: 94565, 
              year: 2017, 
              month: "Enero", 
              expirationDate: "12/5/2017", 
              total: 29232.00,
              pendingBill: 29232.00,
              totalSubscriber:"-",
              isCollapse: false,
              isInCart:false
          }, 
          { 
              id: 95456, 
              year: 2017, 
              month: "Diciembre", 
              expirationDate: "1/25/2018",
              total: 31020.00,
              pendingBill: 29232.00, 
              totalSubscriber:"-",
              isCollapse: false  
          }
      ]  
    } 
    this.handleClickAddCart = this.handleClickAddCart.bind(this);
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
            <Card key={item.id}>  
                <CardHeader>           
                    <Button color="link" className="btn"><strong>Nº Factura:</strong> {item.id}</Button>    
                </CardHeader>  
               
                <CardBody>  
                    <Label className = "titleColor">Mes: </Label> {item.month}
                    <br></br>  
                    <Label className = "titleColor">Fecha de Vencimiento: </Label> {item.expirationDate}
                    <br></br>  
                    <Label className = "titleColor">Total:</Label> ₡{item.total}
                    <br></br> 
                    <Label className = "titleColor">Total Abonado: </Label>  {item.totalSubscriber}
                    <br></br> 
                    <Label className = "titleColor">Saldo Pendiente: </Label>  ₡{item.pendingBill}
                    <hr></hr>
                    {item.isInCart ?
                    <Button className="float-right spacingLeft btnSpacingBottom btnBranding isInCart" id={item.id} onClick={this.handleClickAddCart} >
                        <i href="" className="fa fa-cart-plus marginRight btnIsInCart" id={item.id}></i>Quitar del carrito</Button>
                    :
                        <Button className="float-right spacingLeft btnSpacingBottom btnBranding" id={item.id} onClick={this.handleClickAddCart} >
                        <i href="" className="fa fa-cart-plus marginRight" id={item.id}></i>Agregar al carrito</Button>
                    }
                    <Button  className="float-right btnBranding"><img className="marginRight" src={downloadInvoice} width="14px"/>Descargar</Button>   
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
                <h4 className="spacing">Consulta de Facturas</h4>
               
                <FormGroup row className="spacing">
                <Col xs="12" md="4">
                    <Label className="titleColor">Contrato:</Label> 344684 <br/>  
                </Col>
                <Col xs="12" md="8">
                    <Label className="titleColor">Abonado: </Label> Michael Blanco Vargas
                </Col>
                </FormGroup>
                <div id="accordion">
                {this.renderList()}
                </div>
        
            </Col>
        </Row>
        {/* <Button color="spacing" className="fa fa-arrow-left fa-lg btnBranding btnInvoice" ></Button> */}
      </div>
    );
  }
}