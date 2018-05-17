import React, {Component} from 'react';
import {Col,Row,Button,Table,FormGroup,Label} from 'reactstrap'
export default class HistoricoConsumoProductos extends Component {
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
                        <Label className="titleColor">Tipo de Servicio: </Label> {item.tipoServicio}<br></br>
                     </Col>
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
                     <td>{item.tipoServicio}</td>
                    <td>₡{item.totalFacturado}</td>
                </tr></tbody>) 
        }); 
        return rows; 
    } 
    renderTable(){ 
        return ( 
                <Table> 
                    <thead> 
                        <tr className="titleColor tableRowHeader" > 
                        <td>Periodo</td>
                        <td>Tipo de Servicio</td>
                        <td>Total Facturado</td>
                        </tr> 
                    </thead>
                        {this.renderBodyTable()}

                </Table> 
        ); 
    } 
    render() {
        let allItemRows = [];
        this.props.items.forEach(item => {
        const perItemRows = this.renderItem(item);
        allItemRows = allItemRows.concat(perItemRows);
        });
        return(this.renderTable()) 
        
       
    }
}
