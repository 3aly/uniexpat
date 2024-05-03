const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-2 mx-4	px-7	  ${
        isActive
          ? "border-b-2 border-blue-700 text-purple-300"
          : "border-b-2 border-transparent"
      } transition-all duration-300 ease-in-out`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tab;
