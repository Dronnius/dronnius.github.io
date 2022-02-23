//graph.js


//D3 CODE HERE


d3.select("#graph").select("p").style("color", "green").append("p").text("more text");
//is shorthand for:
//var gra = d3.select("#graph");
//var par = gra.select("p");
//par.style("color", "green");
//var extra = par.append("p");
//extra.text("more text");

d3.selectAll("div").on("mouseover", function(){		//event
	var pos = [0,0];//d3.pointer(d3.event);					//this doesn't work though
	var x = pos.x % 255;
	var y = pos.y % 255;
	var z = (x + y) % 255;
	var colour = "rgb(" + x + ", " + y + ", " + z + ")";
	//console.log(pos);
	//console.log(pos.x);
	//console.log(pos.y);
	//console.log(colour);
	d3.select(this).select("h4").style("color", colour)
})

var playerData = d3.csv("../data/GameVsMonthData.csv", function(data)
{
	for(var i = 0; i < data.length; i++)
	{
		console.log(data[i]);
	}
});