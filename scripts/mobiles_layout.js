var narrow_window = false;
var very_narrow_window = false;


$(window).resize(function(){

   // console.log($(window).height());

   if(window.innerWidth < 800 & narrow_window == false){
      console.log(window.innerWidth);
      console.log(window.outerWidth);
      narrow_window = true;
   }

   if(window.innerWidth > 800){
      narrow_window = false;
   }


});



function change_buttons_size_and_description(){

}
