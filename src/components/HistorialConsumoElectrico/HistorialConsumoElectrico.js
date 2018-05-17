import React, {Component} from 'react';
import {Col,Row,Button,Table,FormGroup,Label} from 'reactstrap'

import downloadInvoice2 from '../../../public/img/download-file-white.png'; 
import downloadInvoice from '../../../public/img/download-file-blue.png'; 
export default class HistorialConsumoElectrico extends Component {
    constructor() {
        super();
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleClickChangeCaret = this.handleClickChangeCaret.bind(this);
        this.state = {
            width: 0, 
            height: 0 ,
            expandedRows : []
        };
    }
    handleClickChangeCaret(id) {
        let items = this.props.items; 
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
        const clickCallback = () => this.handleRowClick(item.periodo);
        const itemRows = [
			<tr className="titleColor tableRow" onClick={clickCallback} key={"row-data-" + item.periodo}>
                <td>{item.periodo}</td>	
                <td>₡{item.totalFacturado}</td>
                <td><Button color="link" id={item.periodo}>
                    {item.isOpen ?  
                                <Label id={item.periodo} className="fa fa-caret-up fa-lg "></Label>
                                :
                                <Label id={item.periodo} className="fa fa-caret-down fa-lg "></Label>}
                  </Button></td>
			</tr>
        ];
      
        if(this.state.expandedRows.includes(item.periodo)) {
            itemRows.push(
                <tr key={item.periodo}>
                    <td className="no-border-top" colSpan='100%'key={"row-expanded-" + item.periodo}>
                    <FormGroup className="spacing" row>
                    
                    <Col className="alignColumns">
                        <Label className="titleColor">Tarifa: </Label> ₡{item.tarifa}<br></br>
                        <Label className="titleColor">Lectura Actual:</Label> {item.lecturaActual}<br></br>
                        <Label className="titleColor">Días Facturados:</Label> {item.diasFacturados}<br></br>
                        <Label className="titleColor" >Consumo Energía:</Label> {item.consumoEnergia}<br></br>
                        <Label className="titleColor">Promedio Diario: </Label>{item.promedioDiario}<br></br>
                        <Label className="titleColor" >Consumo Potencia:</Label> {item.consumoEnergia}<br></br>
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
        const items = this.props.items 
        items.forEach(item => { 
            rows.push(<tbody key={item.periodo}><tr key={item.periodo}><td>{item.periodo}</td>
                   
                    <td>₡{item.tarifa}</td>
                    <td>{item.lecturaActual}</td>
                    <td>{item.diasFacturados}</td> 
                    <td>{item.consumoEnergia}</td>
                    <td>{item.promedioDiario}</td>
                    <td>{item.consumoEnergia}</td>
                    <td>{item.totalFacturado}</td>
                    <td><img src={downloadInvoice} width="15px"/></td>	
                </tr></tbody>) 
        }); 
        return rows; 
    } 
    renderTable(){ 
        return ( 
                <Table responsive> 
                    <thead> 
                        <tr className="titleColor tableRowHeader" > 
                        <td>Periodo</td>
                        <td>Tarifa</td>
                        <td>Lectura Actual</td>
                        <td>Días Facturados</td>
                        <td>Consumo Energía</td>
                        <td>Promedio Diario</td>
                        <td>Consumo potencia</td>
                        <td>Total Facturado</td>
                        <td>Descargar</td>
                        </tr> 
                    </thead>
                        {this.renderBodyTable()}

                </Table> 
        ); 
    } 
    render() {
        let allItemRows = [];
        if (this.state.width < 900){ 
            this.props.items.forEach(item => {
            const perItemRows = this.renderItem(item);
            allItemRows = allItemRows.concat(perItemRows);
            });

            return (
                    <Table >
                        <tbody>
                            <tr className="titleColor tableRowHeader">
                                <td>Periodo</td>
                                <td>Total Facturado</td>
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
