<?php
$userId = $_GET['userId'];
$size = 150*150;

$url = "https://thumbnails.roblox.com/v1/users/avatar-headshot";

$url .= "?userIds=$userId&size=$size&format=PNG&shape=ROUND";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json');
echo $response;
?>