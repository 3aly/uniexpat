import CheckboxIcon from "@assets/checkboxIcon";
import SmallLogo from "@assets/smallLogo";
import { useMobile } from "@hooks/index";

const ContentContainer = ({
  image,
  title,
  paragraph,
  checkboxData,
  button,
  swiped = false,
  price,
}: {
  image: string;
  title: string;
  paragraph: string;
  checkboxData: Array<string>;
  button: string;
  swiped: boolean;
  price?: { label: string; number: string };
  // onclick: () => void;
}) => {
  const isMobile = useMobile();

  return (
    <div
      className={`  justify-between items-between  flex ${
        isMobile ? "flex-col" : swiped ? "flex-row" : "flex-row-reverse"
      } `}
    >
      {/* First Section: Image */}
      <div className={`flex w-fit ${isMobile ? "" : swiped ? "me-5" : "ms-5"}`}>
        <img src={image} alt="Image" className="rounded-3xl " />
      </div>
      {/* Second Section: Text and Checkbox */}
      <div
        className={`flex flex-col   ${
          isMobile ? "" : "justify-between w-2/4 "
        } `}
      >
        <div
          className={`flex flex-col justify-between  ${
            isMobile ? "" : "h-5/6"
          }  `}
        >
          <h3
            className={` 	font-bold ${
              isMobile ? "text-md my-2" : "text-3xl mb-2"
            }  	`}
          >
            {title}
          </h3>
          <p
            className={`text-grey-200   ${isMobile ? "text-sm" : "text-base"}`}
          >
            {paragraph}
          </p>
          {checkboxData?.map((item, index) => (
            <div key={index} className="flex my-2 items-start flex-row ">
              <div>
                <CheckboxIcon />
              </div>
              <p
                className={`text-grey-200   ${
                  isMobile ? "text-sm" : "text-base ms-1"
                }`}
              >
                {item}
              </p>
            </div>
          ))}
          {price && (
            <div className={`flex flex-row my-2 justify-between`}>
              <p
                className={`text-grey-200  ${
                  isMobile ? "text-sm" : "text-base"
                }`}
              >
                {price.label}
              </p>
              <div className="flex flex-row">
                <p
                  className={`  line-through  text-green-100 ${
                    isMobile ? "text-sm " : "text-base ms-1 "
                  }`}
                >
                  {price.number}
                </p>
                <p className="ms-1">Free</p>
              </div>
            </div>
          )}
        </div>

        <button
          // onClick={}
          className="bg-purple-200 py-2 mt-3 text-white  rounded-full"
        >
          {button}
        </button>
      </div>

      {/* Button to toggle swipe */}
    </div>
  );
};

export default ContentContainer;
