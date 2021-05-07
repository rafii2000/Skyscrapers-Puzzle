<div class="game" tabindex="0" id="game_id">

   <!-- BUTTONS  -->
   <div class="buttons_container">


      <div class="button color1" onclick="fill_cell(97)">
         <p id="h1_description">floor 1</p>
         <!-- <p>1</p> -->
         <div class="floor1">
            <div class="floor_wraper">
               <div class="floor f1" ></div>
            </div>
         </div>
      </div>

      <div class="button color2" onclick="fill_cell(98)">
         <p>floor 2</p>
         <!-- <p>2</p> -->
         <div class="floor2">
            <div class="floor_wraper">
               <div class="floor f2" ></div>
               <div class="floor f2" ></div>
            </div>
         </div>
      </div>

      <div class="button color3" onclick="fill_cell(99)">
         <p>floor 3</p>
         <!-- <p>3</p> -->
         <div class="floor3">
            <div class="floor_wraper">
               <div class="floor f3" ></div>
               <div class="floor f3" ></div>
               <div class="floor f3" ></div>
            </div>
         </div>
      </div>

      <div class="button color4" onclick="fill_cell(100)">
         <p>floor 4</p>
         <!-- <p>4</p> -->
         <div class="floor4">
            <div class="floor_wraper">
               <div class="floor f4" ></div>
               <div class="floor f4" ></div>
               <div class="floor f4" ></div>
               <div class="floor f4" ></div>
            </div>
         </div>
      </div>

      <div class="button color5" onclick="fill_cell(101)">
         <p>floor 5</p>
         <!-- <p>4</p> -->
         <div class="floor5">
            <div class="floor_wraper">
               <div class="floor f5" ></div>
               <div class="floor f5" ></div>
               <div class="floor f5" ></div>
               <div class="floor f5" ></div>
               <div class="floor f5" ></div>
            </div>
         </div>
      </div>

      <div class="button" id="delete_btn" onclick="fill_cell(96)">
         <p>Delete</p>
      </div>

      <div class="game_mode button" id="check_grid_MOBILE" onclick="check_grid()">Check</div>

   </div>


   <!-- PUZZLE GRID BOARD -->
   <!-- class="game_grid size_5x5" -->
   <div class="size_5x5" tabindex="0" id="game_grid_id">

      <div class=""></div>
      <div class=" clue" id="clue_0"></div>
      <div class=" clue" id="clue_1"></div>
      <div class=" clue" id="clue_2"></div>
      <div class=" clue" id="clue_3"></div>
      <div class=" clue" id="clue_4"></div>
      <div class=""></div>


      <div class=" clue " id="clue_19"></div>
      <div class="cell" id="0-0" onclick="highlight_cell(0,0)"></div>
      <div class="cell" id="0-1" onclick="highlight_cell(0,1)"></div>
      <div class="cell" id="0-2" onclick="highlight_cell(0,2)"></div>
      <div class="cell" id="0-3" onclick="highlight_cell(0,3)"></div>
      <div class="cell" id="0-4" onclick="highlight_cell(0,4)"></div>
      <div class=" clue" id="clue_5"></div>


      <div class=" clue" id="clue_18"></div>
      <div class="cell" id="1-0" onclick="highlight_cell(1,0)"></div>
      <div class="cell" id="1-1" onclick="highlight_cell(1,1)"></div>
      <div class="cell" id="1-2" onclick="highlight_cell(1,2)"></div>
      <div class="cell" id="1-3" onclick="highlight_cell(1,3)"></div>
      <div class="cell" id="1-4" onclick="highlight_cell(1,4)"></div>
      <div class=" clue" id="clue_6"></div>


      <div class=" clue" id="clue_17"></div>
      <div class="cell" id="2-0" onclick="highlight_cell(2,0)"></div>
      <div class="cell" id="2-1" onclick="highlight_cell(2,1)"></div>
      <div class="cell" id="2-2" onclick="highlight_cell(2,2)"></div>
      <div class="cell" id="2-3" onclick="highlight_cell(2,3)"></div>
      <div class="cell" id="2-4" onclick="highlight_cell(2,4)"></div>
      <div class=" clue" id="clue_7"></div>


      <div class=" clue" id="clue_16"></div>
      <div class="cell" id="3-0" onclick="highlight_cell(3,0)"></div>
      <div class="cell" id="3-1" onclick="highlight_cell(3,1)"></div>
      <div class="cell" id="3-2" onclick="highlight_cell(3,2)"></div>
      <div class="cell" id="3-3" onclick="highlight_cell(3,3)"></div>
      <div class="cell" id="3-4" onclick="highlight_cell(3,4)"></div>
      <div class=" clue" id="clue_8"></div>


      <div class=" clue" id="clue_15"></div>
      <div class="cell" id="4-0" onclick="highlight_cell(4,0)"></div>
      <div class="cell" id="4-1" onclick="highlight_cell(4,1)"></div>
      <div class="cell" id="4-2" onclick="highlight_cell(4,2)"></div>
      <div class="cell" id="4-3" onclick="highlight_cell(4,3)"></div>
      <div class="cell" id="4-4" onclick="highlight_cell(4,4)"></div>
      <div class=" clue" id="clue_9"></div>


      <div class=""></div>
      <div class=" clue" id="clue_14"></div>
      <div class=" clue" id="clue_13"></div>
      <div class=" clue" id="clue_12"></div>
      <div class=" clue" id="clue_11"></div>
      <div class=" clue" id="clue_10"></div>
      <div class=""></div>


      <div class="solution_alert wrong_solution" id="wrong_solution_id">
         WRONG SOLUTION!
      </div>

      <div class="solution_alert" id="good_solution_id">
         WELL DONE!
         <img id="close_well_done_alert" src="img/cl.png" alt="" onclick="close_well_done_alert()">
      </div>

   </div>


   <!-- BUTTONS  -->
   <div class="buttons_container">


      <a href="Ranking" target="_blank">
         <div class="button" id="ranking_btn">Ranking</div>
      </a>

      <div class="button" id="level_btn">Level</div>




      <div class="button" id="grid_size_DESKTOP" onmouseover="grid_size_options('show')">Grid size</div>

      <div class="button" id="grid_size_option_DESKTOP" onmouseleave="grid_size_options('hide')">
         <a href="Game-4x4">
            <div class="size">4x4</div>
         </a>

         <a href="Game-5x5">
            <div class="size">5x5</div>
         </a>

         <a href="Game-6x6">
            <div class="size">6x6</div>
         </a>
      </div>

      <div class="button" id="grid_size_MOBILE" >

         <a href="Game-4x4">
            <div class="size">4x4</div>
         </a>

         <a href="Game-5x5">
            <div class="size">5x5</div>
         </a>

         <a href="Game-6x6">
            <div class="size">6x6</div>
         </a>

      </div>


      <a href="Game-5x5">
         <div class="button" id="new_game_btn">New game</div>
      </a>



      <div class="button" id="check_grid_DESKTOP" onclick="check_grid()">Check</div>

      <!-- <div class="button" onclick="fill_cell(96)">
         <p>Delete</p>
      </div> -->


   </div>
</div>
