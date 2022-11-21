/* eslint-disable @typescript-eslint/no-explicit-any */
import * as d3 from "d3";
import { EmployeeType } from "../../types";

const GraphDraw = (data: Array<EmployeeType>, chartWidth: number, chartHeight: number) => {
  d3.select(".vis-barchart > *").remove();
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = chartWidth - margin.left - margin.right;
  const height = chartHeight - margin.top - margin.bottom;
  const svg: any = d3
    .select(".vis-barchart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // format the data
  data.forEach(function (d: any) {
    d.age = +d.age;
  });

  // Scale the range of the data in the domains
  const x = d3.scaleBand().range([0, width]).padding(0.1);
  const y_data: any = [
    0,
    d3.max(data, function (d: any) {
      return d.age;
    }),
  ];
  const y = d3.scaleLinear().range([height, 0]);
  x.domain(
    data.map(function (d: any) {
      return d.full_name;
    }),
  );
  y.domain(y_data);

  // append the rectangles for the bar chart
  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("fill", function (d: any, i: number) {
      return `rgb(${60 + i}, 99, 130)`;
    })
    .attr("x", (d: any) => {
      return x(d.full_name);
    })
    .attr("width", x.bandwidth())
    .attr("y", function (d: any) {
      return y(d.age);
    })
    .attr("height", function (d: any) {
      return height - y(d.age);
    });

  // add the x Axis
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");

  // add the y Axis
  svg.append("g").call(d3.axisLeft(y));
};

export default GraphDraw;
