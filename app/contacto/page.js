import { Text } from "/components/Text/Text";

export default function Page() {

  const textoContacto1 = `
  En Clínica Veterinaria Emipa, nos encantaría saber de ti y de tus adorables mascotas. Si tienes alguna pregunta, necesitas más información sobre nuestros servicios o deseas reservar una cita, no dudes en contactarnos.
  Puedes comunicarte con nosotros de las siguientes maneras:`;

  const textoContacto2 = `Además, también puedes visitarnos en persona durante nuestro horario de atención para hablar con nuestro equipo de veterinarios y personal de apoyo.
  Nuestro compromiso es proporcionar un servicio excepcional y personalizado para ti y tus mascotas. ¡Esperamos tener noticias tuyas pronto!`;

  return (
    <>      
      <h1>¡Estamos aquí para ayudarte!</h1>
      <Text txt={textoContacto1} />
      <label>Teléfono: 333-666-999</label>
      <label>  Correo Electrónico: emipa@gamil.com</label>
      <label> Dirección: Mi clínica</label>
      <Text txt={textoContacto2} />
    </>
  );
}