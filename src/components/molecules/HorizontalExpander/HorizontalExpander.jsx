import { ArrowDown, ArrowUp } from "@assets/index";
import { useResize } from "@hooks/useResize";
import React, { useState, useRef, useEffect } from "react";

const HorizontalExpander = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();
  const [maxHeight, setMaxHeight] = useState("0px");
  const { isMobile } = useResize();

  const toggleExpander = () => {
    setIsOpen(!isOpen);
    setMaxHeight(isOpen ? "0px" : `${contentRef?.current?.scrollHeight}px`);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef?.current?.scrollHeight}px`);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        setMaxHeight(`${contentRef?.current?.scrollHeight}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div className=" w-full">
      <div
        onClick={toggleExpander}
        className="flex flex-row justify-between items-center my-2 "
      >
        <div className="flex gap-2 items-center ">
          <h3
            className={`text-black-200 font-bold	`}
            style={{ fontSize: isMobile ? "0.7rem" : "0.9rem" }}
          >
            {title}
          </h3>
        </div>
        {/* <button onClick={toggleExpander} className="outline-none focus:outline-none"> */}
        {isOpen ? <ArrowUp /> : <ArrowDown />}
        {/* </button> */}
      </div>
      <div
        className="flex flex-col gap-y-2"
        ref={contentRef}
        style={{
          maxHeight,
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default HorizontalExpander;
