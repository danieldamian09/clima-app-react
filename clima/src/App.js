import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consulta, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false)


  const { ciudad, pais } = busqueda;

  useEffect(() => {
    
    const consultarApi = async() => {

      if(consulta){
        const apiKey = 'ffe409fec4a70cd0c47d6bc695029b3a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`;
        const response = await fetch(url);
        const resultado = await response.json();
        guardarResultado(resultado);
        guardarConsulta(false);
        // Detecta si hubo resultados correctos en la consulta
          if(resultado.cod === "404"){
            guardarError(true)
          } else {
            guardarError(false)
          }
      }     
    }
    
    consultarApi();
    // quitar el error que me da useEffect por falta de colocar dependencias

    // eslint-disable-next-line
  }, [consulta])

  // carga de componente condicional en caso de que exista un error de respuesta de la api
  let componente;
  if(error){
    componente = <Error mesage="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }


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
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
