import { useEffect } from "react";
import draw from "./GraphDraw";

const ChartContainer = (props: any) => {
  useEffect(() => {
    draw(props);
  }, [props.data]);

  return <div className="vis-linechart" />;
};

export default ChartContainer;