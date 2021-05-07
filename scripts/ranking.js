   // MENU NAVIGATION
var menu_is_opened = false;

function open_menu_onclick(){
   //menu animation
   $('.right_side_menu').removeClass('slide-right');
   $('.right_side_menu').removeClass('end_position');
   $('.right_side_menu').addClass('slide-left');

   //darken site
   $('.top_bar').toggleClass('darken_site');
   $('#ranking_label_div').toggleClass('darken_site');
   $('.ranking_container').toggleClass('darken_site');
}

function close_menu(){
   //menu animation
   $('.right_side_menu').removeClass('slide-left');
   $('.right_side_menu').addClass('end_position');
   $('.right_side_menu').addClass('slide-right');

   //brighten site
   $('.top_bar').removeClass('darken_site');
   $('#ranking_label_div').removeClass('darken_site');
   $('.ranking_container').removeClass('darken_site');
}

////////////////////////////////////////////////////////////////////////////


current_rank_type = "";
function change_ranking_table(rank_type){

   function change_ranking_label(rank_type){
      var table_name = rank_type+"_ranking";

      if (current_rank_type == rank_type){
         $("#ranking_label_hed").html("Latest scores");
         $('#'+rank_type+'_rank_btn').removeClass("choosen_rank_type");

         $("#rank_last_col").html("Puzzle")

         get_data_from_database("latest_scores");
         current_rank_type = "latest_scores";
      }
      else{
         $("#ranking_label_hed").html(rank_type + " Ranking");
         $('#'+current_rank_type+'_rank_btn').removeClass("choosen_rank_type");
         $('#'+rank_type+'_rank_btn').addClass("choosen_rank_type");

         $("#rank_last_col").html("Country");

         get_data_from_database(rank_type+"_ranking");
         current_rank_type = rank_type;
      }
   }

   switch(rank_type){
      case "4x4":
         change_ranking_label(rank_type);
         break;

      case "5x5":
         change_ranking_label(rank_type);
         break;

      case "6x6":
         change_ranking_label(rank_type);
         break;
   }
}


   // DATABASE REQUEST

get_data_from_database('latest_scores');
function get_data_from_database(table_name){

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
         document.getElementById("rank_table").innerHTML = this.responseText;
      }
   }

   xhttp.open("GET", "php/get_ranking.php?q="+table_name, true);
   xhttp.send();
}
