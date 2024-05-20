// src/data.js
export const getNIE = (city) => {
  const data = {
    Barclenoa: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [
            "El NIE es el Número de Identidad de Extranjero, una referencia compuesta por una letra (X, Y o Z), siete dígitos y un carácter de verificación alfabético (o sea, otra letra). Es un número personal, único, exclusivo, demuestra que resides en España.",
            "El NIE sirve para varias cosas, básicamente para demostrar que tienes permiso para vivir indefinidamente en España, y de esta forma para acreditar tu residencia, para trabajar, comprar propiedades o vehículos, montar negocios, pagar impuestos, cotizar, recibir asistencia sanitaria pública, inscribirte en el padrón municipal.",
            "El proceso más complicado para sacar tu NIE suele ser conseguir la cita previa donde entregarás los documentos necesarios, usualmente hay muchas solicitudes por lo que las citas suelen ser bastante lejanas a 1 mes o más. Para evitar este inconveniente te aconsejamos 2 cosas:",
            "- Entra varias veces al día al link para pedir la cita previa, para buscar cita. Puede que se libere algún cupo cercano en la oficina de extranjería de la ciudad dónde piensas vivir.",
            "- Buscar cita en oficinas de extranjería en pueblos o ciudades pequeñas aledañas a la ciudad dónde piensas vivir. Por ejemplo Girona o Tarragona pueden ser una buena opción si piensas vivir en Barcelona. Usualmente sus oficinas de extranjería no tienen tanta demanda como las ciudades principales por lo que encontrar una cita será más fácil.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "Solicita una cita previa en la oficina de extranjería de Barcelona (Cataluña), a través del siguiente enlace: https://icp.administracionelectronica.gob.es/icpplustieb/citar?p=8&locale=es",
            "Imprime y rellena los documentos necesarios: - Formulario EX-15. Llena por completo y firma el formulario, lo podrás descargar y editar a través del siguiente enlace: https://example.com - Original y copia del pasaporte completo. - Formulario 012. Llena por completo, imprime y firma el formulario. Imprime 3 copias, 1 para el banco, otra para extranjería y una para ti. Lo podrás descargar y editar a través del siguiente enlace: https://example.com - Ve a tu banco de preferencia, entrega el formulario 012 y paga la tasa/impuesto correspondiente.",
            "Acude a tu cita llevando contigo todos los documentos previos: - Formulario EX-15 - Pasaporte - Formulario 012 y comprobante de pago de parte del banco.",
            "Una vez entregados todos los documentos, los funcionarios de extranjería te entregarán un comprobante/resguardo, que deberás guardar y entregar en la cita siguiente donde vayas de nuevo a recoger tu tarjeta NIE.",
            "Recoger tu NIE.",
          ],
        },
      ],
    },
    Madrid: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [
            "El NIE es el Número de Identidad de Extranjero, una referencia compuesta por una letra (X, Y o Z), siete dígitos y un carácter de verificación alfabético (o sea, otra letra). Es un número personal, único, exclusivo, demuestra que resides en España.",
            "El NIE sirve para varias cosas, básicamente para demostrar que tienes permiso para vivir indefinidamente en España, y de esta forma para acreditar tu residencia, para trabajar, comprar propiedades o vehículos, montar negocios, pagar impuestos, cotizar, recibir asistencia sanitaria pública, inscribirte en el padrón municipal.",
            "El proceso más complicado para sacar tu NIE suele ser conseguir la cita previa donde entregarás los documentos necesarios, usualmente hay muchas solicitudes por lo que las citas suelen ser bastante lejanas a 1 mes o más. Para evitar este inconveniente te aconsejamos 2 cosas:",
            "- Entra varias veces al día al link para pedir la cita previa, para buscar cita. Puede que se libere algún cupo cercano en la oficina de extranjería de la ciudad dónde piensas vivir.",
            "- Buscar cita en oficinas de extranjería en pueblos o ciudades pequeñas aledañas a la ciudad dónde piensas vivir. Por ejemplo Girona o Tarragona pueden ser una buena opción si piensas vivir en Barcelona. Usualmente sus oficinas de extranjería no tienen tanta demanda como las ciudades principales por lo que encontrar una cita será más fácil.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "Solicita una cita previa en la oficina de extranjería de Barcelona (Cataluña), a través del siguiente enlace: https://icp.administracionelectronica.gob.es/icpplustieb/citar?p=8&locale=es",
            "Imprime y rellena los documentos necesarios: - Formulario EX-15. Llena por completo y firma el formulario, lo podrás descargar y editar a través del siguiente enlace: https://example.com - Original y copia del pasaporte completo. - Formulario 012. Llena por completo, imprime y firma el formulario. Imprime 3 copias, 1 para el banco, otra para extranjería y una para ti. Lo podrás descargar y editar a través del siguiente enlace: https://example.com - Ve a tu banco de preferencia, entrega el formulario 012 y paga la tasa/impuesto correspondiente.",
            "Acude a tu cita llevando contigo todos los documentos previos: - Formulario EX-15 - Pasaporte - Formulario 012 y comprobante de pago de parte del banco.",
            "Una vez entregados todos los documentos, los funcionarios de extranjería te entregarán un comprobante/resguardo, que deberás guardar y entregar en la cita siguiente donde vayas de nuevo a recoger tu tarjeta NIE.",
            "Recoger tu NIE.",
          ],
        },
      ],
    },
  };
  return data[city];
};
