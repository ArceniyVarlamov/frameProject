import { useState, useEffect } from "react";

export default function useColor(hex: string | undefined ) {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (hex) {
      let r = parseInt(hex[1] + hex[2], 16);
      let g = parseInt(hex[3] + hex[4], 16);
      let b = parseInt(hex[5] + hex[6], 16);
      setColor(`rgba(${r}, ${g}, ${b}, 0.3)`);
    } else {
      setColor("white")
    }
  }, [hex]);
  return color;
}
