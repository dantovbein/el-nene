<?php
class Storage {
	
	/*
	public $host = "localhost";
	public $server = "root";
	public $password = "";
	public $dataBase = "elnene";
	*/

	//
	public $host = "elnene.db.10915528.hostedresource.com";
	public $server = "elnene";
	public $password = "Estrada2014Aesa@";
	public $dataBase = "elnene";
	//
	
	private $sql;

	public function Storage() { }

	private function connect() {
		$this->sql = mysql_connect($this->host , $this->server , $this->password) or die ('Error al conectarse a sql');
		mysql_select_db($this->dataBase) or die ("Error al conectarse a la Base de Datos");
	}

	private function close() {
		mysql_close($this->sql);
	}

	public function addUser($data) {
		$this->connect();
		$query = 'INSERT INTO USERS (USER_EMAIL,USER_NAME,USER_LAST_NAME,USER_SCHOOL,USER_ADDRESS,USER_CITY,USER_SUBJECT) VALUES ("' . $data['userEmail'] . '","' . $data['userName'] . '","' . $data['userLastName'] . '","' . $data['userSchool'] . '","' . $data['userAddress'] . '","' . $data['userCity'] . '","' . $data['userSubject'] . '")';
		$result = mysql_query($query);
		
		$data = array();
		$obj = new stdClass;
		$obj->userId = mysql_insert_id();
		array_push($data, $obj);
		echo json_encode($data);
		$this->close();	
	}

	public function addDownload($data) {
		$this->connect();
		$query = 'INSERT INTO DOWNLOADS (USER_ID,FILE_ID) VALUES ("' . $data['userId'] . '","' . $data['fileId'] . '")';
		$result = mysql_query($query);
		echo $result;
		$this->close();	
	}

	public function checkEmailRegistered($data) {
		$this->connect();
		$query = 'SELECT * FROM USERS WHERE USER_EMAIL="' . $data['userEmail'] . '"';
		$result = mysql_query($query);
		$data = array();
		while($row = mysql_fetch_array($result)) {
			$obj = new stdClass;
			$obj->userId = $row['USER_ID'];
			$obj->userEmail = $row['USER_EMAIL'];
			array_push($data, $obj);
		}
		echo json_encode($data);
		$this->close();	
	}

	public function getFile($data){
		$this->connect();
		$query = 'SELECT * FROM FILES WHERE FILE_ID="' . $data['fileId'] . '"';
		$result = mysql_query($query);
		$data = array();
		while($row = mysql_fetch_array($result)) {
			$obj = new stdClass;
			$obj->fileId = $row['FILE_ID'];
			$obj->fileName = $row['FILE_NAME'];
			$obj->filePath = $row['FILE_PATH'];
			array_push($data, $obj);
		}
		echo json_encode($data);
		$this->close();	
	}

	public function getProduct($data){
		$this->connect();
		mysql_set_charset('utf8');
		$query = 'SELECT * FROM PRODUCTS WHERE PRODUCT_ID="' . $data['productId'] . '"';
		$result = mysql_query($query);
		$data = array();
		while($row = mysql_fetch_array($result)) {
			$obj = new stdClass;
			$obj->productId = $row['PRODUCT_ID'];
			$obj->productName = $row['PRODUCT_NAME'];
			$obj->productDetails = $row['PRODUCT_DETAILS'];
			array_push($data, $obj);
		}
		echo json_encode($data);
		$this->close();	
	}
}
?>