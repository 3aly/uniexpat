import { IMAGES } from "@assets/images";
import { BlogsContainer } from "@components/organisms";
import { useResize } from "@hooks/useResize";
import { getBlogsCovers } from "@utils/getBlogsCovers";

export default function BlogsBrief() {
  const { isMobile } = useResize();
  const content = getBlogsCovers();

  return (
    <div
      className={`flex  items-center tex-center justify-center  flex-col ${
        isMobile ? "" : " h-fit mx-8  mt-12 "
      } `}
    >
      <div
        className={`text-purple-200   	 font-bold	 text-center ${
          isMobile ? "my-5 text-md mx-1" : "w-5/6 mb-12 text-4xl	"
        }`}
      >
        Encuentra información útil para hacer realidad tu sueño:
      </div>
      <BlogsContainer content={content} />
    </div>
  );
}
