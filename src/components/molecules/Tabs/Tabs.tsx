const Tabs = ({ tabNames, activeTab, setActiveTab }) => {
  return (
    <div className=" rounded-xl	px-8 py-4 bg-grey-100 shadow-xl">
      <div className="flex text-slate-900	">
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
