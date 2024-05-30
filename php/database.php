<?php

// Параметри підключення
$host = "dpg-cp8ok3tds78s73c77vvg-a.oregon-postgres.render.com";
$port = "5432";
$dbName = "wacs_db";
$userName = "nau";
$password = "PZV7EtTFrkZYlzhAQiHMjom4Tre8xmOQ";

// Створення з'єднання
$connect = "host=$host port=$port dbname=$dbName user=$userName password=$password";

// Встановлення з'єднання з базою даних
$dbconnect = pg_connect($connect);