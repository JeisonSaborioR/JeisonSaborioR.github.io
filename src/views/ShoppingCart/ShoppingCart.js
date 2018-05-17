import React from 'react';
import { 
    TabContent, TabPane, Nav,
    NavItem, NavLink, Card,
    Button, Col, FormGroup,
    Label,CardGroup,CardBody,
    CardHeader,Row,Input,
    Table, Collapse,CardFooter} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import check from '../../../public/img/check.png'; 
import checkSelected from '../../../public/img/checkSelected.png'; 
 
import downloadInvoice from '../../../public/img/download-file-white.png'; 
import { timingSafeEqual } from 'crypto';
export default class ShoppingCart extends React.Component { 
    constructor(props){ 
        super(props); 
        this.handleClickOverCheck = this.handleClickOverCheck.bind(this); 
        this.handleClickOverCheckInvoice = this.handleClickOverCheckInvoice.bind(this);
        this.state = {
            collapse: false,
            items: [ 
                { 
                    id: 344684, 
                    name: "Michael Blanco V", 
                    pendingInvoices: 2, 
                    pendingBill: "60,252.00", 
                    isCheck: false,
                    collapse:false,
                    invoices: [ 
                        { 
                            id: 94565, 
                            year: 2017, 
                            month: "Enero", 
                            expirationDate: "12/5/2017", 
                            total: 29232.00,
                            pendingBill: 29232.00,
                            totalSubscriber:"-",
                            isCollapse: false,  
                            isCheck: false
                        }, 
                        { 
                            id: 95456, 
                            year: 2017, 
                            month: "Diciembre", 
                            expirationDate: "1/25/2018",
                            total: 31020.00,
                            pendingBill: 29232.00, 
                            totalSubscriber:"-",
                            isCollapse: false,
                            isCheck: false 
                        }
                    ] 
                }
            ],
            itemsInvoice: [ 
                { 
                    id: 94565, 
                    year: 2017, 
                    month: "Enero", 
                    expirationDate: "12/5/2017", 
                    total: 29232.00,
                    pendingBill: 29232.00,
                    totalSubscriber:"-",
                    isCollapse: false,  
                    isCheck: false
                }, 
                { 
                    id: 95456, 
                    year: 2017, 
                    month: "Diciembre", 
                    expirationDate: "1/25/2018",
                    total: 31020.00,
                    pendingBill: 31020.00, 
                    totalSubscriber:"-",
                    isCollapse: false,
                    isCheck: false 
                }
            ] 
        };
        this.toggleButton = this.toggleButton.bind(this); 
    }
    toggleButton(e) {

        let items = this.state.items; 
        let id = e.target.id 
        items.forEach(item => { 
            if (item.id == id){ 
                item.collapse = !item.collapse; 
            }  
        }); 
        this.setState({items,});
      }

    renderList(){  
        return this.state.items.map(item => { 
            return (  
                <div key={item.id}>
                <hr></hr>
                <FormGroup row className="spacing" >
                    <Col xs="12" md="3">
                        <Label className="titleColor labelBranding">N° Contrato:  </Label>  {item.id}
                    </Col>
                    <Col xs="12" md="4">
                        <Label className="titleColor labelBranding">Saldo Pendiente:</Label><strong> ₡{item.pendingBill}</strong>
                    </Col>
                </FormGroup>
                {item.id == "344684" ? 
                    <div className="row">
                        {this.renderListInvoice(item)}
                    </div>
                : null
                }
            </div> 
            )
        });  
    }  
    renderListInvoice(item){  
        return this.state.itemsInvoice.map(invoice => {  
            return (  
                <Col xs="12" md="6"  key={invoice.id}>
                <Card key={invoice.id}>  
                    <CardHeader>           
                        <Button color="link" className="btn"><strong>Nº Factura: {invoice.id}</strong>
                        </Button>
                        <Button color="link" className="checkButton"  onClick={this.handleClickOverCheckInvoice}>  
                            {invoice.isCheck ? (  
                                 <img id={invoice.id} src={check} width="30px"/>  
                            ) :(  
                                <img id={invoice.id} src={checkSelected} width="30px"/>  
                            )  
                        }</Button>  
                    </CardHeader>  
                        <CardBody>  
                            <Label className = "titleColor">Mes: </Label> {invoice.month}
                            <br></br>  
                            <Label className = "titleColor">Fecha de Vencimiento: </Label> {invoice.expirationDate}
                            <br></br>  
                            <Label className = "titleColor">Total:</Label> ₡{invoice.total}
                            <br></br> 
                            <Label className = "titleColor">Total Abonado: </Label>  {invoice.totalSubscriber}
                            <br></br> 
                            <Label className = "titleColor">Saldo Pendiente: </Label>  ₡{invoice.pendingBill}
                        </CardBody>  
                </Card>  
                </Col>
            )  
        });  
    }  
    handleClickOverCheck(e) { 
        let items = this.state.items; 
        let id = e.target.id 
        items.forEach(item => { 
            if (item.id == id){ 
                item.isCheck = !item.isCheck;
            }  
        }); 
        this.setState({items,}); 
    } 
    handleClickOverCheckInvoice(e) { 
        let itemsInvoice = this.state.itemsInvoice;
        let id = e.target.id 
        itemsInvoice.forEach(item => { 
            if (item.id == id){ 
                item.isCheck = !item.isCheck;
            }  
        }); 
        this.setState({itemsInvoice,}); 
    } 

  render() {
    return (
  
    <Row>
    <Col sm="12">
    <h4 className="spacing">Resumen de Pago</h4>
            {this.renderList()}
            <FormGroup className = "bill">
                <Label className = "titleColor" >Total a Pagar: </Label> <strong> ₡60252</strong>
            </FormGroup>
            <Link to= '/paygateway' className="float-right btn btnBranding" ><Label><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Realizar Pago</Label></Link>
   
    </Col>
    </Row>

    );
  }
}


