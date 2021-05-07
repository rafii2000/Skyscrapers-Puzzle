

if( $(window).height()>400 & $(window).width() <= 500){
      $('.hero_image').css('min-height', $(window).height()*1);
}

else if($(window).height()<=400 & $(window).width() <= 500){
   $('.hero_image').css('min-height', $(window).height()*2);
}

else if($(window).height()<=600 & $(window).width() <= 500){
   $('.hero_image').css('min-height', $(window).height()*1.5);
}

else if($(window).height() >= 900){
   $('.hero_image').css('min-height', $(window).height());
}



$(window).resize(function(){
   console.log($(window).height());

   if( $(window).height()>400 & $(window).width() <= 500){
         $('.hero_image').css('min-height', $(window).height()*1);
   }

   else if($(window).height()<=400 & $(window).width() <= 500){
      $('.hero_image').css('min-height', $(window).height()*2);
   }

   else if($(window).height()<=600 & $(window).width() <= 500){
      $('.hero_image').css('min-height', $(window).height()*1.5);
   }

   else if($(window).height() >= 900){
      $('.hero_image').css('min-height', $(window).height());
   }
});
