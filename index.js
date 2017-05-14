$('.button01').mousemove(function(e){
	$('.button01').css('background','#AFEEEE');
})
$('.button01').mouseout(function(e){
	$('.button01').css('background','#E0FFFF');
})
$('.button02').mousemove(function(e){
	$('.button02').css('background','#AFEEEE');
})
$('.button02').mouseout(function(e){
	$('.button02').css('background','#E0FFFF');
})
$('.button03').mousemove(function(e){
	$('.button03').css('background','#AFEEEE');
})
$('.button03').mouseout(function(e){
	$('.button03').css('background','#E0FFFF');
})
$('.button04').mousemove(function(e){
	$('.button04').css('background','#AFEEEE');
})
$('.button04').mouseout(function(e){
	$('.button04').css('background','#E0FFFF');
})
$('.name').mousemove(function(e){
	$('.name').css('background','#DFFFDF');
})
$('.name').mouseout(function(e){
	$('.name').css('background','#98FB98 ');
})
var flag1=false;
$('.button01').click(function(e){
  if(flag1==false) {$('.button01').after('<i>404 not found</i>');flag1=!flag1;}
  else {$('i').fadeOut();flag1=!flag1;}
})
var flag2=false;
$('.button02').click(function(e){
  if(flag2==false) {$('.button02').after('<i>404 not found</i>');flag2=!flag2;}
  else {$('i').fadeOut();flag2=!flag2;}
})
var flag3=false;
$('.button03').click(function(e){
  if(flag3==false) {$('.button03').after('<i>404 not found</i>');flag3=!flag3;}
  else {$('i').fadeOut();flag3=!flag3;}
})
var flag4=false;
$('.button04').click(function(e){
  if(flag4==false) {$('.button04').after('<i>404 not found</i>');flag4=!flag4;}
  else {$('i').fadeOut();flag4=!flag4;}
})