import CheckboxIcon from "@assets/checkboxIcon";
import SmallLogo from "@assets/smallLogo";

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
  return (
    <div
      className={`  justify-between items-between  flex ${
        swiped ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* First Section: Image */}
      <div className={`flex w-fit ${swiped ? "me-5" : "ms-5"}`}>
        <img src={image} alt="Image" className="rounded-3xl " />
      </div>
      {/* Second Section: Text and Checkbox */}
      <div className={`flex flex-col  justify-between w-3/4 `}>
        <div className={`flex flex-col justify-between   h-5/6`}>
          <h3 className={"text-3xl	font-bold	"}>{title}</h3>
          <p className={`text-grey-200 text-base`}>{paragraph}</p>
          {checkboxData?.map((item, index) => (
            <div key={index} className="flex items-start flex-row ">
              <div>
                <CheckboxIcon />
              </div>
              <p className="text-grey-200 text-base ms-1">{item}</p>
            </div>
          ))}
          {price && (
            <div className="flex flex-row gx-2">
              <p className="text-grey-200 text-base">{price.label}</p>
              <p className="text-grey-200 text-base ms-1 line-through text-green-100">
                {price.number}
              </p>
              <p>Free</p>
            </div>
          )}
        </div>

        <button
          // onClick={}
          className="bg-purple-200 py-2 text-white  rounded-full"
        >
          {button}
        </button>
      </div>

      {/* Button to toggle swipe */}
    </div>
  );
};

export default ContentContainer;
