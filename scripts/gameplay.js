
// DEFAULT SETTINGS of VARIABLES
var last_X_coordinate;
var last_Y_coordinate;


var grid = [];
var rows  = [];
var columns  = [];
var grid_size = 0;

var background_colors = {
   '97': '#b8a9c9',     //1
   '98': '#5c85d6',     //2
   '99': '#99ddff',     //3
   '100': '#ffbb99',    //4
}




   // GRID NAVIGATION

document.getElementById("game_grid_id").addEventListener("keydown", function() {

   var clicked_button = event.which;
   // console.log(clicked_button);

   if(window.last_X_coordinate === undefined && window.last_Y_coordinate === undefined){
      console.log('both undefined');
      highlight_cell(0,0);
      fill_cell(clicked_button);
   }
   else {

      cells_controlling_by_keyboard(clicked_button);
      fill_cell(clicked_button);
   }

});

// this disable scroling site by arrows
document.getElementById("game_grid_id").onkeydown = function(event) {
   var key = event.keyCode;
   if(key >= 37 && key <= 40) {
      return false;
   }
}





   // HIGHLIGHT CELL BORDER
var state = 'not highlighted';

function highlight_cell(x_cord, y_cord){



   if(x_cord == window.last_X_coordinate && y_cord == window.last_Y_coordinate){
      if(state == 'not highlighted'){
         $('#'+x_cord+'-'+y_cord).css('border', "1px solid yellow");
         state = 'highlighted';
      }
      else{
         remove_highlight_cell(window.last_X_coordinate, window.last_Y_coordinate);
         state = 'not highlighted';
      }
   }
   else {
      //console.log(x_cord + "-" + y_cord);
      remove_highlight_cell(window.last_X_coordinate, window.last_Y_coordinate);

      $('#'+x_cord+'-'+y_cord).css('border', "1px solid yellow");
      state = 'highlighted';

      window.last_X_coordinate = x_cord;
      window.last_Y_coordinate = y_cord;
   }
}

function remove_highlight_cell(x, y){

   $('#'+x+'-'+y).css('border', "1px solid grey");
   // $('#'+x+'-'+y).removeClass('yellow_border');
}


function cells_controlling_by_keyboard(clicked_button){

   x = window.last_X_coordinate;
   y = window.last_Y_coordinate;



   // LEFT ARROW or A
   if(clicked_button == 37 || clicked_button == 65){

      y = check_coordinates(y-1);
      highlight_cell(x,y);
   }

   // UP ARROW or W
   else if (clicked_button == 38 || clicked_button == 87) {

      x = check_coordinates(x-1);
      highlight_cell(x,y);
   }

   // RIGHT ARROW or D
   else if (clicked_button == 39 || clicked_button == 68) {

      y = check_coordinates(y+1);
      highlight_cell(x,y);
   }

   // BOTTOM ARROW or S
   else if (clicked_button == 40 || clicked_button == 83) {

      x = check_coordinates(x+1);
      highlight_cell(x,y);
   }

}

function check_coordinates(cord){

   g_size = window.grid_size;

   if(cord > g_size-1) { return 0; }
   else if(cord < 0 ) { return  g_size-1; }
   else { return cord; }

}

function fill_cell(clicked_button){

   var background_colors = {
      '97': '#b8a9c9',
      '98': '#5c85d6',
      '99': '#99ddff',
      '100': '#ffbb99',

      '49': '#b8a9c9',
      '50': '#5c85d6',
      '51': '#99ddff',
      '52': '#ffbb99',
   }


   x = window.last_X_coordinate;
   y = window.last_Y_coordinate;

   // butons to put buildings (number 1 2 3 4 5)
   if(clicked_button >= 97 && clicked_button <= 96 + window.grid_size){
      // potrzebne do podswietlenia liczb:
      // $('#'+x+"-"+y).css('background-color', background_colors[clicked_button]);

      count_deleted_builds(x, y, clicked_button-96);

      if(window.grid[x][y] == clicked_button-96){

         document.getElementById(x+"-"+y).innerHTML = "";
         window.grid[x][y] = "";
         put_building_to_row(x, y, "");
         put_building_to_column(y, x, "");
      }
      else {

         document.getElementById(x+"-"+y).innerHTML = clicked_button-96;
         window.grid[x][y] = clicked_button-96;
         put_building_to_row(x, y, clicked_button-96);
         put_building_to_column(y, x, clicked_button-96);
      }

      //console.log(window.grid);
      timer_start();

   }

   // butons to put buildings (number 1 2 3 4 from the top keyboard)
   if(clicked_button >= 49 && clicked_button <= 48 + window.grid_size){
      document.getElementById(x+"-"+y).innerHTML = clicked_button-48;
      // potrzebne do pokolorowania wysokosci:
      // $('#'+x+"-"+y).css('background-color', background_colors[clicked_button]);

      // dziwne ze dla 47 i dla 48 dziala dobrze
      count_deleted_builds(x, y, clicked_button-48);

      if(window.grid[x][y] == clicked_button-48){

         document.getElementById(x+"-"+y).innerHTML = "";
         window.grid[x][y] = "";
         put_building_to_row(x, y, "");
         put_building_to_column(y, x, "");
      }
      else {

         document.getElementById(x+"-"+y).innerHTML = clicked_button-48;
         window.grid[x][y] = clicked_button-48;
         put_building_to_row(x, y, clicked_button-48);
         put_building_to_column(y, x, clicked_button-48);
      }

      console.log(window.grid);
      timer_start();

   }

   // butons to remove buildings (0 backspace del)
   if(clicked_button == 96 || clicked_button == 8 || clicked_button == 46){
      document.getElementById(x+"-"+y).innerHTML = "";
      $('#'+x+"-"+y).css('background-color', 'grey');

      window.grid[x][y] = "";
      console.log(window.grid);

      put_building_to_row(x, y, "");
      put_building_to_column(y, x, "");

   }

}






   // HIGHLIGHT BACKGROUND SAME CELLS nieuzywane

function highlight_all_same_buildings(building_heigth){
   var row;
   var column;

   for(row=0; row<4; row+=1){

      for(column=0; column<4; column+=1){

         if(window.grid[row][column] == building_heigth){
            $('#'+row+'-'+column).css('background-color', window.background_colors[building_heigth+96]);
         }
      }
   }
}



   // GRID SIZE

function change_grid_size(size){

   console.log(window.grid);
   console.log("Wielkosc siatki to: ", size,"x",size);

   window.grid_size = size;
   window.deleted_builds = -(size*size);

   window.grid.splice(0, window.grid.length);
   window.rows.splice(0, window.rows.length);
   window.columns.splice(0, window.columns.length);

   // console.log(window.grid);

   var j, i;
   for(j=0; j<size; j++){

      grid_framework = new Array()
      row_framework = new Array()
      column_framework = new Array()

      for(i=0; i<size; i++){

         grid_framework.push('');
         row_framework.push('');
         column_framework.push('');

      }

      window.grid.push(grid_framework);
      window.rows.push(row_framework);
      window.columns.push(column_framework);
   }

   console.log(window.grid);


   upload_data_from_server();
   load_clues_to_grid();
}

function grid_size_options(condition){
   if(condition == "show"){
      $('#grid_size_DESKTOP').css('display', 'none');
      $('#grid_size_option_DESKTOP').css('display', "flex");
      console.log('show');
   }
   else {

      $('#grid_size_option_DESKTOP').css('display', "none");
      $('#grid_size_DESKTOP').css('display', 'flex');
      console.log('hide');
   }
}

// change_grid_size(5);





   //TIMER

var second = 0;
var minute = 0;
var hour = 0;

var timer_var;
var timer_running = 0;



function timer(){

   var hr;
   var min;
   var sec;

   hr = window.hour;
   min = window.minute;
   sec = window.second;


   if(hr < 10){ hr = "0"+hr; }
   if(min < 10){ min = "0"+min; }
   if(sec < 10){ sec = "0"+sec; }

   // console.log(hr+":"+min+":"+sec);

   $('#timer').html(hr+":"+min+":"+sec);

   thinking_time = hr+":"+min+":"+sec;



   window.second += 1;

   if(sec == 59){
      window.second = 0;
      window.minute += 1
   }

   if(min == 59){
      window.minute = 0;
      window.hour += 1;
   }

   timer_var = setTimeout("timer()", 1000);
}

function timer_start(){
   if(timer_running == 0){
      timer();
      timer_running = 1;

      $('#pause_timer').css('display', "none");
      $('#timer').css('opacity', '1');
   }
}

function timer_stop(){
   clearTimeout(timer_var);
   timer_running = 0;
}

function timer_reset() {
   window.second = 0;
   window.minute = 0;
   window.hour = 0;

   timer_start();
}

// przy zatrzymanym timerze gdy zmieniamy wielkosc
// ekranu pauza ma stara pozycje

$(window).resize(function(){
   w = $('#timer').width();
   h = $('#timer').height();

   $('#pause_timer').css('width', w);
   $('#pause_timer').css('height', h);

   // to powinno byc przy change grid size no ale trudno
   if( $(window).width() < 900){
      console.log(-900);
      $('#grid_size_option_btn').css('display', "none");
      $('#grid_size_btn').css('display', 'none');
   }
   else {
      $('#grid_size_option_btn').css('display', "none");
      $('#grid_size_btn').css('display', 'flex');
   }
})

function top_bar_timer_pause_play(condition){
   if(condition == "show"){
      console.log('show_TOP_BAR');

      $('#timer').css('opacity', '0.1');
      $('#pause_timer').css('display', "block");

      w = $('#timer').width();
      h = $('#timer').height();

      $('#pause_timer').css('width', w);
      $('#pause_timer').css('height', h);
   }
   else {
      console.log('hide_TOP_BAR');

      if(timer_running != 0){
         $('#pause_timer').css('display', "none");
         $('#timer').css('opacity', '1');
      }
   }
}





   // SERVER FUNCTIONS
function server(grid_size){

   var data_to_send = [];


   var generated_grid = [];
   var generated_clues = [];
   var vertical_lines = [];

   var length = grid_size;
   var heigth = grid_size;

   function generate_grid(){

         function permutations(list){

         	// Empty list has one permutation
         	if (list.length == 0)
         		return [[]];


         	var result = [];

         	for (var i=0; i<list.length; i++)
         	{
         		// Clone list (kind of)
         		var copy = Object.create(list);

         		// Cut one element from list
         		var head = copy.splice(i, 1);

         		// Permute rest of list
         		var rest = permutations(copy);

         		// Add head to each permutation of rest of list
         		for (var j=0; j<rest.length; j++)
         		{
         			var next = head.concat(rest[j]);
         			result.push(next);
         		}
         	}

         	return result;
         }

         function make_vertical_lines(l, h){

            // it's clear an array
            vertical_lines.splice(0, vertical_lines.length);

            var i;
            for(i=0; i<l; i++){
               vertical_lines.push(new Array());
            }


            var j;
            for(j=0; j<generated_grid.length; j++){
               var row = generated_grid[j];

               var i;
               for(i=0; i<row.length; i++){

                  vertical_lines[i].push(row[i]);
               }
            }
            // console.log(vertical_lines);
         }

         function are_repeated_buildings(){

            // console.log("grid: ", grid);
            // console.log("col: ", vertical_lines);

            var i;
            for(i=0; i<vertical_lines.length; i++){
               var line = vertical_lines[i];

               if([...new Set(line)].length != line.length){
                  // console.log("There are some duplicates \n");
                  return false
               }
            }

            return true;
         }

         function getRndInteger(min, max) {
           return Math.floor(Math.random() * (max - min + 1) ) + min;
         }

         function factorial(n) {
           return (n != 1) ? n * factorial(n - 1) : 1;
         }

         function generate_row(start_value, unique_count){

            var p_range_start = ((start_value-1)*unique_count);
            var p_range_end = (start_value*unique_count)-1

            var p_index = getRndInteger( p_range_start, p_range_end );
            // console.log("p_index", p_index);
            // console.log("rS:", p_range_start, "rE:" ,p_range_end);

            row = perms_list[p_index];
            generated_grid.push(row);

            make_vertical_lines(heigth, length);


            while(are_repeated_buildings() == false){

               if(p_index+1 > p_range_end ){

                  p_index = p_range_start;

                  row = perms_list[p_index];
                  // console.log("p_index:", p_index, ", ", row);
                  generated_grid[generated_grid.length - 1] = row;
               }
               else{
                  p_index += 1;

                  row = perms_list[p_index];
                  // console.log("p_index:", p_index, ", ", row);
                  generated_grid[generated_grid.length - 1] = row;

               }

               make_vertical_lines(heigth, length);
            }

         }

         list_to_perm = [];

         for(i=1; i<grid_size+1; i++){
            list_to_perm.push(i);
         }


         var perms_list = permutations(list_to_perm);
         var row_start_from = perms_list[getRndInteger(0, perms_list.length-1)];


         // supc = sorted_unique_perms_count
         supc = factorial(row_start_from.length)/row_start_from.length;

         var i;
         for(i=0; i<row_start_from.length; i++){

            // hfbr = height_of_first_build_in_row
            var hfbr = row_start_from[i];

            generate_row(hfbr, supc);

         }


         console.log("GENERATED GRID:");
         for(i=0; i<grid_size; i++){
            console.log(generated_grid[i]);
         }

      }

   ///////////////////////////////////////

   var clues = [];
   var clues_for_rows = [];
   var clues_for_columns = [];

   function generate_proper_variables(){

         for(i=0; i<grid_size; i++){

            clues_for_rows.push(new Array() );
            clues_for_columns.push( new Array() );
         }

         for(i=0; i<grid_size*grid_size; i++){
            clues.push(0);
         }

      }
   generate_proper_variables();

   function generate_clues(direction){

         function make_vertical_lines(l, h){

            // it's clear an array
            vertical_lines.splice(0, vertical_lines.length);

            var i;
            for(i=0; i<l; i++){
               vertical_lines.push(new Array());
            }


            var j;
            for(j=0; j<generated_grid.length; j++){
               var row = generated_grid[j];

               var i;
               for(i=0; i<row.length; i++){

                  vertical_lines[i].push(row[i]);
               }
            }
            // console.log(vertical_lines);
         }

         function increasing_sequence_length(sequence){

            var l = 1;  // increasing lenght
            var first_num = sequence[0];

            var i;
            for(i=1; i<sequence.length; i++){

               if(sequence[i] > first_num){
                  l +=1;
                  first_num = sequence[i];
               }
            }

            return l;
         }

         function find_clues_for_rows(){

            console.log("CLUES FOR ROWS");

            var left_clue;
            var right_clue;

            var i;
            for(i=0; i<generated_grid.length; i++){

               var row = generated_grid[i];
               var reverse_row = generated_grid[i].slice().reverse();

               //LEFT CLUE
               left_clue = increasing_sequence_length(row);

               //RIGTH CLUE
               right_clue = increasing_sequence_length(reverse_row);

               clues_for_rows[i][0] = left_clue;
               clues_for_rows[i][1] = right_clue;

            }

            console.log(clues_for_rows);

         }

         function find_clues_for_columns(){

            console.log("CLUES FOR COLUMNS");

            var up_clue;
            var down_clue;

            var i;
            for(i=0; i<vertical_lines.length; i++){

               var column = vertical_lines[i];
               var reverse_column = vertical_lines[i].slice().reverse();

               //UP CLUE
               up_clue = increasing_sequence_length(column);

               //DOWN CLUE
               down_clue = increasing_sequence_length(reverse_column);

               clues_for_columns[i][0] = up_clue;
               clues_for_columns[i][1] = down_clue;

            }

            console.log(clues_for_columns);

         }

         function make_clues_ordered_list(){

            // indexy konieczne do stworzenia listy
            // mozna bylo by je tworzyc na podstawie grid size
            clues_indexes = {

               grid_size_4:{
                  clues_for_rows_indexes: [ [15, 4], [14, 5], [13, 6], [12, 7] ],
                  clues_for_columns_indexes: [ [0, 11], [1, 10], [2, 9], [3, 8] ]
               },

               grid_size_5:{
                  clues_for_rows_indexes: [ [19, 5], [18, 6], [17, 7], [16, 8], [15, 9] ],
                  clues_for_columns_indexes: [ [0, 14], [1, 13], [2, 12], [3, 11], [4, 10] ]
               },

               grid_size_6:{
                  clues_for_rows_indexes: [ [23, 6], [22, 7], [21, 8], [20, 9], [19, 10], [18, 11] ],
                  clues_for_columns_indexes: [ [0, 17], [1, 16], [2, 15], [3, 14], [4, 13], [5, 12] ]
               },

            }


            var clues_for_rows_indexes = clues_indexes['grid_size_'+grid_size]['clues_for_rows_indexes'];
            var clues_for_columns_indexes = clues_indexes['grid_size_'+grid_size]['clues_for_columns_indexes']



            var j, i;
            for(j=0; j<grid_size; j++){

               for(i=0; i<2; i++){

                  index = clues_for_rows_indexes[j][i];
                  clues[index] = clues_for_rows[j][i];

                  index =  clues_for_columns_indexes[j][i];
                  clues[index] = clues_for_columns[j][i];

               }
            }

            console.log("CLUES LSIT");
            console.log(clues);



         }


         find_clues_for_rows();
         find_clues_for_columns();
         make_clues_ordered_list();

      }


   generate_grid();
   generate_clues();


      data_to_send.push(clues_for_rows);
      data_to_send.push(clues_for_columns);
      data_to_send.push(clues);


      console.log(data_to_send);
      return data_to_send;

}








   // DATA FROM "SERVER" function
var roman_clues = {
   0: '',
   1: 'I',
   2: 'II',
   3: 'III',
   4: 'IV',
   5: 'V',
   6: 'VI'
};

console.log(window.grid_size);
// var data_from_server = server(window.grid_size);

var clues;
var clues_for_rows;
var clues_for_columns;

// var clues_for_rows = data_from_server[0];
// var clues_for_columns = data_from_server[1];



function upload_data_from_server(){

   var data_from_server = server(window.grid_size);

   window.clues = data_from_server[2];
   window.clues_for_rows = data_from_server[0];
   window.clues_for_columns = data_from_server[1];

}

function load_clues_to_grid(){

   // clue_id = clue_index
   var index;
   for(index=0; index<clues.length; index++){
      $('#clue_'+index).html(roman_clues[clues[index]]);
   }
}







   // GRID VALIDATION

// dla działania rows i columns są tworzone na samej górze skryptu
// aby były widoczne dla wszystkich funkcji

// var rows  = [];
// var columns  = [];

var puzzle_resolved = false;



function put_building_to_row(row_num, row_index, build){

   rows[row_num][row_index] = build;
}

function put_building_to_column(colum_num, column_index, build){

   columns[colum_num][column_index] = build;
}


function check_grid(){

   function wrong_solutuion_alert(){
      $('#wrong_solution_id').addClass('alert_solution_animation');
      setTimeout(function(){ $('#wrong_solution_id').removeClass('alert_solution_animation'); }, 1000)
   }

   function good_solutuion_alert(){
      $('#good_solution_id').addClass('good_solution');
   }


   console.log('CHECK_GRID');

   if(no_empty_cells() == 0){
      wrong_solutuion_alert();
      all_tries += 1;
   }

   else if(rows_unique_heigth_condition() == 0){
      wrong_solutuion_alert();
      all_tries += 1;
   }

   else if(columns_unique_heigth_condition() == 0){
      wrong_solutuion_alert();
      all_tries += 1;
   }

   else if(rows_clue_condition() == 0){
      wrong_solutuion_alert();
      all_tries += 1;
   }

   else if(columns_clue_conditon() == 0){
      wrong_solutuion_alert();
      all_tries += 1;
   }
   else {

      if(puzzle_resolved == false){
         good_solutuion_alert();
         all_tries += 1;
         puzzle_resolved = true;

         //show statistics container
         setTimeout(function(){
            $('#statistics_container').css('display', 'block');
            scroll_to_bottom();
         },1000);


         timer_stop();
         display_statistics_data();
      }

   }

}

function no_empty_cells(){

   var j;
   for(j=0; j<rows.length; j++){

      var i;
      for(i=0; i<rows[0].length; i++){
         if(rows[i][j] == 0){
            console.log('ROWS epmty_cell: 0');
            return 0;
         }
      }
   }
}

function rows_unique_heigth_condition(){

   var i; //i == row
   for(i=0; i<rows.length; i++){

      if(JSON.stringify(rows[i]) !=  JSON.stringify([...new Set(rows[i])]) ){
         console.log('ROWS unique_heigth: 0');
         return 0;
      }
   }

   console.log('ROWS unique_heigth: 1');
   return 1;
}

function columns_unique_heigth_condition(){

   var i; //i == column
   for(i=0; i<columns.length; i++){
      if(JSON.stringify(columns[i]) !=  JSON.stringify([...new Set(columns[i])]) ){
         console.log('COLUMNS unique_heigth: 0');
         return 0;
      };
   };

   console.log('COLUMNS unique_heigth: 1');
   return 1;
}

function rows_clue_condition(){

   // console.log(rows);
   var i;
   for(i=0; i<rows.length; i++){

      var left_clue = clues_for_rows[i][0];
      var right_clue = clues_for_rows[i][1];
      var left_sequence, rigth_sequence;

      var row = rows[i];
      var reverse_row = rows[i].slice().reverse();

      //check from LEFT site
      left_sequence = increasing_sequence_length(row);
      if(left_clue != left_sequence){ return console.log('ROWS L_clue_condition: 0'); }


      //check form RIGTH site
      rigth_sequence = increasing_sequence_length(reverse_row );
      if(right_clue != rigth_sequence){ return console.log('ROWS R_clue_condition: 0'); }

   }

   console.log('ROWS R_clue_condition: 1');
   return 1;
}

function columns_clue_conditon(){

   var i;
   for(i=0; i<columns.length; i++){

      var up_clue = clues_for_columns[i][0];
      var down_clue = clues_for_columns[i][1];
      var up_sequence, down_sequence;

      var column = columns[i];
      var reverse_column = columns[i].slice().reverse();

      //check from UP site
      up_sequence = increasing_sequence_length(column);
      if(up_clue != up_sequence){ return console.log('COLUMNS UP_clue_condition: 0'); }


      //check form DOWN site
      down_sequence = increasing_sequence_length(reverse_column);
      if(down_clue != down_sequence){ return console.log('COLUMNS DOWN_clue_condition: 0'); }

   }

   console.log('COLUMNS DOWN_clue_condition: 1');
   return 1;
}


function increasing_sequence_length(sequence){

   // console.log(sequence);

   var l = 1;  // increasing lenght
   var first_num = sequence[0];

   var i;
   for(i=1; i<sequence.length; i++){

      if(sequence[i] > first_num){
         l +=1;
         first_num = sequence[i];
      }
   }

   return l;
}


function close_well_done_alert(){

   console.log("CLOSE ALERT");
   $('#good_solution_id').css("display", "none");
}




   // STATISTICS

// time, checked_count, del_builds,
// statystiki musze resetowac gdy bedzie nowa gra
var thinking_time = '00:00:00';
var deleted_builds = -(window.grid_size*window.grid_size);
var all_tries = 0;
var rank_position = "-"; // po polaczeniu z serwerem otrzymujemy ta informacje


// zbytnio nie dziala, nie wiem o co mi chodziło
function scroll_to_bottom(){
   website_height = 1800;
   aim_heigth = 800;
   heigth_rate = aim_heigth/window.innerHeight


   console.log("scroll up " + heigth_rate*window.innerHeight);

   $(document).ready(function(){

      $('html, body').animate({scrollTop : heigth_rate*window.innerHeight}, 1000);

   });
}

function show_statistics_container(){
   $('#statistics_container').css('display', 'block');
   scroll_to_bottom();
}



function count_deleted_builds(x, y, clicked_button){

   if(window.grid[x][y] != clicked_button){
      // console.log(window.grid[x][y]);
      deleted_builds += 1;
   }
}


function display_statistics_data(){

   $('#time_id').html(thinking_time);
   $('#deleted_builds_id').html(deleted_builds);
   $('#all_tries_id').html(all_tries);
   $('#rank_position_id').html(rank_position);

}


// it disable submiting by ENTER
$(document).keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

var user_statistics = [];
var user_name;
var puzzle_type = {
   4: "4x4",
   5: "5x5",
   6: "6x6"
};


function name_form_validation(){
   var special_character = [".", "'"];
}

function submit_user_name_form(){

   user_name = $('#user_name_input').val();
   console.log("USER NAME INPUT");
   console.log(user_name);
   if(user_name == undefined || user_name == ""){
      $('#form_message_label').html("You don't input a name");
      $('#form_message_label').addClass('error_occured');
   }
   else{
      send_user_result_to_server();
      $('#submit_form_btn').css('display', 'none');
      $('#input_new_game_btn').css('display', 'block');
      $('#input_new_game_btn').addClass('animate_button_apperance');


   }
   //window.location.href = "game_"+window.puzzle_type[window.grid_size]+".html";
}

function send_user_result_to_server(){

   function serialize_array_variable(data_array){

      data_names = {
         0: "puzzle",
         1: "user_name",
         2: "time",
         3: "attemps"
      };
      serialized_data = "";

      var i;
      for(i=0; i<data_array.length; i++){
         serialized_data += data_names[i]+"="+data_array[i]+"&"
      }

      return serialized_data.slice(0,-1);
   }

   user_statistics.push(puzzle_type[window.grid_size]);  //1
   user_statistics.push(window.user_name);  //2
   user_statistics.push(window.thinking_time);  //3
   user_statistics.push(window.all_tries);  //4



   data_to_request = serialize_array_variable(user_statistics);

   console.log(user_statistics);
   console.log(data_to_request);



   var xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){

         var server_respond = JSON.parse(this.responseText);
         var respond_status = server_respond['status'];
         var respond_text = server_respond['text'];

         console.log(server_respond);

         if(respond_status == 0){
            $('#form_message_label').addClass("error_occured");
         }
         else {
            $('#form_message_label').removeClass("error_occured");
         }

         $('#form_message_label').html(respond_text);
      }
   }


   // puzzle=4x4&user_name=999&time=00:00:13&attemps=1

   xhttp.open("GET", "php/send_user_results.php?"+data_to_request, true);
   xhttp.send();

}
