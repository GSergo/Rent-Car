<?php

    $userPhone = $_POST['userPhone'];
    $userTarif = $_POST['checkbox'];


  
    // Load Composer's autoloader
    require 'phpmailer/Exception.php';
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';
    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer\PHPMailer\PHPMailer();
  
    try {
      //Server settings
      $mail->SMTPDebug = 0;                      // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
      $mail->SMTPAuth   =  true;                                   // Enable SMTP authentication
      $mail->Username   = 'antistlent@gmail.com';                     // SMTP username
      $mail->Password   = 'm6opRKk4';                               // SMTP password
      $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       =  465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
  
      //Recipients
      $mail->setFrom('antistlent@gmail.com', 'Сергей');
      $mail->addAddress('crazy.steam24@yandex.ru');     // Куда падают письма
  
      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Новая заявка с сайта';
      $mail->Body    = "Телефон клиента: ${userPhone}, его тариф: ${userTarif}";
    
  
      $mail->send();
      header('Location: thanks.html');     
    } catch (Exception $e) {
      echo "Письмо не было отправлено. Код ошибки: {$mail->ErrorInfo}";
    }