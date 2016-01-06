<?php

$json = "http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&appid=2de143494c0b295cca9337e1e96b00e0";

$decode = $var_dump(json_decode($json, true));

$result = $decode()

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Weather</title>
</head>
<body>
	
</body>
</html>