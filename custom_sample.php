<?php

$content = "Hello ".$_REQUEST['name'].",\nWelcome to Pebble Cards!";

if ($_REQUEST['latitude'] && $_REQUEST['longitude']) {
  $content .= "\n\nLat: ".substr($_REQUEST['latitude'], 0, 8)."\nLon: ".substr($_REQUEST['longitude'], 0, 8);
}

$array = array(
  "content" => $content,
  "refresh_frequency" => 30
);

if ($_REQUEST['vibrate']) {
  $array["vibrate"] = $_REQUEST['vibrate'];
}

echo json_encode($array);
