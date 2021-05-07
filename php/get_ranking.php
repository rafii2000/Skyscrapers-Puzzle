<?php

   include_once 'dbconnection.php';

   $table_name = "4x4_ranking"; // table name
   $table_name = $_GET['q'];


   if($table_name == "latest_scores"){
      $sql = "SELECT * FROM $table_name ORDER BY date DESC";
      $last_column = "puzzle_type";
   }
   else {
      $sql = "SELECT * FROM $table_name ORDER BY points ASC, date ASC";
      $last_column = "country";
   }

   $result = mysqli_query($conn, $sql);
   $resultCheck = mysqli_num_rows($result);


   // display results
   if($resultCheck > 0){
      $pos = 1;
      while ($row = mysqli_fetch_assoc($result)) {

         echo "<tr>";
            echo "<td>".$pos."</td>";
            echo "<td>".$row['name']."</td>";
            echo "<td>".$row['points']."</td>";
            echo "<td>".$row['time']."</td>";
            echo "<td>".$row['attemps']."</td>";
            echo "<td>".$row['date']."</td>";
            echo "<td>".$row[$last_column]."</td>";
         echo "</tr>";

         $pos += 1;
      }
   }
   else {
      echo "Sorry, Database is empty";
   }
?>
