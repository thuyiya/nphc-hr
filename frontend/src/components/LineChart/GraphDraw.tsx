import * as d3 from 'd3';
import _ from 'lodash';

const GraphDraw = (props: any) => {
    let data = [];
    if (props.data !== null) {
        data = _.cloneDeep(props.data.activities);
    }

    d3.select('.vis-linechart > *').remove();
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    const svg = d3.select(".vis-linechart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    data.forEach(function (d: any) {
        d.date = d3.timeParse("%Y-%m-%d")(d.date);
        d.count = +d.count;
    });
    
    // Add X axis --> it is a date format
    const x_data: any = d3.extent(data, function (d: any) { return d.date; })
    const x = d3.scaleTime()
        .domain(x_data)
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    const y_data: any = [0, d3.max(data, function (d: any) { return +d.count; })]
    const y = d3.scaleLinear()
        .domain(y_data)
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d: any) { return x(d.date) })
            .y(function (d: any) { return y(d.count) })
        )
}

export default GraphDraw;