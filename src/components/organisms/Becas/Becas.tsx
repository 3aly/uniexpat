import { LinearProgress, linearProgressClasses } from "@mui/material";
import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Becas = ({ content }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-2/3">
        <h2 className="text-2xl	font-medium	mb-5">{content.title}</h2>
        <p>{content.paragraph}</p>
      </div>
    </div>
  );
};

export default Becas;
