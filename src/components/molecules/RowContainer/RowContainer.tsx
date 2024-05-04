const RowContainer = ({
  content,
}: {
  content: Array<{ image: string; title: string }>;
}) => {
  return (
    <div className="flex flex-row m-8 justify-between">
      {content.map((item) => (
        <div className=" h-auto  flex flex-col justify-center mx-8 ">
          <img src={item.image} alt="Image" className="rounded-3xl " />
          <p className="text-xl	text-center mt-5 font-medium	">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RowContainer;
