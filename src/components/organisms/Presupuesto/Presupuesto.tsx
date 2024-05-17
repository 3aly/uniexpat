import { CustomCardList } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { createLinks } from "@utils/createLinks";
import { parseListItems } from "@utils/parseListItems";
import { renderListItems } from "@utils/renderListItems";

const Presupuesto = ({ content }) => {
  const { isMobile } = useResize();
  return (
    <div className="mx-2">
      <h2 className="text-xl		font-medium	mb-5">
        Calcula tu presupuesto estimado
      </h2>
      <h2 className="text-xl		font-medium	mb-5">
        Los costos promedios más importantes para que tengas en cuenta cuanto
        presupuesto al mes vas a necesitar en Barcelona son:
      </h2>
      <div className={`flex  gap-8 my-8 ${isMobile ? "flex-col" : "flex-row"}`}>
        {content.map((table, index) => {
          return <CustomCardList key={index} table={table} />;
        })}
      </div>
    </div>
  );
};

export default Presupuesto;
