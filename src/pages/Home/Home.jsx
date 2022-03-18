
import React from "react";
import img from "../../assets/img/imgFondo.png";
import "./Home.css";
import axios from "axios";
import { urlGetContent } from "../../services/urls";
import { MediaContainer } from "../../components/MediaContainer/MediaContainer";


class Home extends React.Component {

  consultarDatosProtegidos = () => {
    axios.get(urlGetContent,  { withCredentials: true }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }



  render() {
    return (
      <React.Fragment>
        <div className="header">
          <MediaContainer />
        </div>
      <div className="header">
        <div className="header-content">
          <img className="image" src={img} alt="foto" />
        </div>
      </div>

      <input type="button" value="consultar datos protegidos" onClick={this.consultarDatosProtegidos} />


      </React.Fragment>
    );
  }
}
export { Home };
