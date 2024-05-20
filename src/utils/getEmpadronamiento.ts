export const getEmpadronamiento = (city) => {
  const data = {
    Barcelona: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [
            "Empadronarse significa registrarse como residente en el ayuntamiento de la ciudad o pueblo en el que vas a vivir de forma habitual. En otras palabras, se trata de realizar el trámite necesario para que las autoridades sepan exactamente dónde vives.",
            "Se trata de un proceso realmente simple y fácil, y te recomendamos que lo hagas lo antes posible una vez llegues al territorio español, por qué muchos procedimientos legales posteriores requerirán que aportes tu empadronamiento.",
            "Tienes 3 maneras distintas de realizar el proceso: online, por teléfono y de manera presencial. La forma más común y ágil de hacerlo es de manera presencial.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "Solicita una cita previa en la oficina de Atención Ciudadana de la ciudad donde estás viviendo. Solicitar cita previa en Barcelona por medio del siguiente enlace: https://seuelectronica.ajuntament.barcelona.cat/oficinavirtual/es/tramit/20100001515.",
            "Ten a la mano los siguientes documentos: - Contrato de alquiler de la vivienda en la que resides y una copia del mismo. Si únicamente estás alquilando una habitación o vives con uno de tus familiares deberás presentar una autorización por parte de la persona con la que tienes el contrato de alquiler, incluyendo una copia del mismo. Además, también se requerirá el documento de identificación del arrendador. Deberá asistir contigo al ayuntamiento y firmar por ti. - Pasaporte original y copia - Formulario de registro, completado. Contiene tu dirección en España y el nombre de las otras personas que también viven en esa misma casa o piso.",
            "Acude a la cita, entrega la documentación previa y recibe tu certificado de empadronamiento.",
          ],
        },
      ],
    },
    Madrid: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [
            "Empadronarse significa registrarse como residente en el ayuntamiento de la ciudad o pueblo en el que vas a vivir de forma habitual. En otras palabras, se trata de realizar el trámite necesario para que las autoridades sepan exactamente dónde vives.",
            "Se trata de un proceso realmente simple y fácil, y te recomendamos que lo hagas lo antes posible una vez llegues al territorio español, por qué muchos procedimientos legales posteriores requerirán que aportes tu empadronamiento.",
            "Tienes 3 maneras distintas de realizar el proceso: online, por teléfono y de manera presencial. La forma más común y ágil de hacerlo es de manera presencial.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "Solicita una cita previa en la oficina de Atención Ciudadana de la ciudad donde estás viviendo. Solicitar cita previa en Barcelona por medio del siguiente enlace: https://seuelectronica.ajuntament.barcelona.cat/oficinavirtual/es/tramit/20100001515.",
            "Ten a la mano los siguientes documentos: - Contrato de alquiler de la vivienda en la que resides y una copia del mismo. Si únicamente estás alquilando una habitación o vives con uno de tus familiares deberás presentar una autorización por parte de la persona con la que tienes el contrato de alquiler, incluyendo una copia del mismo. Además, también se requerirá el documento de identificación del arrendador. Deberá asistir contigo al ayuntamiento y firmar por ti. - Pasaporte original y copia - Formulario de registro, completado. Contiene tu dirección en España y el nombre de las otras personas que también viven en esa misma casa o piso.",
            "Acude a la cita, entrega la documentación previa y recibe tu certificado de empadronamiento.",
          ],
        },
      ],
    },
  };
  return data[city];
};
