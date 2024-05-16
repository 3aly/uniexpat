import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Banco = ({ content }) => {
  return (
    <div>
      {content.sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          {section.paragraphs &&
            section.paragraphs.map((paragraph, i) => (
              <p key={i} className="mb-2">
                {createLinks(paragraph)}
              </p>
            ))}
          {section.listItems && (
            <ol className="list-decimal list-inside ml-4 space-y-2">
              {renderListItems(parseListItems(section.listItems))}
            </ol>
          )}
        </section>
      ))}
    </div>
  );
};

export default Banco;
