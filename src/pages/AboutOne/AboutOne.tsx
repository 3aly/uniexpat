import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, RowContainer, Tabs } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { getAboutUs } from "@utils/getAboutUs";
import { getFreeServices } from "@utils/getFreeServices";
import { useState } from "react";

export default function AboutOne() {
  const content = getAboutUs();
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useResize();

  return (
    <div
      className={`flex  items-center tex-center justify-center  flex-col ${
        isMobile ? "" : " h-screen  "
      } `}
    >
      <div
        className={`text-purple-200  	 font-bold	 text-center ${
          isMobile ? "text-md mx-1 mb-2" : " mx-3 mb-12 text-4xl	"
        }`}
      >
        Entendemos lo desafiante que puede ser este proceso! Por eso, hemos
        creado una web llena de geniales beneficios para ti
      </div>
      <RowContainer content={content} />
    </div>
  );
}
