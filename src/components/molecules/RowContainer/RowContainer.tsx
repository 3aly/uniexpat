import { useResize } from "@hooks/useResize";
const RowContainer = ({
  content,
}: {
  content: Array<{ image: string; title: string }>;
}) => {
  const { isMobile } = useResize();

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col m-2 g-y-5" : " flex-row m-8 justify-between"
      }`}
    >
      {content.map((item) => (
        <div
          className={`   flex flex-col justify-center  items-center ${
            isMobile ? "" : "mx-8"
          } `}
        >
          <img
            src={item.image}
            alt="Image"
            className={`rounded-3xl ${isMobile ? "w-3/4" : ""} `}
          />
          <p
            className={`	text-center font-medium ${
              isMobile ? "text-sm mt-2" : "mt-5  text-xl"
            }	`}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RowContainer;
