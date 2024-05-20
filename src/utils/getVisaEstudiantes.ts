export const getVisaEstudiantes = (city) => {
  const data = {
    Barcelona: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [],
          listItems: [
            "1. Existen dos tipos diferentes de visados estudiantiles dependiendo de la duración de tu curso o estudios:",
            "a. Visa de estudiante de corto plazo, la opción creada para aquellos extranjeros que estudian entre 91 a 180 días en el país.",
            "b. Visa de estudiante de largo plazo, en caso de que la duración de tus estudios sea superior a 6 meses.",
            "2. Se aconseja solicitar el visado con al menos con 6 semanas de antelación a la fecha en la que se desea viajar.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "1. Impreso de solicitud de visado nacional, original y 2 copias, debidamente cumplimentado con letra de imprenta legible y firmado por el extranjero o su representante legal en caso de ser menor de edad. Es importante indicar correo electrónico y teléfono de contacto.",
            "2. Pasaporte con vigencia mínima de 1 año, original y fotocopia.",
            "3. Fotografía. Una fotografía reciente, tamaño carné, a color, con fondo claro, tomada de frente, sin gafas oscuras, ni reflejos, ni prendas que oculten el óvalo de la cara.",
            "4. Prueba de admisión para la actividad de estudios, formación, voluntariado o prácticas.",
            "5. Prueba de la disponibilidad de medios económicos. Original y una copia de los documentos que prueben que el solicitante (o su representante legal o familiar que le respalda) dispone de medios económicos suficientes para cubrir los gastos de la estancia y regreso del estudiante y de los familiares que le acompañen. La cantidad mínima exigida equivale al 100% del Indicador Público de Renta de Efectos Múltiples IPREM.",
            "6. Seguro de enfermedad. Original y una copia del certificado de seguro de enfermedad público o privado contratado con una entidad aseguradora autorizada a operar en España.",
            "7. Certificado de antecedentes penales. Cuando la duración de los estudios supere los 180 días.",
            "8. Certificado médico. Original y una copia de un certificado médico que acredite que el solicitante no padece enfermedades que puedan tener repercusiones graves para la salud pública de conformidad con el Reglamento Sanitario Internacional de 2005.",
            "9. Prueba la identidad y capacidad del representante. Si el solicitante es menor de edad, se presentará copia del documento de identidad o pasaporte del progenitor y del documento que pruebe el parentesco.",
            "10. Autorización de los representantes legales. Si el solicitante es menor de edad, se aportará original y una copia del acta notarial de los progenitores o tutores autorizando el desplazamiento del menor a España e identificando a la persona que se hará cargo del menor en España.",
            "11. Pedir cita en el consulado de España para presentar la documentación en el siguiente enlace.",
            "12. La Oficina Consular entregará al interesado un resguardo de solicitud con un código que permite verificar el estado de tramitación del expediente a través del siguiente enlace.",
            "13. El plazo legal para tomar una decisión es de 1 mes a partir del día siguiente a la fecha de presentación de la solicitud, pero este plazo se podrá ampliar cuando se soliciten documentos adicionales o la celebración de una entrevista.",
          ],
        },
      ],
    },
    Madrid: {
      sections: [
        {
          title: "¿Qué necesitas saber?",
          paragraphs: [],
          listItems: [
            "1. Existen dos tipos diferentes de visados estudiantiles dependiendo de la duración de tu curso o estudios:",
            "a. Visa de estudiante de corto plazo, la opción creada para aquellos extranjeros que estudian entre 91 a 180 días en el país.",
            "b. Visa de estudiante de largo plazo, en caso de que la duración de tus estudios sea superior a 6 meses.",
            "2. Se aconseja solicitar el visado con al menos con 6 semanas de antelación a la fecha en la que se desea viajar.",
          ],
        },
        {
          title: "¿Cómo hacerlo?",
          listItems: [
            "1. Impreso de solicitud de visado nacional, original y 2 copias, debidamente cumplimentado con letra de imprenta legible y firmado por el extranjero o su representante legal en caso de ser menor de edad. Es importante indicar correo electrónico y teléfono de contacto.",
            "2. Pasaporte con vigencia mínima de 1 año, original y fotocopia.",
            "3. Fotografía. Una fotografía reciente, tamaño carné, a color, con fondo claro, tomada de frente, sin gafas oscuras, ni reflejos, ni prendas que oculten el óvalo de la cara.",
            "4. Prueba de admisión para la actividad de estudios, formación, voluntariado o prácticas.",
            "5. Prueba de la disponibilidad de medios económicos. Original y una copia de los documentos que prueben que el solicitante (o su representante legal o familiar que le respalda) dispone de medios económicos suficientes para cubrir los gastos de la estancia y regreso del estudiante y de los familiares que le acompañen. La cantidad mínima exigida equivale al 100% del Indicador Público de Renta de Efectos Múltiples IPREM.",
            "6. Seguro de enfermedad. Original y una copia del certificado de seguro de enfermedad público o privado contratado con una entidad aseguradora autorizada a operar en España.",
            "7. Certificado de antecedentes penales. Cuando la duración de los estudios supere los 180 días.",
            "8. Certificado médico. Original y una copia de un certificado médico que acredite que el solicitante no padece enfermedades que puedan tener repercusiones graves para la salud pública de conformidad con el Reglamento Sanitario Internacional de 2005.",
            "9. Prueba la identidad y capacidad del representante. Si el solicitante es menor de edad, se presentará copia del documento de identidad o pasaporte del progenitor y del documento que pruebe el parentesco.",
            "10. Autorización de los representantes legales. Si el solicitante es menor de edad, se aportará original y una copia del acta notarial de los progenitores o tutores autorizando el desplazamiento del menor a España e identificando a la persona que se hará cargo del menor en España.",
            "11. Pedir cita en el consulado de España para presentar la documentación en el siguiente enlace.",
            "12. La Oficina Consular entregará al interesado un resguardo de solicitud con un código que permite verificar el estado de tramitación del expediente a través del siguiente enlace.",
            "13. El plazo legal para tomar una decisión es de 1 mes a partir del día siguiente a la fecha de presentación de la solicitud, pero este plazo se podrá ampliar cuando se soliciten documentos adicionales o la celebración de una entrevista.",
          ],
        },
      ],
    },
  };
  return data[city];
};
