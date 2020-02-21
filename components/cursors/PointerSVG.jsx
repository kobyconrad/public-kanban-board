/**
 * Usage:
 * <PointerSVG x={0} y={50} />
 *
 * OR:
 *
 * <PointerSVG x={0} y={50} fill={"#EA2027"} />
 */
const PointerSVG = props => {
  const fill = props.fill || "#303952";
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 28 28"
      enable-background="new 0 0 28 28"
      width={32}
      style={{
        position: "absolute",
        transition: "transform 0.15s ease-out, opacity 0.15s",
        transform: `translate(${props.x}px, ${props.y}px)`
      }}
    >
      <polygon
        fill="#FFFFFF"
        points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
      />
      <polygon fill="#FFFFFF" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 " />
      <rect
        x="12.5"
        y="13.6"
        transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
        width="2"
        height="8"
        fill={fill}
      />
      <polygon
        points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "
        fill={fill}
      />
    </svg>
  );
};

export default PointerSVG;
