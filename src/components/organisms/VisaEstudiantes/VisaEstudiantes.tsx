import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const VisaEstudiantes = ({ content }) => {
  return (
    <div className="mx-2">
      <h2 className="text-2xl	font-medium	mb-5">Descripción del Trámite</h2>
      {content.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-sm font-bold mb-4">{section.title}</h2>
          {section.paragraphs &&
            section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-2 text-sm w-1/4">
                {createLinks(paragraph)}
              </p>
            ))}
          {section.listItems && (
            <ol className="list-decimal list-inside ml-4 text-sm space-y-2">
              {renderListItems(parseListItems(section.listItems))}
            </ol>
          )}
        </section>
      ))}
    </div>
  );
};

export default VisaEstudiantes;
