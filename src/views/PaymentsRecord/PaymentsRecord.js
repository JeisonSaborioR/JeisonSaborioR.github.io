import React from 'react';

import DatePicker from 'react-datepicker';
import {Button,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,Col,FormGroup,Label, 
    Container,ListGroup,ListGroupItemText,ListGroupItem,Row,
    Pagination, PaginationItem, PaginationLink ,Card,CardBody,
    Modal, ModalHeader, ModalBody, ModalFooter,Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import HistoryPaymentsCalendar from '../../components/HistoryPaymentsTable';
import 'react-datepicker/dist/react-datepicker.css';
 

export default class PaymentsRecord extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.changeInfoState = this.changeInfoState.bind(this);
        this.state = {
            dropdownOpen: false,
            viewInfo: false,
            selectedItem: {},
            modalMonth: false,
            modalYear: false,
            year: new Date().getFullYear()
        };
        this.renderPagination = this.renderPagination.bind(this);
        this.setSelectedItem = this.setSelectedItem.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.setNextPreviousYear = this.setNextPreviousYear.bind(this);

    }
    setSelectedItem(item){
        this.setState({
            selectedItem: item
        })
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleModal(item) {
        this.setState({
            modalMonth: !this.state.modalMonth,
            selectedItem: item
        });
    }
    
    changeInfoState() {
        this.setState({
            viewInfo: !this.state.viewInfo
        });
    }

    setNextPreviousYear(e) {

        let year = this.state.year;
        if(e.target.id === "nextYear") {
           year+=1;
        } else {
            year-=1;
        }
        this.setState({
            year
        });

        //TODO: call api to get info by the new year
    }
    renderDynamicField(field){ 
     
        return(
            <div>
            {field.options.map(item => ( 
                <div key={item.name}>
                <Label className="labelOptions">
                <Field
                    component="input"
                    name={field.input.name}
                    type={field.type}
                    value={item.value}
                />
                {item.value}</Label>
                </div>
            ))}
            </div>
        )
        
    }
    
    renderPagination(){
        return (
            <Row className="pagination-container">
                <Button className="btnMonth clear" id="previousYear" onClick={this.setNextPreviousYear}><i className="fa fa-arrow-left" aria-hidden="true" id="previousYear"></i></Button>
                <Label className=" year-label clear">{this.state.year}</Label>
                <Button className="btnMonth clear " id="nextYear" onClick={this.setNextPreviousYear}><i className="fa fa-arrow-right" aria-hidden="true" id="nextYear"></i></Button>
            </Row>
          );
    }
    render() {
        return (
        <div>
        <h4 className="spacing">Histórico de Pagos</h4>
        <Label className="labelServices titleColor">Contrato </Label>
        <Col>
       
        <FormGroup row>
            <select className="dropdownBranding">
            <option className="dropdownItem">
                357585 - Contrato casa mami
            </option>
            </select>
                <Button className="btn btn-block btnBranding float-right askButton" onClick={this.changeInfoState}><i className="fa fa-search marginRight" aria-hidden="true"></i>Consultar</Button>   
        </FormGroup> 
        </Col>
        <Label className="titleColor">Contrato: </Label> 357585-Michael Blanco Vargas
        {this.state.viewInfo ? 
            <div>
                <HistoryPaymentsCalendar/>
                <Row xs="12" md="12">
                    {this.renderPagination()}
                </Row>
            </div>
            : null}
    </div>
    );
}
}