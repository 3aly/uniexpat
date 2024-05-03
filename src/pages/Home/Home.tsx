import { IMAGES } from "@assets/images";

export default function Home() {
  return (
    <div
      id="home"
      className="h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${IMAGES.home})` }}
    >
      <div className="bg-green-300 w-3/4 self-start gap-3">
        <h1 className="text-green-100 text-6xl	 font-bold">
          La Universidad en España te espera, hagámoslo juntos!
        </h1>
        <div className="text-green-100 	 text-2xl	font-normal	">
          Nuestro equipo y nuestra tecnología serán el aliado perfecto para que
          puedas cumplir tu sueño de estudiar en España.
        </div>
        <div className="flex bg-red-300">
          <button className="flex-1 bg-purple-200 text-white py-2 px-4 m-2">
            Necesitas nuestra ayuda!',
          </button>
          <button className="flex-1 bg-transparent border border-purple-200 text-purple-600 py-2 px-4 m-2">
            Explora más programas',
          </button>
        </div>
      </div>
    </div>
  );
}
