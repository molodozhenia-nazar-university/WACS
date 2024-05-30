<?php

include ("database.php");

header("Access-Control-Allow-Origin: *");

// Припустимо, ці дані ви отримуєте з бази даних або іншого джерела
$profileData = [
	'name' => 'Іван',
	'surname' => 'Іванов',
	'patronymic' => 'Іванович',
	'address' => 'Київ, вул. Хрещатик, 1'
];

// Повертаємо дані у форматі JSON
header('Content-Type: application/json');
echo json_encode($profileData);