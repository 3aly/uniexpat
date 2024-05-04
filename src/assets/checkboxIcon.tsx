import React from "react";

const CheckboxIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width="30"
      height="30"
      fill="none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="40"
        width="40"
        viewBox="0 0 24 24"
        fill="#371373"
        x="0"
        y="0"
        opacity="100%"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </svg>
      <defs>
        <filter
          id="filter_dshadow_10_0_2_0000001a"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="bg-fix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="alpha"
          ></feColorMatrix>
          <feOffset dx="0" dy="2"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feComposite in2="alpha" operator="out"></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          ></feColorMatrix>
          <feBlend
            mode="normal"
            in2="bg-fix"
            result="bg-fix-filter_dshadow_10_0_2_0000001a"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="bg-fix-filter_dshadow_10_0_2_0000001a"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default CheckboxIcon;
