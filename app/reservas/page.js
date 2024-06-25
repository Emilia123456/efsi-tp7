'use client'
import { useState } from 'react';
import { Formulario } from "/components/Form/Form";
import {Listado} from "/components/Listado/Listado";

export default function Page() {
    
  const [citas, setCitas] = useState([]);

  return (<>        
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div class="container">
          <div class="row">
            <div class="one-half column">
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
  