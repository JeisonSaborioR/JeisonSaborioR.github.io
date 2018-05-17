import React, {Component} from 'react';
import {Col,Row,Button,Table,FormGroup,Label} from 'reactstrap'

import downloadInvoice2 from '../../../public/img/download-file-white.png'; 
import downloadInvoice from '../../../public/img/download-file-blue.png'; 
export default class HistoryPaymentsTable extends Component {
    constructor() {
        super();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
         this.handleClickChangeCaret = this.handleClickChangeCaret.bind(this);
        this.state = {
            width: 0, 
            height: 0 ,
            items : [
                    {
                        id: "Ene-17",
                        bill: "1,170,927.68",
                        creditMount: "0.0",
                        pendingbill: "1,170,927.68",
                        paymentPlace: "BCR",
                        payDate: "10/04/2018",
                        isOpen: false
                    },
                    {
                        id: "Feb-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "BCR",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Mar-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "BCR",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Abr-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "BNCR",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "May-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "BNCR",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Jun-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "Coocique",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Jul-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "Coocique",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Ago-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "BCR",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Set-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "Coopelesca",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Oct-17",
                        bill: "0.0",
                        creditMount: "0.0",
                        pendingbill: "0.0",
                        paymentPlace: "Coopelesca",
                        payDate: "-",
                        isOpen: false
                    },
                    {
                        id: "Nov-17",
                        bill: 10100.00,
                        creditMount: 10100.00,
                        pendingbill: "0.0",
                        paymentPlace: "BCR",
                        payDate: "12/12/2017",
                        isOpen: false

                    },
                    {
                        id: "Dic-17",
                        bill: 15500.00,
                        creditMount: "0.0",
                        pendingbill: 15500.00,
                        paymentPlace: "-",
                        payDate: "-",
                        isOpen: false
                    }
            ],
            expandedRows : []
        };
    }
    handleClickChangeCaret(id) {
        let items = this.state.items; 
        items.forEach(item => { 
            if (item.id == id){
                item.isOpen = !item.isOpen;
            }  
        }); 
        this.setState({items,}); 
      }  
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
    handleRowClick(rowId) {
        const currentExpandedRows = this.state.expandedRows;
        const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
        
        const newExpandedRows = isRowCurrentlyExpanded ? 
			currentExpandedRows.filter(id => id !== rowId) : 
			currentExpandedRows.concat(rowId);
        
        this.setState({expandedRows : newExpandedRows});
        this.handleClickChangeCaret(rowId)
    }
    
    renderItem(item) {
        const clickCallback = () => this.handleRowClick(item.id);
        const itemRows = [
			<tr className="titleColor tableRow" onClick={clickCallback} key={"row-data-" + item.id}>
                <td>{item.id}</td>	
                <td>₡{item.pendingbill}</td>
                <td><Button color="link" id={item.id}>
                    {item.isOpen ?  
                                <Label id={item.id} className="fa fa-caret-up fa-lg "></Label>
                                :
                                <Label id={item.id} className="fa fa-caret-down fa-lg "></Label>}
                  </Button></td>
			</tr>
        ];
      
        if(this.state.expandedRows.includes(item.id)) {
            itemRows.push(
                <tr key={item.id}>
                    <td className="no-border-top" colSpan='100%'key={"row-expanded-" + item.id}>
                    <FormGroup className="spacing" row>
                    <Col className="alignColumns">
                        <Label className="titleColor">Total: </Label> ₡{item.bill}<br></br>
                        <Label className="titleColor">Pagado: </Label> ₡{item.creditMount}<br></br>
                        <Label className="titleColor" >Sucursal:</Label> {item.paymentPlace}<br></br>
                        <Label className="titleColor">Fecha de pago: </Label>{item.payDate}<br></br>
                     </Col>
                    </FormGroup>
                    <FormGroup >
                        <Button  className="btn btnBranding  float-right"><img className="marginRight" src={downloadInvoice2} width="14px"/>Descargar</Button>
                    </FormGroup>
                    </td>
                </tr>
            );
        }

        return itemRows;    
    }

    renderBodyTable(){ 
        let rows = []; 
        const items = this.state.items 
        items.forEach(item => { 
            rows.push(<tbody key={item.id}><tr key={item.id}><td>{item.id}</td>
                    <td><img src={downloadInvoice} width="15px"/></td>
                    <td>₡ {item.bill}</td>
                    <td>₡ {item.creditMount}</td>
                    <td>₡ {item.pendingbill}</td>
                    <td>{item.paymentPlace}</td> 
                    <td>{item.payDate}</td>	
                </tr></tbody>) 
        }); 
        return rows; 
    } 
    renderTable(){ 
        return ( 
                <Table responsive> 
                    <thead> 
                        <tr className="titleColor tableRowHeader" > 
                        <td>Mes</td>
                        <td>Descargar</td>
                        <td>Total</td>
                        <td>Abonado</td>
                        <td>Pendiente</td>
                        <td>Sucursal</td>
                        <td>Fecha de Pago</td>
                        </tr> 
                    </thead>
                        {this.renderBodyTable()}

                </Table> 
        ); 
    } 
    render() {
        let allItemRows = [];
        if (this.state.width < 900){ 
          
            this.state.items.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
            });

            return (
                    <Table >
                        <tbody>
                            <tr className="titleColor tableRowHeader">
                                <td>Mes</td>
                                <td>Pendiente</td>
                                <td></td>
                            </tr>
                        {allItemRows}
                        </tbody>
                    </Table>
            );
        }
        else 
        {  
            return(this.renderTable()) 
        } 
       
    }
}
