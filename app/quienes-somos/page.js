import { Text } from "/components/Text/Text";

export default function Page() {

  const textoPresentacion = ` En nuestra clínica, nos dedicamos apasionadamente al cuidado y bienestar de tus adoradas mascotas. Con un equipo de veterinarios altamente cualificados y comprometidos, estamos aquí para brindar el más alto nivel de atención médica y personalizada para cada uno de nuestros pacientes peludos.
    En la Clínica Veterinaria Emipa, entendemos que tus mascotas son más que solo animales; son miembros valiosos de tu familia. Por eso, nos esforzamos por crear un ambiente cálido y acogedor donde tanto tú como tus queridas mascotas se sientan cómodos y bienvenidos.
    Nuestros servicios abarcan desde consultas médicas de rutina hasta cirugías complejas, vacunaciones, cuidado dental, análisis de laboratorio y más. Además, para tu conveniencia, ofrecemos la posibilidad de reservar citas en línea, asegurando así una atención rápida y sin complicaciones para ti y tus mascotas.
    En la Clínica Veterinaria Emipa, cada animal es tratado con el amor y el respeto que se merece. Nuestro objetivo es no solo proporcionar cuidados médicos excepcionales, sino también construir relaciones duraderas contigo y tus compañeros peludos.
    Nos comprometemos a ser tu socio de confianza en el viaje de cuidado de tus mascotas. ¡Esperamos conocerte pronto y poder cuidar de tus amigos de cuatro patas!
   `;

  return (
    <>      
      <h1>Emipa</h1>
      <Text txt={textoPresentacion} />
    </>
  );
}
