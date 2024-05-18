import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Admission = ({ content }) => {
  return (
    <div className="mx-2">
      {content.listItems.map((item, index) => (
        <ol className="list-decimal list-inside ml-4 text-sm space-y-2">
          {item}
        </ol>
      ))}
    </div>
  );
};

export default Admission;
