<?php
require_once "../Storage.php";

if(isset($_POST['userEmail'])){ $userEmail = $_POST['userEmail']; };
if(isset($_POST['userName'])){ $userName = $_POST['userName']; };
if(isset($_POST['userLastName'])){ $userLastName = $_POST['userLastName']; };
if(isset($_POST['userSchool'])){ $userSchool = $_POST['userSchool']; };
if(isset($_POST['userAddress'])){ $userAddress = $_POST['userAddress']; };
if(isset($_POST['userCity'])){ $userCity = $_POST['userCity']; };
if(isset($_POST['userSubject'])){ $userSubject = $_POST['userSubject']; };


$data = array(
	"userEmail" => $userEmail,
	"userName" => $userName,
	"userLastName" => $userLastName,
	"userSchool" => $userSchool,
	"userAddress" => $userAddress,
	"userCity" => $userCity,
	"userSubject" => $userSubject	
);

$storage = new Storage();
echo $storage->addUser($data);
?>