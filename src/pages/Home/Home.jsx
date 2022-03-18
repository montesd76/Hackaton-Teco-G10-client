
import React from "react";
import { useEffect, useState } from "react";

import img from "../../assets/img/imgFondo.png";
import "./Home.css";
import axios from "axios";
import { urlGetContent } from "../../services/urls";
import { MediaContainer } from "../../components/MediaContainer/MediaContainer";

const Home = () => {

  const [DatosProtegidos, setDatosProtegidos] = useState([]);

  useEffect(() => {
    const consultarDatosProtegidos = async () => {
      axios.get(urlGetContent, { withCredentials: true }).then(response => {
        console.log(response);
        setDatosProtegidos(response.data);
      }).catch(error => {
        console.log(error);
      });
    }
    consultarDatosProtegidos();

  }, []);






  return (
    <>
      <div className="header">
        <MediaContainer />
      </div>
      <div className="header">
        <div className="header-content">
          <img className="image" src={img} alt="foto" />
        </div>
      </div>

      <input type="button" value="consultar datos protegidos" onClick={DatosProtegidos} />


    </>
  );
}

export { Home };
