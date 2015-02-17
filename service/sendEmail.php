<?php 
header('Access-Control-Allow-Origin: *');

if(isset($_POST['userEmail'])) { $userEmail = $_POST['userEmail']; };
if(isset($_POST['userName'])){ $userName = $_POST['userName']; };
if(isset($_POST['userLastName'])){ $userLastName = $_POST['userLastName']; };
if(isset($_POST['userComment'])){ $userComment = $_POST['userComment']; };

/*if(isset($_GET['userEmail'])) { $userEmail = $_GET['userEmail']; };
if(isset($_GET['userName'])){ $userName = $_GET['userName']; };
if(isset($_GET['userLastName'])){ $userLastName = $_GET['userLastName']; };
if(isset($_GET['userComment'])){ $userComment = $_GET['userComment']; };*/
//$to = 'dtovbein@gmail.com';
$to = 'gordillo.nico@gmail.com';
$subject = 'Mensaje de ' . $userName . ' ' . $userLastName . ' a través de blockelnene.com.ar';
$message = $userComment;
$headers = 'From: ' . $userEmail . "\r\n" .
    'Reply-To: ' . $userEmail . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>