import { useResize } from "@hooks/useResize";
const Tabs = ({ tabNames, activeTab, setActiveTab }) => {
  const { isMobile } = useResize();

  return (
    <div className=" rounded-xl	my-5 px-6 py-3 bg-grey-100 shadow-xl">
      <div className={`flex   text-slate-900	${isMobile ? "flex-col" : ""}`}>
        {tabNames.map((tabName, index) => (
          <button
            key={index}
            className={`py-2 mx-4	px-7	  ${
              activeTab === index
                ? "border-b-2 border-blue-700 text-purple-300"
                : "border-b-2 border-transparent"
            } transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab(index)}
          >
            {tabName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
