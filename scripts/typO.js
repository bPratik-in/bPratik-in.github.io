// Global Name=>Value Pair Hash Array
var g = new HashedArray();
// Initialise defaults
g.setItem('lastX',5);
g.setItem('lastY',5);
g.setItem('lastZ',1000);
var ch;

$(document).ready(function(){
	$('#page').one('click', function(){$('#page-intro').hide(500);});
	$('.highlights').draggable();
	$('#page').click(function(e){
		g.setItem('lastX',e.pageX);
		g.setItem('lastY',e.pageY-16);
		if($('#'+String(g.getItem('lastZ'))).text().length > 0)
		{
			g.setItem('lastZ',g.getItem('lastZ')+5);
		}
		$('body').append('<div id="'+String(g.getItem('lastZ'))+'"></div>')
//		$('#'+String(g.getItem('lastZ'))).addClass('textblock')
		$('#'+String(g.getItem('lastZ'))).css({
			'position' : 'absolute',
			'top' : g.getItem('lastY'),
			'left' : g.getItem('lastX'),
			'text-align' : 'left',
			'z-index' : g.getItem('lastZ')
		});
		$('#keycollector').attr('value','').focus();
	});
});
$(document).ready(function(){
	$('#keycollector').keyup(function(e){
		var eldiv = $('#'+String(g.getItem('lastZ')));
		$(eldiv).html('<pre>'+$('#keycollector').attr('value')+'</pre>');
	});
});

//$(document).ready(function(){
//		$('body').keydown(function(e){
//				var eldiv = $('#'+String(g.getItem('lastZ')));
//				$(eldiv).append(getKeyValue(e));
//				if(e.which == 8)
//				{
//					$(eldiv).text($(eldiv).text().substring(0,$(eldiv).text().length-1));
//					e.preventDefault();
//				}
//		});
//});

//function getKeyValue(e)
//{
//	var key = e.which, chr = "";
//	if((key >= 65 && key <= 90) || (key >= 48 && key <= 57) || (key >= 186 && key <= 222))
//	{
//		chr = String.fromCharCode(key);
//	}
//	if(key == 13)
//	{
//		chr = "<br />";
//	}
//	if(key == 32)
//	{
//		chr = "&nbsp;";
//	}
//	if(key == 9)
//	{
//		chr = "&nbsp;&nbsp;&nbsp;&nbsp;";
//	}
//	if(chr != "")
//	{
//		e.preventDefault();
//	}
//	return chr;
//}
