<?php

// var_dump($_POST);
// var $debug = var_export($_POST, true);

// ob_start();
// var_dump($_POST);
// var $result = ob_get_clean();


// $name = $_POST['user_name'];

$phone = $_POST['phone'];
// $phone = var_export($_POST, true);

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'self67@list.ru';                 // Наш логин
$mail->Password = 'qwe123';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('self67@list.ru', 'Oleg Kuzmin');   // От кого письмо 
$mail->addAddress('seltor@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новый клиент';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Телефон: ' . $phone . ' <br> ';// .	$debug . '';
// $mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
