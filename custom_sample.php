<?php

$array = array(
  "content" => "Hello ".$_REQUEST['name'].",\nWelcome to Pebble Cards!",
  "refresh_frequency" => 30
);

echo json_encode($array);
