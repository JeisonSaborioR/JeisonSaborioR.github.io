import React, {Component} from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, FormGroup,Label,CardGroup,CardBody,Collapse,CardHeader,ListGroup,ListGroupItem,Form, Input } from 'reactstrap';
import classnames from 'classnames';
import Contrats from './Contracts';
import Groups from './Groups';
import {Link} from 'react-router-dom';
import ModalNotifications from '../ModalNotifications';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//Action
import {fetchShowNotifications } from '../../actions';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0, 
      activeTab: '1', 
      items: [ 
          { 
              id: 344684, 
              alias: "Casa", 
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
    
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.handleClickshowCollapse = this.handleClickshowCollapse.bind(this);
    this.handleClickAddCart = this.handleClickAddCart.bind(this);
    this.controlDesplegarProductos = this.controlDesplegarProductos.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  toggleButton() {
    this.setState({ collapse: !this.state.collapse });
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
    const showMorePayments = this.state.products.map((item,index) =>
      <div id="accordion" key={index}>
        
          <Card>
            <CardHeader id="headingOne">
              <Button color="link" id={item.tipoServicio} className=" btnShowMore" data-toggle="collapse" data-target={"#collapseTerceros"+index} 
              aria-expanded="false" aria-controls={"collapseTerceros"+index} onClick={this.controlDesplegarProductos}><strong  id={item.tipoServicio}>{item.tipoServicio}</strong>
              {item.isCollapse ?  
                                <Label id={item.tipoServicio} className="fa fa-caret-up fa-lg labelInvoice"></Label>
                                :
                                <Label id={item.tipoServicio} className="fa fa-caret-down fa-lg labelInvoice"></Label>}
              </Button>  
            </CardHeader>
            <div id={"collapseTerceros"+index} className="collapse" aria-labelledby="headingOne" data-parent="#accordion"> 
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

 
  render() {
    return (
      <div>
        <h4 className="spacing">Pagar Facturas</h4>
        {this.props.showNotification && this.state.width > 800 ? <ModalNotifications/>: null}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            Propios
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Terceros
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            Grupos
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} >
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {this.renderList()}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2"> 
            <Contrats/>
          </TabPane>

          <TabPane tabId="3">
            <Groups/>
          </TabPane>
        </TabContent>
      </div>
    );
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

export default (connect(mapStateToProps,mapDispatchToProps) (Payments));
