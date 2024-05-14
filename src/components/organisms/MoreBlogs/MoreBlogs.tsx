import { IMAGES } from "@assets/images";
import SmallLogo from "@assets/smallLogo";
import { ContentContainer, RowContainer, Tabs } from "@components/molecules";
import { useResize } from "@hooks/useResize";
import { getAboutUs } from "@utils/getAboutUs";
import { getBlogsCovers } from "@utils/getBlogsCovers";
import { getFreeServices } from "@utils/getFreeServices";
import { useState } from "react";
import BlogsContainer from "../BlogsContainer/BlogsContainer";

export default function MoreBlogs() {
  // const content = getAboutUs();
  const [activeTab, setActiveTab] = useState(0);
  const { isMobile } = useResize();
  const content = getBlogsCovers();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">More Blogs</h2>
      <div className="space-y-4">{<BlogsContainer content={content} />}</div>
    </div>
  );
}
