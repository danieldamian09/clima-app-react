import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consulta, guardarConsulta] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    
    const consultarApi = async() => {

      if(consulta){
        const apiKey = 'ffe409fec4a70cd0c47d6bc695029b3a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`
        const response = await fetch(url);
        const resultado = await response.json();
        console.log(resultado)
      }
      
    }


    consultarApi()

    // guardarConsulta(false)
  }, [consulta])


  return (
    <Fragment>
      <Header 
        title="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda} 
                guardarBusqueda={guardarBusqueda} 
                guardarConsulta={guardarConsulta} 
              />
            </div>
            <div className="col m6 s12">
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
