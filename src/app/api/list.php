<?php
/**
 * Returns the list of cars.
 */
require 'connect.php';
    
$users = [];
$sql = "SELECT id, phone, mail FROM retreat";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $users[$cr]['id']    = $row['id'];
    $users[$cr]['phone'] = $row['phone'];
    $users[$cr]['mail'] = $row['mail'];
    $cr++;
  }
    
  echo json_encode(['data'=>$users]);
}
else
{
  http_response_code(404);
}