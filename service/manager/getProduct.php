<?php
require_once "../Storage.php";

if(isset($_POST['productId'])){ $productId = $_POST['productId']; };

$data = array(
	"productId" => $productId
);

$storge = new Storage();
echo $storge->getProduct($data);

?>