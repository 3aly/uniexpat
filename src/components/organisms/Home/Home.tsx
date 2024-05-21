import { IMAGES } from "@assets/images";
import { useResize } from "@hooks/useResize";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
export default function Home() {
  const { isMobile } = useResize();

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${IMAGES.home})`,
      }}
      className={` flex  flex-col bg-no-repeat bg-cover  ${
        isMobile ? "px-3" : "h-screen justify-center"
      }`}
    >
      <div
        className={`  self-start ${
          isMobile ? "mt-12  w-full" : "p-5 mb-12 w-2/3"
        }`}
      >
        <div
          className={`text-purple-200  font-normal  ${
            isMobile ? "text-2xl my-6" : "text-4xl my-8"
          }`}
        >
          La Universidad en España te espera,
          <span
            className={`text-purple-200 font-bold ${
              isMobile ? "text-2xl" : " text-4xl "
            }`}
          >
            hagámoslo juntos!
          </span>
        </div>

        <div
          className={`text-black-100  font-normal ${isMobile ? "" : "text-lg"}`}
        >
          Nuestro equipo y nuestra tecnología serán el aliado perfecto para que
          puedas cumplir tu sueño de estudiar en España.
        </div>
        <div className={`flex py-2 gap-2 ${isMobile ? "flex-col" : ""} `}>
          <Button
            sx={{
              borderRadius: 0,
              backgroundColor: "#371373",
              py: 1,
              "&:hover": {
                backgroundColor: "#8454d1", // Set the hover background color
              },
            }}
            variant="contained"
            className="flex-1 bg-purple-200 text-white py-2 px-4 md:me-2 md:mb-0 mb-2"
          >
            Necesitas nuestra ayuda!
          </Button>
          <Button
            sx={{
              borderRadius: 0,
              backgroundColor: "#ef44440",
              borderColor: "#4c3b4d",
              py: 1,

              color: isMobile ? "white" : "#4c3b4d",
              "&:hover": {
                borderColor: "#614763", // Set the hover background color
              },
            }}
            className={`flex-1 bg-transparent border border-purple-200 text-purple-600  px-4 md:ms-2 md:mb-0 mb-2 ${
              isMobile ? "" : ""
            }`}
            variant="outlined"
          >
            <NavLink to={"/programs"}>Explora más programas</NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
