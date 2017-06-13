var mapFeatures;
d3.json("data/VNP14IMGTDL_NRT_Global_animated_48h.geojson",function(data) {
  mapFeatures=data.features;
  build_map()
});

function build_map() {
var width = 700,
    height = 580;

var svg = d3.select( "body" )
  .append( "svg" )
  .attr( "width", width )
  .attr( "height", height );

var fires = svg.append( "g" ).attr( "id", "fires" );

var albersProjection = d3.geoAlbers()
  .scale( 190000 )
  .rotate( [71.057,0] )
  .center( [0, 42.313] )
  .translate( [width/2,height/2] );

var geoPath = d3.geoPath()
    .projection( albersProjection );
console.log(mapFeatures.length);
fires.selectAll('path')
  .data(mapFeatures)
  .enter()
  .append('path')
  .attr('fill', '#ccc')
  .attr('d', geoPath);
}