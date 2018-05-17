import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card,Collapse, Button, Col, FormGroup,
    Label,CardGroup,CardBody,CardHeader,Row,Modal,ModalHeader,ModalBody,ModalFooter,Dropdown,DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import DynamicFormInput  from '../../components/DynamicFormInput';

export default class OnlineProcedures extends React.Component {
    constructor(props) {
        super(props);  
    }
    render() {
       
        return (
            <DynamicFormInput/>
        );
    }
}