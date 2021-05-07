<?php

   include_once 'dbconnection.php';

   function convert_time_to_seconds($str_time){
      list($h, $m, $s) = explode(':', $str_time);
	   return ($h * 3600) + ($m * 60) + $s;
   }



   $puzzle_type = $_GET['puzzle'];
   $user_name = $_GET['user_name'];
   $user_time = $_GET['time'];
   $user_attemps = $_GET['attemps'];




   if(empty($_GET)){
      $request_answer = array('status' => 0, 'text' => 'Sorry, ERROR occured');
      echo json_encode($request_answer);

   }else {
      $request_answer = array('status' => 1, 'text' => 'Your statistics has been added correctly');
      echo json_encode($request_answer);


      $dbTable = $puzzle_type."_ranking";
      $user_points = convert_time_to_seconds($user_time)*10 + $user_attemps*5;


      date_default_timezone_set("Europe/Warsaw");
      $puzzle_date = date("Y-m-d H-i-s");
      $user_localization = "unknown";

      // Inserting to relevant ranking tabel
      $sql1 = "INSERT INTO $dbTable (name, points, time, attemps, date, country) VALUES ('$user_name', '$user_points', '$user_time', '$user_attemps', '$puzzle_date', '$user_localization');";
      mysqli_query($conn, $sql1);

      // Inserting to latest scores
      $latest_scores = "latest_scores";
      $sql2 = "INSERT INTO $latest_scores (name, points, time, attemps, date, puzzle_type) VALUES ('$user_name', '$user_points', '$user_time', '$user_attemps', '$puzzle_date', '$puzzle_type');";
      mysqli_query($conn, $sql2);
   }





?>
