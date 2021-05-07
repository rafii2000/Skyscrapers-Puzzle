
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

server(6);
