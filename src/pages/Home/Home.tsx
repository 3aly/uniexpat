import { IMAGES } from "@assets/images";

export default function Home() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${IMAGES.home})`,
      }}
      className="flex flex-col  bg-no-repeat bg-cover h-screen"
    >
      <div className="flex flex-col    self-start">
        <div className="text-purple-200  text-6xl	 font-normal my-8">
          La Universidad en España te espera,
          <span className="text-purple-200  text-6xl	 font-bold">
            hagámoslo juntos!
          </span>
        </div>

        <div className=" text-black-100	 text-2xl	font-normal	">
          Nuestro equipo y nuestra tecnología serán el aliado perfecto para que
          puedas cumplir tu sueño de estudiar en España.
        </div>
        <div className="flex  py-2">
          <button className="flex-1 bg-purple-200 text-white py-2 px-4 me-2">
            Necesitas nuestra ayuda!',
          </button>
          <button className="flex-1 bg-transparent border border-purple-200 text-purple-600 py-2 px-4 ms-2">
            Explora más programas',
          </button>
        </div>
      </div>
    </div>
  );
}
