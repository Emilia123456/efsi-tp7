'use client'
import { useState, useEffect } from 'react';
import { Formulario } from "/components/Form/Form";
import { Listado } from "/components/Listado/Listado";

export default function Page() {
  const [citas, setCitas] = useState([]);

  // Cargar citas de localStorage cuando el componente se monta
  useEffect(() => {
    const storedCitas = localStorage.getItem("localCitas");
    if (storedCitas) {
      setCitas(JSON.parse(storedCitas));
    }
  }, []);

  // Guardar citas en localStorage cuando citas cambie
  useEffect(() => {
    if (citas.length > 0) {
      localStorage.setItem("localCitas", JSON.stringify(citas));
    }
  }, [citas]);

  return (
    <>        
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <Formulario citas={citas} setCitas={setCitas} />
          </div>
          <div className="one-half column">
            <Listado citas={citas} setCitas={setCitas}/>          
          </div>
        </div>
      </div>
    </>
  );
}
