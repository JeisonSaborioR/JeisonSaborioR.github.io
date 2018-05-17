import React,{Component} from 'react';
import { Button, Modal, Row,ModalHeader, ModalBody, ModalFooter,Card, CardText, CardBody,CardSubtitle,Label,CardTitle,CardHeader,FormGroup,CardFooter} from 'reactstrap';
import {Link} from 'react-router-dom';
import check from '../../../public/img/check.png';
import checkSelected from '../../../public/img/checkSelected.png';
import {fetchShowNotifications } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class ModalNotifications extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
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
    this.closeModal = this.closeModal.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
                        <Label className="fa fa-arrow-right labelInvoice"></Label> </Link>
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
  closeModal(){
    this.props.fetchShowNotifications(false);
  }
  render() {
    return(
        <Modal isOpen={this.state.modal} onClick={this.toggle} className={this.props.className} onClosed={this.closeModal}>
          <ModalHeader className = "card-header"  toggle={this.toggle}>Notificaciones</ModalHeader>
          <ModalBody>
            {this.renderList()}
            <Link to= '/shoppingcart' className="float-right btn btnBranding btnNotification" ><Label><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Realizar Pago</Label></Link>
          </ModalBody>
        </Modal>
      )
  }
}

function mapDispatchToProps(dispath){
  return bindActionCreators({fetchShowNotifications}, dispath);
}

//State of props
function mapStateToProps(state){
  return {
    showNotification: state.showNotification   
  };
}

export default connect(mapStateToProps,mapDispatchToProps) (ModalNotifications);
  
 