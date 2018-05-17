import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';


//Components
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';


//Views Coopelesca
import Login from '../../views/Login';
import Home from '../../views/Home';
import Payments from '../../views/Payments';
import Requests from '../../views/Requests';
import Notifications from '../../views/Notifications';
import ShoppinCart from '../../views/ShoppingCart';
import CheckInvoice from '../../views/CheckInvoice';
import PagosExterno from '../../views/PagosExterno';
import RequestAdditional from '../../views/RequestAdditional';
import Products from '../../views/Products';
import PayGateway from '../../views/PayGateway';
import Profile from '../../views/Profile';
import PaymentsRecord from '../../views/PaymentsRecord';
import AddContract from '../../views/Form_Add_Contract';
import OnlineProcedures from '../../views/OnlineProcedures';
import PaymentProof from '../../views/PaymentProof';
import ContractsRecord from '../../views/ContractsRecord';
import changePassword from '../../views/ChangePassword';
import recoverPassword from '../../views/RecoverPassword';

class Full extends Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-body">
          <Sidebar  {...this.props}/>
          <main className="main">
            <Container>
              <Switch>
                <Route exact path = "/payments" name="Payments" component={Payments}/>
                <Route path = "/login" name="Login" component={Login}/>
                <Route path = "/requests" name="Requests" component={Requests}/>
                <Route path = "/notifications" name="Notifications" component={Notifications}/>
                <Route path = "/shoppingcart" name="ShoppinCart" component={ShoppinCart}/>
                <Route exact path = "/payments/checkinvoice" name="CheckInvoice" component={CheckInvoice}/>
                <Route path = "/paygateway" name= "PayGateway" component={PayGateway}/> 
                <Route path = "/profile" name= "Profile" component={Profile}/> 
                <Route path = "/pagosexterno" name="PagosExterno" component={PagosExterno}/> 
                <Route path = "/requestAdditional" name="RequestAdditional" component={RequestAdditional}/> 
                <Route exact  path = "/products" name="Products" component={Products}/>
                <Route path = "/paymentsrecord" name= "PaymentsRecord" component = {PaymentsRecord}/>
                <Route path = "/contractsrecord" name= "ContractsRecord" component = {ContractsRecord}/>
                <Route path = "/addcontract" name= "AddContract" component = {AddContract}/>
                <Route exact path = "/products/onlineprocedures" name= "OnlineProcedures" component = {OnlineProcedures}/>
                <Route path = "/paymentproof" name= "PaymentProof" component = {PaymentProof}/>
                <Route path = "/changePassword" name = "ChangePassword" component = {changePassword}/>
                <Route path = "/recoverPassword" name = "RecoverPassword" component = {recoverPassword}/>
                <Route path = "/" name="Home" component={Home}/>
              </Switch>
            </Container>
          </main>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Full;
