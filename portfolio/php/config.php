<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>php</title>
</head>
<body>

	<?php 

	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$organize= $_POST['organize'];
	$message = $_POST['message'];
     
     $con = mysqli_connect('localhost','root','','portfolio');
     if(!$con){
     	die('error');
     }
     else{
     	$query = "INSERT INTO feedback(fullname,email,organize,message)Values('$fullname','$email','$organize','$message')";

     	$result=mysqli_query($con,$query);

     	if ($result) {
     		echo "  <script type='text/javascript'>
	 	              alert('submitted successfully');
	 	               window.location.assign('../index.html');
	                </script> ";
     	}
     	else{
     		echo "<script type='text/javascript'>
	 	              alert('sorry, form not submitted');
	 	               window.location.assign('../index.html');
	                </script> ";
     	}
     }

	 ?>



</body>
</html>