import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, Tabs } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { getServices } from "@utils/getServices";
import { useState } from "react";

export default function ServicesPage() {
  const content = getServices();
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useResize();

  return (
    <div
      className={`  flex items-center  justify-center  flex-col ${
        isMobile ? "my-5" : "h-screen my-12"
      }`}
    >
      <Tabs
        {...{ activeTab, setActiveTab }}
        tabNames={["Asesoría Personaizada", "Planeador personalizado"]}
      />
      <div
        className={`  rounded-2xl shadow-2xl  flex flex-col items-center justify-center ${
          isMobile ? "p-4 mx-2 my-2" : "my-5  p-8 w-4/6 "
        } `}
      >
        <ContentContainer {...{ ...content[activeTab] }} />
      </div>
    </div>
  );
}
