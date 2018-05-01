//hello.js
$(function(){
	alert("Hello World");
});

$(function(){
	var msg=$('<div>Hello World</div>');
	$('body').append(msg);
});

$(function() {
	// body...
	for (var i = 0;i<100;i++){
		var msg=$('<div>Hello World</div>');
		msg.css('font-size',i);
		$('body').append(msg);
		}
});

$(function(){

	var gb = $('<div id="gid">');
	gb.append($('<div/>',{text:'Great'}));
	gb.append($('<img/>',{src:'../static/flags/gb.gif'}));
	$('#countries').append(gb);
	// $('#countries').attr("id","gid");
});

$(function(){
	$("#gid img").css({
		width:"100px",
		border:"3px red solid"
	});
});

$(function(){
	$("#fr img").css({
		width:"100px",
		border:"3px red solid"
	});
});

$(function(){
	$("#fi img").css({
		width:"100px",
		border:"3px red solid"
	});
});

$(function(){
	var elem = $('<div/>');
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);
});

$(function(){
	$('p:first-child').css('border','solid');
	//Identifies the first p in each block
	$('p:nth-child(1)').css('border','solid');
	//selects the first child in each block
	$('p:eq(1)').css('border','solid');
	//This gets item 1 - the second one
	$('p:last').css('border','solid');
	//The last one of all
});


$(function(){
	var ca ={
		cname:"A J CUMMING",
		caddress:{
			street:"10 Colinton Rd",
			town:"Edinburgh",
			post_code:"EH14 5DT"
		},
		transaction:[
		{whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100},
		{whn:"2014-01-11",nar:"BUS FARE",amt:-35}
		]
	};
	alert(ca.transaction[1].nar);
});