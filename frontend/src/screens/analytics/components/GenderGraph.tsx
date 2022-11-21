import "./GenderGraph.less";
import { FC } from "react";
import PieChart from "../../../components/PieChart/ChartContainer";

type Props = {
  data: any;
};

const GenderGraph: FC<Props> = ({ data }) => {
  const width = 260;
  const height = 260;

  return (
    <div id="view2" className="genderGraphContainer">
      <div className="genderGraphHeader">Gender</div>
      <div className="positionCenter">
        <PieChart data={data} width={width} height={height} />
      </div>
    </div>
  );
};

export default GenderGraph;
