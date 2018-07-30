<?php

if(isset($_POST['submit'])) {
  $name = $_POST['Name'];
  $email = $_POST['Email'];
  $subject = $_POST['Subject'];
  $message = $_POST['Message'];
  $mailTo = $email;
  $headers = "From: ".$email;
  $txt = "You have received an email from ".$name.".\n\n".$message;
  mail($mailTo, $subject, $message, $headers);
  header("Location: index.html?mailsend");
}
