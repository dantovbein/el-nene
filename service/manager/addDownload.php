<?php
require_once "../Storage.php";

if(isset($_POST['userId'])){ $userId = $_POST['userId']; };
if(isset($_POST['fileId'])){ $fileId = $_POST['fileId']; };


$data = array(
	"userId" => $userId,
	"fileId" => $fileId	
);

$storage = new Storage();
echo $storage->addDownload($data);
?>