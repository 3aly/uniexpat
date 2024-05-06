import { IMAGES } from "@assets/images";
import { useResize } from "@hooks/useResize";

export default function AboutTwo() {
  const { isMobile } = useResize();
  const unis = [IMAGES.uni1, IMAGES.uni2, IMAGES.uni3, IMAGES.uni4];

  console.log("isMobile", isMobile);
  return (
    <div
      className={`flex  items-center tex-center justify-center  flex-col ${
        isMobile ? "" : " h-screen  mt-4 "
      } `}
    >
      <div
        className={`text-purple-200  	 font-bold	 text-center ${
          isMobile ? "my-5 text-md mx-1" : "w-5/6 mb-12 text-4xl	"
        }`}
      >
        Descubre más de 10.000 programas académicos en todas las universidades
        españolas:
      </div>
      <div className={`${isMobile ? "mx-2" : "mx-5"}`}>
        <img src={IMAGES.people} alt="Image" className="rounded-3xl " />
      </div>
      <div
        className={`flex   justify-between items-center  ${
          isMobile ? "flex-col" : " justify-between w-fit flex-row mt-12"
        }`}
      >
        {unis.map((image) => (
          <img
            src={image}
            alt="Image"
            className={` ${isMobile ? "my-5 w-3/4" : "h-fit mx-4"}`}
          />
        ))}
      </div>
    </div>
  );
}
