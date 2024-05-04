import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, RowContainer, Tabs } from "@components/molecules";
import { getAboutUs } from "@utils/getAboutUs";
import { getFreeServices } from "@utils/getFreeServices";
import { useState } from "react";

export default function AboutOne() {
  const content = getAboutUs();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="h-screen  flex items-center my-12 tex-center justify-center  flex-col">
      <div className="text-purple-200  text-4xl		 font-bold	mx-3 mb-12 text-center ">
        Entendemos lo desafiante que puede ser este proceso! Por eso, hemos
        creado una web llena de geniales beneficios para ti
      </div>
      <RowContainer content={content} />
    </div>
  );
}
