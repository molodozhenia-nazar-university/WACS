<?php

include ("database.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// $name = $data['name'];
// $surname = $data['surname'];
// $phone = $data['phone'];
// $password = $data['password'];

$name = isset($data['name']) ? $data['name'] : null;
$surname = isset($data['surname']) ? $data['surname'] : null;
$phone = isset($data['phone']) ? $data['phone'] : null;
$password = isset($data['password']) ? $data['password'] : null;



http_response_code(200);
header('Content-type: application/json');

if ($phone != null && $password != null && $name == null && $surname == null) {

	// Екранування значень для захисту від SQL-ін'єкцій
	$phone = pg_escape_string($dbconnect, $phone);
	$password = pg_escape_string($dbconnect, $password);

	// Підготовка запиту
	$query = "SELECT * FROM customer WHERE phone_customer = '$phone' AND password_customer = '$password'";

	// Виконання запиту
	$result = pg_query($dbconnect, $query);

	$row = pg_fetch_assoc($result);

	if ($row) {
		// echo json_encode(array('message' => 'Ви успішно авторизовані!', 'phone' => $row['phone_customer'], 'password' => $row['phone_password']));
		echo json_encode(array('action' => true, 'message' => 'Ви успішно авторизовані!', 'phone' => $phone, 'password' => $password));
	} else {
		echo json_encode(array('action' => false, 'message' => 'Акаунт не існує!'));
	}

} else if ($phone != null && $password != null && $name != null && $surname != null) {
	// $query = "INSERT INTO \"customer\" (name_customer, surname_customer, phone_customer, password_customer) VALUES ('$name', '$surname', '$phone', '$password')";
	// $result = pg_query($dbconnect, $query);
	echo json_encode(array('message' => 'Ви успішно зареєстровані!', 'name' => $name, 'surname' => $surname, 'phone' => $phone, 'password' => $password));
}