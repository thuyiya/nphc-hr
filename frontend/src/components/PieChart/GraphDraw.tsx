import * as d3 from 'd3';

const GraphDraw = (props: any) => {
    const data = props.data;
    const gender = ['Male', 'Female', 'Unknown'];
    const count = new Array(3).fill(0);
    data.forEach((d: any) => {
        const genderIndex = gender.indexOf(d.gender);
        if (genderIndex + 1)
            count[genderIndex] += 1;
    });

    const dataset: any = [
        { label: 'Male', count: count[0] },
        { label: 'Female', count: count[1] },
        { label: 'Unknown', count: count[2] }
    ]

    d3.select('.vis-piechart > *').remove();
    const margin = { top: 10, right: 20, bottom: 30, left: 40 };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    const svg: any = d3.select('.vis-piechart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal()
        .range(['#38ada9', '#78e08f', '#b8e994']);

    const arc: any = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    const pie = d3.pie()
        .value(function (d: any) { return d.count; })
        .sort(null);

    svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d: any) => {
            return color(d.data.label);
        });
    const legendG = svg.selectAll(".legend")
        .data(pie(dataset))
        .enter().append("g")
        .attr("transform", function (d: any, i: number) {
            return "translate(" + (i * 70 - 100) + "," + 110 + ")"; 
        })
        .attr("class", "legend");

    legendG.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", function (d: any, i: string) {
            return color(i);
        });

    legendG.append("text") 
        .text(function (d: any) {
            return d.data.label;
        })
        .style("font-size", 12)
        .attr("y", 10)
        .attr("x", 11);
}

export default GraphDraw;