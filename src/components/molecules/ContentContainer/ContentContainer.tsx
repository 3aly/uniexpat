import CheckboxIcon from "@assets/checkboxIcon";

const ContentContainer = ({
  image,
  title,
  text,
  checkboxData,
  button,
  swiped = false,
}) => {
  return (
    <div
      className={`m-5 bg-green-500 justify-around flex ${
        swiped ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* First Section: Image */}
      <div className="">
        <img src={image} alt="Image" className=" rounded-3xl" />
      </div>

      {/* Second Section: Text and Checkbox */}
      <div className={`bg-green-200 w-1/2 `}>
        <div>
          <h3 className={"text-3xl	font-bold	"}>{title}</h3>
          <p className={`text-grey-200 text-base`}>{text}</p>
          {checkboxData?.map((item, index) => (
            <div key={index} className="flex items-center ">
              <CheckboxIcon />
              <label
                className="text-grey-200 text-base"
                htmlFor={`checkbox-${index}`}
              >
                {item}
              </label>
            </div>
          ))}
        </div>
        <button
          onClick={() => {}}
          className="bg-purple-200 text-white px-12 rounded-full"
        >
          {button}
        </button>
      </div>

      {/* Button to toggle swipe */}
    </div>
  );
};

export default ContentContainer;
