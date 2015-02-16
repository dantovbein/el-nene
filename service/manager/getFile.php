<?php
require_once "../Storage.php";

if(isset($_POST['fileId'])){ $fileId = $_POST['fileId']; };

$data = array(
	"fileId" => $fileId
);

$storge = new Storage();
echo $storge->getFile($fileId);

?>