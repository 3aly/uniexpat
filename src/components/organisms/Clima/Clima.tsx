import { CustomCardList, Weather } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Clima = ({ city }) => {
  const { isMobile } = useResize();
  return (
    <div className="mx-2">
      <h2 className="text-xl font-medium">3-Day Weather Forecast in {city}</h2>

      <Weather city={city} />
    </div>
  );
};

export default Clima;
