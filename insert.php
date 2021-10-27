
<?php 
 	$conn = mysqli_connect("127.0.0.1", "root", "",'sgo');
	$insertuser="INSERT INTO log (name,password) VALUES ('{$_GET['name']}','{$_GET['password']}')";
	$resultinsertuser=mysqli_query($conn,$insertuser);


 
 header("Location: https://sgo.e-yakutia.ru");
exit;

 ?>

									