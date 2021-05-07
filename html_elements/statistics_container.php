<div class="statistics_container" id="statistics_container">

   <h2>Game statistics</h2>

   <div class="stats">

      <div class="stat">
         <h3>Time:</h3>
         <p class="stat_value" id="time_id"></p>
      </div>

      <div class="stat">
         <h3>Deleted builds:</h3>
         <p class="stat_value" id="deleted_builds_id"></p>
      </div>

      <div class="stat">
         <h3>All tries:</h3>
         <p class="stat_value" id="all_tries_id"></p>
      </div>

      <div class="stat">
         <h3>Rank position:</h3>
         <p class="stat_value" id="rank_position_id"></p>
      </div>
   </div>

   <div class="name_input_container">

      <div class="error_not_occured" id="form_message_label"></div>
      <form id="user_name_form">
         <input id="user_name_input" type="text" name="name" value="">
      </form>
      <div class="name_input_label">Enter your name to see yourself in ranking</div>
      <div class="input_buttons" id="submit_form_btn" onclick="submit_user_name_form()">Submit</div>

      <!-- Trzeba zmienic na funkcje w JS -->
      <a href=Game-4x4>
         <div class="input_buttons" id="input_new_game_btn" >New game</div>
      </a>
   </div>

</div>
