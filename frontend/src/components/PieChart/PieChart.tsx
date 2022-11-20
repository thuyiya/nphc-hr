import { useEffect } from "react";
import draw from "./vis";

const PieChart = (props: any) => {
  useEffect(() => {
    draw(props);
  }, []);

  return <div className="vis-piechart" />;
};

export default PieChart;
