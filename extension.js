(function() {


	$.each($("img"),function(){
		var alt_text = $(this).attr('alt');

		var height = $(this).height();
		var width = $(this).width();
		if (alt_text==null || alt_text==""){
			// console.log("No alt text :(");
			$(this).attr("src", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=no+alt+text" );
			$(this).attr("href", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=no+alt+text" );
		} 

		else {
			var new_alt_text=alt_text.replace(/ /g,"+");
			$(this).attr("src", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=" + new_alt_text);
			$(this).attr("href", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=" + new_alt_text);			
		// console.log(new_alt_text); 
		}
	});

	$.each($("video"),function(){
		var alt_text = $(this).attr('alt');
		var height = $(this).height();
		var width = $(this).width();




		if (alt_text==null || alt_text==""){
			// console.log("No alt text :(");
			$(this).attr("src", "https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png");
			$(this).attr("href", "http://www.google.com/")
		} 

		else {
		var new_alt_text=alt_text.replace(/ /g,"+");
		$(this).attr("src", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=" + new_alt_text);	
		$(this).attr("href", "https://dummyimage.com/"+ width +"x" + height + "/000/fff.png&text=" + new_alt_text);
		}
	
	});

var listOfHeaders = [];


$(":header").each(function(){
	var name = this.tagName;
	var lowercase = name.toLowerCase();
	$(this).html(lowercase);
	
    var oldString = this.tagName;

    listOfHeaders.push(oldString);

});

v = 0
$("p").each(function(){
	$(this).html("paragrah "+v);
	v++;
});

v = 0
$("button").each(function(){
	$(this).html("button "+v);
	v++;
});


v = 0
$("li").each(function(){
		$(this).html("list item "+v);
		v++;
	
});
v = 0
$("a").each(function(){
	 if ($(this).find('img').length) {
		
	} else{
		$(this).html("link "+v);
		v++;
	}
});
v = 0
$("span").each(function(){
	$(this).html("span"+v);
	v++;
});
v = 0
$("cite").each(function(){
	$(this).html("cite"+v);
	v++;
});
v = 0
$("strong").each(function(){

	var text = "strong "+ v;
	$(this).text(text);
	v++;
});
v= 0
$("th").each(function(){

	$(this).html("th "+v);
	v++;
});

$("td").each(function(){

	$(this).html("td "+v);
	v++;
});
console.log(listOfHeaders);






// alert(indexes);

// for (var i = 0; i<listOfHeaders.length-1; i++){


// 	var current = listOfHeaders[i]
// 	var next = listOfHeaders[i+1]
// }
// console.log(listOfHeaders);


// do not delete the line below!
})();
