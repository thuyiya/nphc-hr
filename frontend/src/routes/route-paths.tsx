import { PictureOutlined, BarChartOutlined } from "@ant-design/icons";

const DASHBOARD_ROUTES = [
  {
    key: "/dashboard",
    to: "/",
    icon: <PictureOutlined />,
    label: `Dashboard`,
  },
  {
    key: "/analytics",
    to: "/analytics",
    icon: <BarChartOutlined />,
    label: `Analytics`,
  },
];

export { DASHBOARD_ROUTES };
