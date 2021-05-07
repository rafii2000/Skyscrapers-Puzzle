<!DOCTYPE html>
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>5x5 Skyscraper Game</title>
      <link rel="stylesheet" href="css/master.css">
      <link rel="stylesheet" href="css/game_top_bar.css">
      <link rel="stylesheet" href="css/game_5x5.css">
      <link rel="stylesheet" href="css/game_statistics.css">
      <link rel="stylesheet" href="css/check_alert.css">

      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
   </head>

   <body onload="change_grid_size(5)">

      <?php require_once 'html_elements/top_bar.php'; ?>

      <?php require_once 'html_elements/5x5_grid.php'; ?>

      <?php require_once 'html_elements/statistics_container.php'; ?>


      <script src="scripts/jquery-min.js" type="text/javascript"></script>
      <script src="scripts/gameplay.js" type="text/javascript"></script>

   </body>
</html>
