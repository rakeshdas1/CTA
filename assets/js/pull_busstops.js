$.getJSON('http://data.cityofchicago.org/resource/jyb9-n7fm.json', function(bstops){
	$('#bstoplist').empty();

	$.each(bstops, function(i, bstop){
		$('#bstoplist').append(generateBStopLink(bstop));

	}),
	function (data){
		console.log(data)
	};
	$('#bstoplist').listview('refresh');

});

function generateLStopLink(Bstop){
	return '<li><a href="javascript:void(0)'
			+'"onclick="gotoStopDetailPage(\''
			+bstop.route
			+'\',\''
			+bstop.rides+'\')">'
			+bstop.route
			+'</a></li>';
}
function goToStopDetailPage (stopName){

  var stopPage = $("<div data-role='page' data-url=station><div data-role='header'><h1>"
                  + stopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>" 
                  + stopName + "</h4></div></div>");	
  stopPage.appendTo( $.mobile.pageContainer );

  $.mobile.changePage( stopPage );
}