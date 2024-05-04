import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, Tabs } from "@components/molecules";
import { getServices } from "@utils/getServices";
import { useState } from "react";

export default function Services() {
  const content = getServices();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-screen  my-12 flex items-center justify-center  flex-col">
      <div className="text-purple-200  text-5xl		w-5/6 font-normal text-center ">
        ¡Descubre cómo podemos ayudarte en esta emocionante etapa de tu vida!'
      </div>
      <Tabs
        {...{ activeTab, setActiveTab }}
        tabNames={["Asesoría Personaizada", "Planeador personalizado"]}
      />
      <div className=" my-5  p-8 rounded-2xl shadow-2xl  flex flex-col w-4/6 items-center justify-center ">
        <ContentContainer {...{ ...content[activeTab] }} />
      </div>
    </div>
  );
}
