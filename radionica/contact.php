<?php

// CHANGE THE VARIABLES BELOW
$EmailTo = "vvlladimir@gmail.com";
$Subject = "Uradi Sam";

$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
// CHANGE THE URL BELOW TO YOUR "THANK YOU" PAGE
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-hvala.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=kontakt-greska.html\">";
}
?>