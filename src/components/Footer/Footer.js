import React, {Component} from 'react';
import { Label, FormGroup, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span><strong>COOPELESCA R.L.</strong> &copy; 2018</span>
        
         
          <div className="ml-auto">
            <ul className="listSocialNetwork">
              <li><a href="https://www.facebook.com/CoopelescaAlmacenes" className="fa fa-facebook fa-2x labelBrandingOrange"></a></li>
              <li><a href="https://www.facebook.com/COOPELESCARL" className="fa fa-facebook fa-2x"></a></li>
              <li><a href="https://www.coopelescaenlinea.co.cr/Login.aspx" className="fa fa-at fa-2x" ></a></li>
            </ul>
          </div>
      
        {/* <span className="ml-auto"><a href="https://www.coopelescaenlinea.co.cr/Login.aspx">coopelesca.co.cr</a></span> */}
      </footer>
    )
  }
}

export default Footer;
