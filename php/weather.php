<?php
$json = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0";

$decode = json_decode(file_get_contents($json), true);

echo '<pre>';

print_r($decode);

?>