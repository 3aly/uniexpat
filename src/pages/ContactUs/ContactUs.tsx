import { IMAGES } from "@assets/images";
import { useResize } from "@hooks/useResize";
export default function ContactUs() {
  const { isMobile } = useResize();

  return (
    <div
      id="contact"
      style={{
        backgroundImage: `url(${IMAGES.contactBg})`,
      }}
      className={` flex text-center items-center flex-col bg-no-repeat bg-cover  ${
        isMobile ? "px-3" : "h-screen justify-center"
      }`}
    >
      <div
        className={` text-start ${isMobile ? "  w-full" : "p-5 mb-12 w-2/3"}`}
      >
        <div
          className={`text-grey-400  font-normal  ${
            isMobile ? "text-lg my-1" : "text-4xl my-2"
          }`}
        >
          Desbloquea tu primera consulta sin costo!
        </div>

        <div
          className={`text-purple-400  font-normal ${
            isMobile ? "text-sm" : "text-lg"
          }`}
        >
          ¡Descubre tu camino para estudiar en España!
        </div>
        <div className={`flex py-2 ${isMobile ? "flex-col" : ""} `}>
          <input></input>
          <button></button>
        </div>
      </div>
    </div>
  );
}
