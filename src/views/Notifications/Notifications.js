import React from 'react';
import { Button, Modal, Row,ModalHeader, ModalBody, ModalFooter,Card, CardText, CardBody,CardSubtitle,Label,CardTitle,CardHeader,FormGroup,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import check from '../../../public/img/check.png';
import checkSelected from '../../../public/img/checkSelected.png';

export default class Notifications extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClickOverCheck = this.handleClickOverCheck.bind(this);
    this.state = {
      modal: false,
      items: [
        {
            id: 344684,
            name: "Michael Blanco V",
            pendingInvoices: 2,
            pendingBill: "₡60,252.00",
            isCheck: false
        }
    ]
    };
   
    this.toggle = this.toggle.bind(this);
    this.showModalNotification = this.showModalNotification.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
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
renderList(){
  return this.state.items.map(item => {
      return (
          <Card  key={item.id}>
              <CardHeader className="cardHeader"  id="headingOne">
                     <Button color="link" className="btn btnTitle"> <strong>N° Contrato: {item.id}</strong></Button>  
              </CardHeader>
                  <CardBody>
                      
                    <Label className = "titleColor">Nombre:</Label> {item.name}
                    <br></br>
                    { item.pendingInvoices > 0 ? (
                        <Link to="/checkinvoice"><u><strong className = "titleColor">Facturas Pendientes: </strong></u>{item.pendingInvoices}
                        <Label id={item.id} className="fa fa-arrow-right labelInvoice"></Label></Link>
                    ) : (
                        <Label className = "titleColor">Facturas Pendientes:<Label>0</Label></Label> 
                    )}
                    <br></br>
                    <Label className = "titleColor"> Saldo Pendiente:</Label> {item.pendingBill}
            
                  </CardBody>
          </Card>
      )
  });
}
  showModalNotification(){
      return(
        <Modal isOpen={this.state.modal} onClick={this.toggle} className={this.props.className}>
          <ModalHeader className = "card-header"  toggle={this.toggle}>Notificaciones</ModalHeader>
          <ModalBody>
            {this.renderList()}
          </ModalBody>
        </Modal>
      )
  }
  render() {
    return (
      <div>
           {this.showModalNotification()}
        <h4 className="spacing">Notificaciones</h4>
       
        <Label className="spacing">Los siguientes contratos a su nombre cuentan con facturas vencidas.</Label>
        {this.renderList()} 
        <Link to= '/shoppingcart' className="float-right btn btnBranding btnNotification" ><Label><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Realizar Pago</Label></Link>
     
      </div>
    );
  }
}

