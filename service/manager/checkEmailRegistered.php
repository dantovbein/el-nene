<?php
require_once "../Storage.php";

if(isset($_POST['userEmail'])){ $userEmail = $_POST['userEmail']; };

$data = array(
	"userEmail" => $userEmail
);

$storage = new Storage();
echo $storage->checkEmailRegistered($data);
?>