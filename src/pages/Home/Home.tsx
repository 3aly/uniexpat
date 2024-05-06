import { IMAGES } from "@assets/images";
import { useMobile } from "@hooks/index";

export default function Home() {
  const isMobile = useMobile();

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
        <div className={`flex py-2 ${isMobile ? "flex-col" : ""} `}>
          <button className="flex-1 bg-purple-200 text-white py-2 px-4 md:me-2 md:mb-0 mb-2">
            Necesitas nuestra ayuda!
          </button>
          <button
            className={`flex-1 bg-transparent border border-purple-200 text-purple-600 py-2 px-4 md:ms-2 md:mb-0 mb-2 ${
              isMobile ? "" : ""
            }`}
          >
            Explora más programas
          </button>
        </div>
      </div>
    </div>
  );
}
