$(document).ready(function() {
$a=0
  $("h1").click(function() {
    $("#pedro").animate(
    	{width: "-=200px",
    	left: "+=300px",}, 1000)
    $("#pedro").animate(
    {width: "+=200px"}, 1000)
      $a=$a+1;
  	

  if ($a>1){
    $("#tiago").animate(
    	{width: "-=200px",
    	left: "+=300px",}, 1000)
    $("#tiago").show()
    $("#tiago").animate(
    {width: "+=200px"}, 1000)
  	};

  if ($a>2){
  	
    $("#mariana").animate(
    	{width: "-=200px",
    	left: "+=300px",}, 1000)
    $("#mariana").show()
    $("#mariana").animate(
    {width: "+=200px"}, 1000)
  	};

  	if ($a>3){
    $("#pedrod").animate(
    	{width: "-=200px",
    	left: "+=300px",}, 1000)
    $("#pedrod").show()
    $("#pedrod").animate(
    {width: "+=200px"}, 1000)
  	};

  });



  $("h3").click(function() {
  	$("#pedro").animate(
  		{left: "0"}, 2000)
  	$("#tiago").animate(
  		{left: "0"}, 2000)
  	$("#tiago").hide()
  	$("#mariana").animate(
  		{left: "0"}, 2000)
  	$("#mariana").hide()
  	$("#pedrod").animate(
  		{left: "0"}, 2000)
  	$("#pedrod").hide()
  	$a=0
  });
});