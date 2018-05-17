import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge,
  Media
} from 'reactstrap';


class Header extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
  
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
  
    
    const logguedLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#/profile"><i className="fa icon-user fa-2x iconosHeader"></i></NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink href="#/notifications"><i className="fa icon-bell fa-2x iconosHeader"></i><Badge pill color="danger">5</Badge></NavLink>
        </NavItem>
        <NavItem className="">
          <NavLink href="#/shoppingcart"><i className="fa icon-basket-loaded fa-2x iconosHeader"></i><Badge pill color="danger">3</Badge></NavLink>
        </NavItem>
      </Nav>
      
    );
    const logOutLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem className="">
          <NavLink href="#/shoppingcart"><i className="fa icon-basket-loaded fa-2x iconosHeader"></i><Badge pill color="danger">3</Badge></NavLink>
        </NavItem>
      </Nav>
      
    );
    
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        {this.props.isAuthenticated ? logguedLinks : logOutLinks}
      </header>
    );
  }
}
//State of props
function mapStateToProps(state){
  return {
      isAuthenticated:state.isAuthenticated   
  };
}

export default connect(mapStateToProps,null) (Header);
