
import "./Cita.css";
import { Boton } from "/components/Boton/Boton";
import { useEffect } from "react";

export function Cita({ id, citas, setCitas, mascota, dueño, fecha, hora, sintomas }) {

  //const localCitas = localStorage.getItem("localCitas");
  

  
  const eliminarCita = (id) => {
    console.log("Eliminar cita:", id);
    const nuevoArrayCitas = citas.filter(citas => citas.id !== id);
    setCitas(nuevoArrayCitas);
    console.log("Nuevo Array:" + nuevoArrayCitas);
  }

  return (<div className="cita" key={id}>
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño: <span>{dueño}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <Boton onClick={()=>eliminarCita(id)} txt="Eliminar x" clase="button elimnar u-full-width"/>
  </div>);

}