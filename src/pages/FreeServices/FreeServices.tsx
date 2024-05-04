import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, Tabs } from "@components/molecules";
import { getFreeServices } from "@utils/getFreeServices";
import { useState } from "react";

export default function FreeServices() {
  const content = getFreeServices();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      id="services"
      className="h-screen bg-blue-200 flex items-center justify-center  flex-col"
    >
      <div className="text-purple-200  text-5xl		w-5/6 font-normal text-center ">
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
      <div className=" my-5  p-8 rounded-2xl shadow-2xl  flex flex-col w-4/6 items-center justify-center ">
        <ContentContainer {...{ ...content[activeTab] }} />
      </div>
    </div>
  );
}
