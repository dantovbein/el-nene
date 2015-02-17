<?php 
header('Access-Control-Allow-Origin: *');

if(isset($_POST['userEmail'])){ $userEmail = $_POST['userEmail']; };
if(isset($_POST['userName'])){ $userName = $_POST['userName']; };
if(isset($_POST['userLastName'])){ $userLastName = $_POST['userLastName']; };
if(isset($_POST['userComment'])){ $userComment = $_POST['userComment']; };

$to = 'dtovbein@gmail.com';
$subject = 'Mensaje de ' . $userName . ' ' . $userLastName . ' a través de blockelnene.com.ar';
$message = $userComment;
$headers = 'From: ' . $userEmail . "\r\n" .
    'Reply-To: ' . $userEmail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>