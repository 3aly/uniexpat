import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, Tabs } from "@components/molecules";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const image = "https://via.placeholder.com/400"; // Replace with your image URL
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum urna sit amet libero convallis commodo.";
  const checkboxData = ["Option 1", "Option 2", "Option 3"];
  const button = "Explora más programas";

  return (
    <div
      id="services"
      className="h-screen  flex items-center justify-center  flex-col"
    >
      <div className="text-purple-200  text-5xl		w-3/4 font-normal ">
        ¡Descubre cómo podemos ayudarte en esta emocionante etapa de tu vida!'
      </div>
      <Tabs
        {...{ activeTab, setActiveTab }}
        tabNames={[
          "Información Académica",
          "Información Legal",
          "Acceso Comunidad",
          "Contenido Gratuito",
        ]}
      />
      <div className="    rounded-2xl shadow-2xl p-12">
        <ContentContainer
          title={"Información Académica"}
          image={IMAGES.academic}
          text={text}
          checkboxData={checkboxData}
          button={button}
        />
        {/* <div className="flex self-start relative top-12">
          <SmallLogo />
        </div> */}
      </div>
    </div>
  );
}
