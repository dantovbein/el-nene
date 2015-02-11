<?php
class Storage {
	
	/*public $host = "localhost";
	public $server = "root";
	public $password = "";
	public $dataBase = "elnene";*/

	public $host = "elnene.db.10915528.hostedresource.com";
	public $server = "elnene";
	public $password = "Estrada2014Aesa@";
	public $dataBase = "elnene";
	
	private $sql;

	public function Storage() { }

	private function connect() {
		$this->sql = mysql_connect($this->host , $this->server , $this->password) or die ('Error al conectarse a sql');
		mysql_select_db($this->dataBase) or die ("Error al conectarse a la Base de Datos");
	}

	private function close() {
		mysql_close($this->sql);
	}

	public function insertProfesor($data) {
		$this->connect();

		/*$query = 'SELECT * FROM vendors WHERE vendor_user_name="' . $user . '" AND vendor_password="' . $password . '"';
		$result = mysql_query($query);
		$row = mysql_fetch_assoc($result);

		$dataQuery = array();
		$obj->idVendor = $row['id_vendor'];
		$obj->idDevice = $row['id_device'];
		$obj->user = $row['vendor_user_name'];
		$obj->password = $row['vendor_password'];
		$obj->fullName = $row['vendor_full_name'];
		$obj->code = $row['vendor_unlock_code'];
		array_push($dataQuery, $obj);
		
		echo json_encode($dataQuery);
		$this->close();	*/
	}

	public function getProfesor() {
		$this->connect();

		$query = 'SELECT * FROM DOCENTES';
		$result = mysql_query($query);
		/*$row = mysql_fetch_assoc($result);

		$dataQuery = array();
		$obj->idVendor = $row['id_vendor'];
		$obj->idDevice = $row['id_device'];
		$obj->user = $row['vendor_user_name'];
		$obj->password = $row['vendor_password'];
		$obj->fullName = $row['vendor_full_name'];
		$obj->code = $row['vendor_unlock_code'];
		array_push($dataQuery, $obj);
		
		echo json_encode($dataQuery);*/
		printf($result);
		$this->close();	
	}


}
?>