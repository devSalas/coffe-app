import { IconSvgProps } from "@/lib/definitions";
import { ReactElement } from "react";

function MenuIcon({
  width = "24",
  height = "24",
  viewBox = "0 0 24 24",
  style = { fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: "" },
}: IconSvgProps): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      style={style}
    >
      <path d="M4 19h16v2H4zm0-4h11v2H4zm0-4h16v2H4zm0-8h16v2H4zm0 4h11v2H4z"></path>
    </svg>
  );
}

export default MenuIcon;
