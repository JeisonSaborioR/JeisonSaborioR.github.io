import React, {Component} from 'react';
import { Form, Label, FormGroup, Input, Button,Alert } from 'reactstrap';
import FormCustom from './_form';
import { Field,reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';

//Action
import { fetchStateDatePicker } from '../../actions';



const formulario = 
{ 
  ETIQUETAFORMULARIO:"Adición de Caja de TV Digital",
  ATRIBUTOS:[
  {
    ID_ATRIBUTO: "11SFSD",
    ETIQUETA: "Cantidad Adicionales",
    ELEMENTO_HTML: "number",
    VALOR_DEFECTO:"",
    OPCIONES:[],
    VALIDACIONES:[
      { 
        NOMBRE:"max", 
        VALOR:"10", 
        MENSAJE:"Cantidad máxima 10 unidades" 
      }, 
      { 
        NOMBRE:"min", 
        VALOR:"2", 
        MENSAJE:"Cantidad mínima 2 unidades" 
      }, 
      {
        NOMBRE:"required",
        VALOR:"true",
        MENSAJE:"Requerido"
      }
    ],	
    FILAS:"", 
    EDITABLE:"N",
    VISIBLE:"S",
    ETIQUETA_INTERNA:"Digite la cantidad adicional",
    AYUDA_DESPLEGABLE:""
  },
  {
    ID_ATRIBUTO: "12SFSDFR",
    ETIQUETA: "Dirección",
    ELEMENTO_HTML: "textarea",
    VALOR_DEFECTO:"",
    OPCIONES:[],
    VALIDACIONES:[
      { 
        NOMBRE:"maxLength", 
        VALOR:"100", 
        MENSAJE:"Cantidad máxima 10 unidades" 
      }, 
      { 
        NOMBRE:"minLength", 
        VALOR:"5", 
        MENSAJE:"Cantidad mínima de escritura es 5" 
      }, 
      {
        NOMBRE:"required",
        VALOR:"true",
        MENSAJE:"Requerido"
      }
    ],	
    FILAS:"2", 
    EDITABLE:"N",
    VISIBLE:"S",
    ETIQUETA_INTERNA:"Digite la dirección",
    AYUDA_DESPLEGABLE:""
  },
  {
    ID_ATRIBUTO: "13SDFSDFWER",
    ETIQUETA: "Productos",
    ELEMENTO_HTML: "radio",
    VALOR_DEFECTO:"",
    OPCIONES:[{
      VALOR: "name1",
      DESCRIPCION: "Internet"
    },{
      VALOR: "name2",
      DESCRIPCION: "TV cable"
    },{
      VALOR: "name3",
      DESCRIPCION: "Energía"
    }],
    VALIDACIONES:[
      {
        NOMBRE:"required",
        VALOR:"true",
        MENSAJE:"Requerido"
      }
    ],	
    FILAS:"", 
    EDITABLE:"N",
    VISIBLE:"S",
    ETIQUETA_INTERNA:"",
    AYUDA_DESPLEGABLE:""

  },
  {
    ID_ATRIBUTO: "14BCVB",
    ETIQUETA: "Productos",
    ELEMENTO_HTML: "select",
    VALOR_DEFECTO:"",
    OPCIONES:[{
      VALOR: "name1",
      DESCRIPCION: "Internet"
    },{
      VALOR: "name2",
      DESCRIPCION: "TV cable"
    },{
      VALOR: "name3",
      DESCRIPCION: "Energía"
    }],
    VALIDACIONES:[
      {
        NOMBRE:"required",
        VALOR:"true",
        MENSAJE:"Requerido"
      }
    ],	
    FILAS:"", 
    EDITABLE:"N",
    VISIBLE:"S",
    ETIQUETA_INTERNA:"",
    AYUDA_DESPLEGABLE:""
  
  }]
}

class DynamicFormInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fecha:moment()
    }
    this.manejarCambiosInterfaz = this.manejarCambiosInterfaz.bind(this);
    this.renderizarCampoDinamico = this.renderizarCampoDinamico.bind(this);
    this.controlarCampoRequerido = this.controlarCampoRequerido.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchStateDatePicker(moment())
  }

  controlarCampoRequerido(validacines){
    var requerido = false;
    validacines.forEach(elemento => {
      if(elemento.NOMBRE === "required"){
        requerido = true;
      }
    });
    return requerido;
  }
  
  manejarCambiosInterfaz(fecha) {
    this.setState({fecha: fecha});
    
  }
  
  onSubmit(values){
    console.log(values)
  }

  renderizarCampoDinamico(elemento){ 
    var campo = elemento.campo;

    const { meta: {touched, error,warning} } = elemento;
    const dynamicField = () => {
      return(
        <Input {...elemento.input} placeholder={campo.ETIQUETA_INTERNA} type={campo.ELEMENTO_HTML} className="inputBranding"/>
      )
    }
    const currencyField = () => {
      return(
        <NumberFormat {...elemento.input}   thousandSeparator={','} decimalSeparator={'.'} prefix={'₡'} className="inputCurrency"/>
      )
    }
    const textAreaField = () => {
      return(
        <Input {...elemento.input} placeholder={campo.ETIQUETA_INTERNA} type={campo.ELEMENTO_HTML} className="textAreaBranding" rows={campo.FILAS}/>
      )
    }
    const datePickerField= () => {
      
      return(
        <div {...elemento.input}>
          <DatePicker
          dateFormat="DD/MM/YYYY"
          selected={campo.fecha} 
          onChange={this.handleChange}  className="inputCurrency"/>
        </div>
      )
    }
    const selectField = () => {
      return(
        <div>
          <select {...elemento.input} className="dropdownBranding"> 
            {campo.OPCIONES.map(opcion => (  
              <option value={opcion.VALOR} key={opcion.VALOR}> 
                {opcion.DESCRIPCION} 
              </option> 
            ))} 
          </select>
        </div>
      )
    }

    const radioField = () =>{
      return(
        <div>
          {campo.OPCIONES.map(opcion => ( 
            <div key={opcion.VALOR}>
              <Label className="labelOptions">
              <Field
                component="input"
                name={elemento.input.name}
                type={campo.ELEMENTO_HTML}
                value={opcion.VALOR}
              />
               <span className="checkmark"></span>
              {opcion.DESCRIPCION}</Label>
            </div>
          ))}
        </div>
      )
    }
    const checkField = () =>{
      return(
        <div>
        {campo.OPCIONES.map(opcion => ( 
          <div key={opcion.VALOR}  {...elemento.input}>
            <Label >
            <input
              type={campo.ELEMENTO_HTML}
              value={opcion.VALOR}
            />
            {opcion.DESCRIPCION}</Label>
          </div>
        ))}
      </div>
      )
    }
    return(
  
      <FormGroup>
          {this.controlarCampoRequerido(campo.VALIDACIONES)  ?  <Label className="titleColor">{campo.ETIQUETA}<Label className="inputRequerido">*</Label></Label> 
                                                  :  <Label className="titleColor">{campo.ETIQUETA}</Label>}
         
          { campo.ELEMENTO_HTML === "number" ||  campo.ELEMENTO_HTML === "text" ||  campo.ELEMENTO_HTML === "password" || campo.ELEMENTO_HTML === "email" ? dynamicField(): 
            campo.ELEMENTO_HTML === "textarea" ? textAreaField(): 
            campo.ELEMENTO_HTML === "currency" ? currencyField():
            campo.ELEMENTO_HTML === "date" ? datePickerField(): 
            campo.ELEMENTO_HTML === "select" ? selectField():
            campo.ELEMENTO_HTML === "radio" ? radioField():
            campo.ELEMENTO_HTML === "checkbox" ? checkField() : null}
          {touched &&
            ((error && <Alert color="danger">{error} </Alert>) ||
              (warning && <span>{warning}</span>))}
      </FormGroup>
    )
  }

  render() {
    const props = this.props;
    const campoDinamico =  (elemento, key) => {
    
      return (
        <Field
          key={key}
          name={elemento.ID_ATRIBUTO}
          type={elemento.ELEMENTO_HTML}
          component={this.renderizarCampoDinamico}
          campo={elemento}
          fecha={this.state.fecha}
        />
      )
    };

    // form list
    const listaFormularios = (elementos) => {
      return elementos.map( (elemento, index) => campoDinamico(elemento, index));
    };
  
    // Start for create dynamic form
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h4>{formulario.ETIQUETAFORMULARIO}</h4>
        {listaFormularios(formulario.ATRIBUTOS)}
        <Button className="float-right px-4 btn-block btnBranding" type="submit" disabled={submitting}>Registrar Solicitud</Button>
      </Form>
    )
  }
}


function validate(valores){
  const errores = {}
  var campos = formulario.ATRIBUTOS;
  campos.map( (elemento, index) => {
    let nombreCampo = elemento.ID_ATRIBUTO;
    let arregloValidaciones = elemento.VALIDACIONES;
    if(arregloValidaciones.length !== 0){
      arregloValidaciones.forEach(validacion => {
        let valorValidacion = validacion.VALOR;
        //Validate the inputs from 'Values'
        if(validacion.NOMBRE === "required" && !valores[nombreCampo]){
          errores[nombreCampo] = validacion.MENSAJE;
        }else if(validacion.NOMBRE === "max" && valores[nombreCampo] > parseInt(valorValidacion)){
          errores[nombreCampo] = validacion.MENSAJE;
        }else if(validacion.NOMBRE === "min" && valores[nombreCampo] < parseInt(valorValidacion)){
          errores[nombreCampo] = validacion.MENSAJE;
        }else if(validacion.NOMBRE === "maxLength" && valores[nombreCampo] && valores[nombreCampo].length > parseInt(valorValidacion)){
          errores[nombreCampo] = validacion.MENSAJE;
        }else if(validacion.NOMBRE === "minLength" && valores[nombreCampo] && valores[nombreCampo].length < parseInt(valorValidacion)){
          errores[nombreCampo] = validacion.MENSAJE;
        }else if(validacion.NOMBRE === "pattern" && valores[nombreCampo] && valorValidacion.test(valores[nombreCampo]))
          errores[nombreCampo] = validacion.MENSAJE;
      })
    }
  });
  return errores;
}


function mapDispatchToProps(dispath){
  return bindActionCreators({fetchStateDatePicker}, dispath);
}

//State of props
function mapStateToProps(state){
  return {
      date:state.date   
  };
}

export default reduxForm({
  validate,
  form: 'FieldForm'
}) ( connect(mapStateToProps, mapDispatchToProps) (DynamicFormInput));
  