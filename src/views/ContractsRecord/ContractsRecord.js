import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, 
        Col, FormGroup,Label,CardGroup,CardBody,Collapse,CardHeader,ListGroup,ListGroupItem,Form, 
        Input,CardColumns,Container,Dropdown,DropdownToggle,DropdownMenu,DropdownItem,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';
import {Line,HorizontalBar} from 'react-chartjs-2';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import PaymentsRecord from '../PaymentsRecord';
import HistorialConsumoElectrico from '../../components/HistorialConsumoElectrico';
import HistoricoConsumoProductos from '../../components/HistoricoConsumoProductos';
var elements = 7;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 1400000));
  data2.push(random(80, 1400000));
  data3.push(1000000);
}
//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
const brandInfo = '#63c2de';
const brandSuccess = '#4dbd74';
const brandDanger = '#f86c6b';
const mainChartOpts = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 10,
          stepSize: Math.ceil(1400000 / 10),
          max: 1400000
        }
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    }
  }
function convertHex(hex, opacity) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  
    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    return result;
  }

  
const data = {
    labels: ['Enero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
        {

            label: 'Tendencia de Energía',
            backgroundColor: 'transparent',
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            data: data1
        },
        {
            label: 'Monto Energía',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            data: data2
        },
        {
          label: 'Promedio',
          backgroundColor: 'transparent',
          borderColor: brandDanger,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          borderDash: [8, 5],
          data: data3
        }
    ]
  };


  const line = {
    labels: ['Enero','Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        label: 'Promedio mensual',
        backgroundColor: '#CEEDD9',
        borderColor: brandSuccess,
        hoverBackgroundColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 1,
        data: data1
      }
    ]
  };


const items = [
    {
        id: "Ene",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Feb",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Mar",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Abr",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "May",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Jun",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Jul",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Ago",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Set",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Oct",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Nov",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    },
    {
        id: "Dic",
        serviceType: "Residencial",
        consumption: "100 Kwh",
        days: 31,
        dailyAverage: "3.23",
        dateReading: "12/12/2017",
        reading:11012,
        totalCharged:"₡10,235.75"
    }
];
const historicoConsumoInternet = [
    {
        periodo: "Ene-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Feb-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Mar-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Abr-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "May-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Jun-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Jul-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Ago-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Set-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Oct-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Nov-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Dic-17",
        tipoServicio: "Plan Comercial",
        totalFacturado:"10,235.75",
        isOpen: false
    },
];

const itemsDropdown = [
    {
        name:"Energía"
    },
    {
        name:"Internet"
    },
    {
        name:"Cable TV"
    }
]
const historicoConsumo=
[
    {
        periodo: "Ene-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Feb-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Mar-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Abr-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "May-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Jun-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Jul-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Ago-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Set-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Oct-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Nov-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
    {
        periodo: "Dic-17",
        tarifa: 450,
        lecturaActual:11012,
        diasFacturados: 31,
        consumoEnergia: "100 Kwh",
        promedioDiario: "3.23",
        consumoPotencia: 100,
        totalFacturado:"10,235.75",
        isOpen: false
    },
];
export default class ContractsRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            collapse: false, 
            dropdownOpen: false,
            dropdownOpenContract: false,
            viewInfo: false,
            selectedProduct:"",
            modalMonth:false,
            modalYear: false,
            selectedItem: {},
            year: new Date().getFullYear(),
            items: [ 
                { 
                    id: 344684, 
                    alias: "Casa", 
                    pendingBill: 2,
                    outBalance: 60252.00,
                    isInCart: false,
                    isCollapse: false 
                }, 
                { 
                    id: 357585, 
                    alias: "Oficina", 
                    pendingBill: 0,
                    outBalance: 0.00,
                    isInCart: false,
                    isCollapse: false  
                },
               
            ],
            itemsDropdown: [
                {
                    name:"Energía"
                },
                {
                    name:"Internet"
                },
                {
                    name:"Cable TV"
                },
                {
                    name: "Almacén Coopelesca"
                }
            ]
        } 
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleDropdownContract = this.toggleDropdownContract.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.setNextPreviousYear = this.setNextPreviousYear.bind(this);
        this.setSelectedItem = this.setSelectedItem.bind(this);
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
    setNextMonth(index){
        this.setSelectedItem(items[index+1]);
        this.renderModalMonth()
    }
    setPreviuosMonth(index){
        this.setSelectedItem(items[index-1]);
        this.renderModalMonth()
    }
    
    getItemIndex(id){
        for(var i=0; i< items.length ; i++){
            if(items[i]["id"] == id){
                return i;
               
            }
        }
    }
    setSelectedItem(item){
        this.setState({
            selectedItem: item
        })
    }
    onInputChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        var productName = this.state.selectedProduct;
        if(productName === ""){
            this.setState({selectedProduct: this.state.itemsDropdown[0].name});
        }
        this.setState({viewInfo: !this.state.viewInfo});
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
      }
    toggleDropdownContract() {
        this.setState({
            dropdownOpenContract: !this.state.dropdownOpenContract
        });
    }

    toggleModal(item) {
        this.setState({
            modalMonth: !this.state.modalMonth,
            selectedItem: item
        });
    }
    renderCharts(){
        return(
            <div className="animated fadeIn">
                <FormGroup row>
                <Col xs="12" md="6">          
                    <Card>
                        <CardHeader>
                        Tendencia vs Monto de Energía Kwh
                    
                        </CardHeader>
                        <CardBody>
                        <div className="chart-wrapper">
                            <Line data={data} height={250}/>
                        </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">       
                    <Card>
                        <CardHeader>
                        Promedio mensual Kwh
                        </CardHeader>
                        <CardBody>
                            <div className="chart-wrapper">
                                <HorizontalBar data={line} height={250}/>
                            </div>
                        </CardBody>
                    </Card>
                    </Col>
                </FormGroup>    
                <Row xs="12" md="12">
                    {this.renderPagination()}
                   
                </Row> 
            </div>
        );
       
    }
    renderRecordBilling(){
        return (
            <div>
              <HistorialConsumoElectrico items={historicoConsumo}/>
                <Row xs="12" md="12">
                    {this.renderPagination()}
                   
                </Row>
            </div>
        ); 
    }
    renderRecordBillingDual(historico){
        return (
            <div>
                <HistoricoConsumoProductos items = {historico}/>
                <Row xs="12" md="12">
                    {this.renderPagination()}
                </Row>
            </div>
        ); 
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

   
    renderDropdownProducts(){
        return this.state.itemsDropdown.map(item => {
            return (  
                <option className="dropdownItem" value={item.name} key={item.name}>
                {item.name}
                </option>
            )  
        });  
    }

    renderProduct(){
        var productName = this.state.selectedProduct;
        if(productName === "Internet"){
            return(
                <div>
                    <FormGroup row className="spacing">
                        <Col md="3">
                            <Label className="titleColor">Estado: </Label> Conectado 
                        </Col>
                        <Col xs="12" md="4">
                            <Label className="titleColor">Fecha Instalación: </Label> 10/23/1990 
                        </Col>
                        <Col xs="12" md="4">
                            <Label className="titleColor">Propiedad Modem: </Label> Coopelesca
                        </Col>
                        <Col md="3">
                            <Label className="titleColor">Ip Fija: </Label> 192.168.0.1 
                        </Col>
                        <Col xs="12" md="6">
                            <Label className="titleColor">Velocidad: </Label> 8MB/2MB
                        </Col>
                    </FormGroup>

                    {this.renderRecordBillingDual(historicoConsumoInternet)}
         
                </div>
            )
         
        }else if(productName === "Cable TV"){
            return(
                <div>
                    <FormGroup row className="spacing">
                        <Col md="5">
                            <Label className="titleColor">Estado: </Label> Conectado 
                        </Col>
                        <Col xs="12" md="7">
                            <Label className="titleColor">Fecha Instalación: </Label> 10/23/1990 
                        </Col>
                       
                        <Col xs="12" md="5">
                            <Label className="titleColor">Paquetes de Canales: </Label> Digital Plus/Fox Premium
                        </Col>
                        <Col xs="12" md="7">
                            <Label className="titleColor">Cajas Decodificadas: </Label> 1
                        </Col>
                    </FormGroup>
                    {this.renderRecordBillingDual(historicoConsumoInternet)}
                
                </div>
            )
        }else{
            return (
                
                <div>
                    <FormGroup row className="spacing">
                        <Col md="3">
                            <Label className="titleColor">Estado: </Label> Conectado 
                        </Col>
                        <Col xs="12" md="9">
                            <Label className="titleColor">Fecha Instalación: </Label> 10/23/1990 
                        </Col>
                    </FormGroup>
                    <Col sm="12" className="tabRecord">
                        <Nav tabs >
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                                >
                                <strong className="titleColor">Consumo</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                                >
                                <strong className="titleColor">Histórico</strong>
                                </NavLink>
                            </NavItem>
                
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} >
                        <TabPane tabId="1">
                            {this.renderRecordBilling()}
                        </TabPane>
                        <TabPane tabId="2"> 
                            {this.renderCharts()}
                        </TabPane>
                        <TabPane tabId="3"> 
                        </TabPane>
                        </TabContent>
                    </Col>
                   
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <h4 className="spacing">Consulta de Contratos</h4>
            
                        <Label className="labelServices titleColor">Contrato </Label>
                        <Col>
                        <FormGroup row>
                                <select className="dropdownBranding showContract" >
                                <option className="dropdownItem showContract">
                                    357585 - Contrato casa mami
                                </option>
                                <option className="dropdownItem showContract">
                                    348585 - Contrato casa mía
                                </option>
                                <option className="dropdownItem showContract">
                                    356985 - Contrato Oficina 2
                                </option>
                                </select>
                            <Button className="btn btn-block btnBranding float-right askButton"  type="submit"><i className="fa fa-search marginRight" aria-hidden="true"></i>Consultar</Button>
                        </FormGroup> 
                        </Col>
                        <FormGroup row>
                          <Col xs="12" md="5" >
                            <Label className="titleColor">Contrato: </Label> 357585-Michael Blanco Vargas 
                          </Col>
                          <Col xs="12" md="7">
                            <Label className="titleColor">Dirección: </Label> Ciudad Quesada, Barrio Lourdes segunda casa frente a casa de color vino 
                          </Col>
                        </FormGroup>
                        <hr/>
                        <Label className="labelServices titleColor">Producto: </Label>
                        <Col>
                        
                            <FormGroup row>
                                <select name="selectedProduct" className="dropdownBranding" value={this.state.selectedProduct} onChange={this.onInputChange}>
                                    {this.renderDropdownProducts()}
                                </select>  
                            </FormGroup> 
                        </Col>
                        {this.renderProduct()}
       
            </div>

           
        );
    }
}
