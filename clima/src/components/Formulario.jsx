import React, { useState } from 'react';

export default function Formulario({busqueda, guardarBusqueda, guardarConsulta}) {

    

    // estado para validar
    const [error, guardarError] = useState(false);

    // extraer ciudad y pais
    const { ciudad, pais } = busqueda;

    // funcion para guardar en el state
    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    // cuando el usuario da submit al form
    const handleSubmit = e => {
        e.preventDefault();
        // validacion
        if(ciudad.trim() === "" || pais.trim() === ""){
            guardarError(true);
            return;
        }

        guardarError(false);

        // pasar la informacion al componente principal
        guardarConsulta(true)
    }


    return (
        <form
            onSubmit={handleSubmit}
        >

            {(error)? <p className="red darken-4 error">Todos los campos son Obligatorios</p> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione Pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-ligh btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}
