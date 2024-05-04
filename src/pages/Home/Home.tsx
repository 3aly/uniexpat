import { IMAGES } from "@assets/images";

export default function Home() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${IMAGES.home})`,
      }}
      className="flex flex-col bg-no-repeat bg-cover h-screen justify-center"
    >
      <div className="md:ms-10 md:mb-12 w-full md:w-2/3 self-start">
        <div className="text-purple-200 md:text-6xl text-4xl font-normal my-8">
          La Universidad en España te espera,
          <span className="text-purple-200 md:text-6xl text-4xl font-bold">
            hagámoslo juntos!
          </span>
        </div>

        <div className="text-black-100 md:mb-5 text-lg md:text-2xl font-normal">
          Nuestro equipo y nuestra tecnología serán el aliado perfecto para que
          puedas cumplir tu sueño de estudiar en España.
        </div>
        <div className="flex py-2">
          <button className="flex-1 bg-purple-200 text-white py-2 px-4 md:me-2 md:mb-0 mb-2">
            Necesitas nuestra ayuda!
          </button>
          <button className="flex-1 bg-transparent border border-purple-200 text-purple-600 py-2 px-4 md:ms-2 md:mb-0 mb-2">
            Explora más programas
          </button>
        </div>
      </div>
    </div>
  );
}
