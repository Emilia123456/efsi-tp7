import Image from "next/image";
import styles from "./page.module.css";
import { Text } from "/components/Text/Text";

export default function Home() {
    const textoBienvenida = `
    En nuestra clínica, nos dedicamos al cuidado y bienestar de tus queridas mascotas. Con un equipo de veterinarios altamente calificados y apasionados por los animales, nos esforzamos por proporcionar el más alto nivel de atención médica y atención personalizada para cada paciente peludo que entra por nuestras puertas.
    En la Clínica Veterinaria Emipa, entendemos que las mascotas son parte de la familia, y estamos comprometidos a brindarles el mejor cuidado posible en un ambiente cálido y acogedor. Ya sea que tu compañero peludo necesite un chequeo de rutina, atención médica especializada o simplemente una caricia reconfortante, estamos aquí para ayudar.
    Nuestros servicios incluyen consultas médicas, vacunaciones, cirugías, cuidado dental, análisis de laboratorio y mucho más. Además, ofrecemos la conveniencia de reservar citas en línea para garantizar una atención rápida y sin problemas para ti y tu mascota.
    En la Clínica Veterinaria Emipa, tu mascota siempre está en buenas manos. ¡Esperamos conocerte a ti y a tu peludo amigo pronto!
      `;

  return (
    <>      
      <h1>¡Bienvenido a la Clínica Veterinaria Emipa! </h1>
      <Text txt={textoBienvenida} />
    </>
  );
}