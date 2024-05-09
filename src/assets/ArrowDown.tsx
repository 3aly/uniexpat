const ArrowDown = ({
  color = "#1D1D1D",
  height = 11,
  width = 16,
  svgClass,
}) => {
  return (
    <svg
      className={svgClass}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 11"
      fill="none"
    >
      <path
        d="M16 2.21094L8 10.2109L-3.49691e-07 2.21094L1.42 0.790937L8 7.37094L14.58 0.790937L16 2.21094Z"
        fill={color}
      />
    </svg>
  );
};
export default ArrowDown;
