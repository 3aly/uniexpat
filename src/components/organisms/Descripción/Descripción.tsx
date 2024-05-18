import { LinearProgress, linearProgressClasses } from "@mui/material";
import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Descripción = ({ content }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-2/3">
        <h2 className="text-2xl	font-medium	mb-5">{content.title}</h2>
        <p>{content.paragraph}</p>
      </div>

      <div className="flex flex-col w-1/3">
        <h1 className="text-2xl	text-purple-200	">{content?.rating}</h1>
        <div className="flex flex-col gap-4">
          {content?.ratings.map((rate) => (
            <div>
              <div className="flex flex-row justify-between">
                <p className="text-xs	 ">{rate.name}</p>
                <p className="text-xs text-grey-200">{rate.value}/10</p>
              </div>
              <LinearProgress
                value={rate.value * 10}
                variant="determinate"
                color="secondary"
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "#ededed", // Set the background color to "#371373"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Descripción;
