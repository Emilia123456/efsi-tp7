"use client";
import './Listado.css';
import { Cita } from '../Cita/Cita.js';

export function Listado({ citas, setCitas }) {
  return (
    <>
      {citas.map(item => (
        <Cita
          key={item.id}
          citas={citas}
          setCitas={setCitas}
          mascota={item.mascota}
          dueño={item.dueño}
          fecha={item.fecha}
          hora={item.hora}
          sintomas={item.sintomas}
          id={item.id}
        />
      ))}
    </>
  );
}
