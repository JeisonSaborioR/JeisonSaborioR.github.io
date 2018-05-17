import React from 'react';
import payGateway from '../../../public/img/efectuarPago.png';
import {Button,FormGroup,Container} from 'reactstrap';

import {Link} from 'react-router-dom';
export default class PayGateway extends React.Component {

    render() {
        return (
            <Container>
              <h4 className="spacing">Datos de Pago</h4>
              <img className="payGatewayImage" src={payGateway}/>
              <br></br>
              <FormGroup>
                <Button className="float-right btn btnBranding spacing payFoot btnMarginRight" href ="#/paymentproof"><i className="fa fa-credit-card-alt marginRight" aria-hidden="true"></i>Procesar Pago</Button>
              </FormGroup >
            </Container>
        );
}
}