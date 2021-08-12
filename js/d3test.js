let root = d3.select("#gitvizual")
    .append("svg")
    .attr("width", 3000)
    .attr("height", 3000); 
    

let size = 10

for(let i=1; i<=size; i++){
    console.log(i)
    root.append("circle")
    .attr("r", 5)
    .attr("cx", 20*i*2)
    .attr("cy", 250)
    .style("fill", "red")

    root.append('line')
    .style("stroke", "rgb(6,120,155)")
    .attr('x1',20*i*2)
    .attr('y1',250)
    .attr('x2',20*i*4)
    .attr('y2',250)
}

console.log('meow!')



// sampleSVG.append("circle")
//     .style("stroke", "gray")
//     .style("fill", "white")
//     .attr("r", 40)
//     .attr("cx", 50)
//     .attr("cy", 50)
//     .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
//     .on("mouseout", function(){d3.select(this).style("fill", "white");})
//     .on("mousedown", animateFirstStep);
