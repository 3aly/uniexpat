import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, Tabs } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { getFreeServices } from "@utils/getFreeServices";
import { useState } from "react";
import BlogsBrief from "../BlogsBrief/BlogsBrief";
import BlogsContainer from "../BlogsContainer/BlogsContainer";
import { getBlogsCovers } from "@utils/getBlogsCovers";
import { CountriesContainer } from "..";
import { getCountries } from "@utils/getCountries";

export default function FreeServices() {
  const content = getFreeServices();
  const blogs = getBlogsCovers();
  const countries = getCountries();
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useResize();

  return (
    <div
      className={`  flex items-center  justify-center  flex-col ${
        isMobile ? "my-5" : "h-screen my-12"
      }`}
    >
      <div
        className={`text-purple-200   font-normal text-center ${
          isMobile ? "text-lg" : "text-5xl		w-5/6"
        } `}
      >
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
      <div
        className={`  rounded-2xl shadow-2xl  flex flex-col items-center justify-center ${
          isMobile ? "p-4 mx-2 my-2" : "my-5  p-8 w-4/6 "
        } `}
      >
        {activeTab === 2 ? (
          <>
            <BlogsContainer content={blogs} />
          </>
        ) : activeTab === 3 ? (
          <>
            <CountriesContainer content={countries} />
          </>
        ) : (
          <>
            <ContentContainer {...{ ...content[activeTab] }} />
          </>
        )}
      </div>
    </div>
  );
}
