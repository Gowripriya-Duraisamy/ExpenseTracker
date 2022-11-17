import { FC, cloneElement } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll: FC<ElevationScrollProps> = ({ children, window }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
