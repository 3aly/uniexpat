import { IMAGES } from "@assets/images";
import { EmailInputWithIcon } from "@components/molecules";
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
        className={`gap-y-6 my-12 flex flex-col justify-between text-start ${
          isMobile ? "  w-full" : "p-5 h-1/2 mb-12 w-2/3"
        }`}
      >
        <div>
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
        </div>
        <div>
          <EmailInputWithIcon />
          <p className="text-white text-sm mt-2">
            By signing up for a free consultincy with your email, you accept to
            receive marketing newsletters.
          </p>
        </div>
      </div>
    </div>
  );
}
