var data = [
{
	"title": "Gulfnews",
	"name" :"Adnoc's new headquarters",
	"time": "8:35 AM",
	"description": "Lorem ipsum feugiat etiam ridiculus orci justo aenean pellentesque aliquam.Ligula sapien sodales venenatis "
},
{
	"title": "Filan Fisteku",
	"name": "Subject of e-mail",
	"time": "8:35 AM",
	"description": "Lorem ipsum vitae primis etiam felis condimentum, sociis suspendisse dignissim litora sollicitudin?Sollicitudin "
},
{
	"title": "Filan Fisteku",
	"name": "Subject of e-mail",
	"time": "7:23 AM",
	"description": "Lorem ipsum conubia dolor facilisi curae; hac interdum tempor at erat habitant ornare?Bibendum donec maecenas mus "
}
]

function fetch () {
	var title = document.getElementById("title");
	for (var i = 0; i < data.length; i++) {
		console.log(data[i])
		title.innerHTML += '<li> <a style="color: #1E90FF;">'+
		                   data[i]['title']+
		                   "</a>"+
		                   "<dl style='font-size= 9px;'>"
		                   + "<i class='fa fa-caret-right' aria-hidden='true'></i>"+
		                   data[i]['name']+
		                   "<span style='margin-left: 20px; font-size: 10px;'>"+
		                    data[i]['time']+"</span>"+
		                   "</dl>"+
		                   "<p id='description'>"+
		                   data[i]['description']+
		                   "</p></li>";
	}
}
fetch();
