<?php

require 'class.smtp.php';
require 'class.phpmailer.php';
require 'email_credentials.php';

// This has to be post
if($_SERVER['REQUEST_METHOD'] != 'POST') {
    //http_response_code(400);
    echo "error here with the stuff you provided";

    exit();
}

$olivermail = 'mail@oliverblohm.com';
$olivername = 'Oliver Blohm';
$clientmail = $_POST['email'];
$message = $_POST['message'];
$message.= '\n'.$_POST['requests'].'\n';
$name = $_POST['name'];
$subject = 'Request by '.$name;



$clientheaders = "From: Oliver Blohm <mail@oliverblohm.com>\r\n" .
    "Reply-To: Oliver Blohm <mail@oliverblohm.com> \r\n" .
    'X-Mailer: PHP/' . phpversion();

$oliverheaders = "From: ".$name." <".$clientmail.">\r\n" .
    "Reply-To: ".$name." <".$clientmail."> \r\n" .
    'X-Mailer: PHP/' . phpversion();

$clientmessage = 'You sent the following request to Oliver Blohm: \n'.$message.'He will respond as soon as possible.';
$olivermessage = 'Hey, \nthere is a new request for you: '.$message;

send_mail($olivermail, $olivername, $clientmail, $name, $subject, $clientmessage);
send_mail($clientmail, $name, $olivermail, $olivername, $subject, $olivermessage);

// Send first mail


function send_mail($sender, $sender_name, $receiver, $receiver_name, $subject, $body) {
    $mail = new PHPMailer;

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.live.com';  // Specify main and backup SMTP servers
    $mail->Port = 587;  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = $mail_user;                       // SMTP username
    $mail->Password = $mail_password;                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
    $mail->SMTPDebug  = 2;

    $mail->From = $sender;
    $mail->FromName =$sender_name;
    $mail->addAddress($receiver, $receiver_name);     // Add a recipient

    $mail->WordWrap = 50;                                 // Set word wrap to 50 characters

    $mail->Subject = $subject;
    $mail->Body    = $body;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;

    } else {
        echo 'Message has been sent';
    }
}



?>
