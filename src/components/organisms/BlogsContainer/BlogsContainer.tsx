import { useResize } from "@hooks/useResize";

const BlogsContainer = ({
  content,
}: {
  content: Array<{
    image: string;
    title: string;
    author: string;
    category: string;
    description: string;
  }>;
}) => {
  const { isMobile } = useResize();

  return (
    <div
      className={`flex text-start   ${
        isMobile
          ? "flex-col m-2 gap-y-6 items-center"
          : " flex-row m-8 justify-between"
      }`}
    >
      {content.map((item) => (
        <div
          className={`rounded-lg	 shadow-2xl  p-4  text-start  flex flex-col justify-center  items-start ${
            isMobile ? "items-center  m-2" : "mx-8"
          } `}
        >
          <div className="flex  flex-col relative">
            <div className="text-xs	 absolute m-3 px-3 py-2 rounded-full bg-orange-100 flex text-orange-200">
              <p>{item.category} </p>
            </div>
            <img
              src={item.image}
              alt="Image"
              className={`rounded-3xl ${isMobile ? "w-full" : ""} `}
            />
          </div>
          <div className="flex gap-2 flex-col mx-2 mt-2 text-grey-300">
            <h3>{item.author}</h3>
            <h2
              className={`text-2xl	font-bold	${
                isMobile ? "text-lg	 " : "mt-5  text-2xl"
              }	`}
            >
              {item.title}
            </h2>

            <p
              className={`	 font-medium ${
                isMobile ? "text-sm	 mt-2" : "mt-5  text-xl"
              }	`}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsContainer;
