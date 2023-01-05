<?php
require 'connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	

	
  // Sanitize.
  $name = mysqli_real_escape_string($con, trim($request->data->name));
  $mail = mysqli_real_escape_string($con, trim($request->data->mail));
  $phone = mysqli_real_escape_string($con, trim($request->data->phone));
  $accomodation = mysqli_real_escape_string($con, trim($request->data->accomodation));

    

  // Store.
  $sql = "INSERT INTO `retreat`(`id`,`name`,`mail`,`phone`,`accomodation`)
   VALUES (null,'{$name}','{$mail}','{$phone}','{$accomodation}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $car = [
      'name' => $name,
      'mail' => $mail,
      'phone' => $phone,
      'accomodation' => $accomodation,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$car]);
  }
  else
  {
    http_response_code(422);
  }
}
