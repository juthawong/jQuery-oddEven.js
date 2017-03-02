$.fn.oddbgcolor = function(color) {
  $(this).oddcss('background-color',color);
}
$.fn.oddcolor = function(color) {
  $(this).oddcss("color", color);
}
$.fn.evenbgcolor = function(color){
  $(this).evencss("background-color", color);
}
$.fn.evencolor = function(color){
  $(this).evencss("color", color);
}
$.fn.oddevenbgcolor= function(oddcolor,evencolor){
  $(this).evenoddbgcolor(evencolor,oddcolor);
}
$.fn.oddevencolor= function(oddcolor,evencolor){
  $(this).evenoddcolor(evencolor,oddcolor);
}

$.fn.evenoddbgcolor = function(evencolor, oddcolor){
  if(evencolor.length > 0&&evencolor){
    $(this).evenbgcolor(evencolor);
  }
  if(oddcolor&&oddcolor.length > 0){
    $(this).oddbgcolor(oddcolor);
  }
}

$.fn.evenoddcolor = function(evencolor,oddcolor){
  if(evencolor.length > 0&&evencolor){
    $(this).evencolor(evencolor);
  }
  if(oddcolor&&oddcolor.length > 0){
    $(this).oddcolor(oddcolor);
  }
}
$.fn.even\ = function(evenname,evenproperty,oddname,oddproperty){
  $(this).evencss(evenname,evenproperty);
  $(this).oddcss(oddname,oddcss);
}
$.fn.oddevencss =function(oddname,oddproperty,evenname,evenproperty){
  $(this).evenoddcss(evenname,evenproperty,oddname,oddproperty);
}
$.fn.evencss = function(name,property){
   $(this).even().css(name, property);
}
$.fn.oddcss = function(name,property){
  $(this).odd().css(name, property);
}
$.fn.odd = function(){
return $(this).filter(":odd");
}
$.fn.even = function(){
return $(this).filter(":even");
}
