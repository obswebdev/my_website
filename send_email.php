<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["fullname"];
    $email_message = $_POST["message"];
    $subject = $_POST['subject'];
    $sender_email = $_POST['emailadddress'];

     // Check if mobile is provided, otherwise set to "no number"
     $mobile = isset($_POST["mobile_number"]) && !empty($_POST["mobile_number"]) ? $_POST["mobile_number"] : "no number";

    // Set up email parameters
    $to = "obsyautomation@gmail.com";  // Replace with your email address
    $subject = "This has been redirected from Personal Website by $fullname - $subject";
    $headers = "From: obsyautomation@gmail.com";
    $message_body = "Name: $fullname\nEmail: $email\nMessage:\n$email_message \nSender Mobile: $mobile \nSender Email: $sender_email";

    // Send email
    if (mail($to, $subject, $message_body, $headers)) {
        echo "Thank you for contacting us. We will get back to you soon!";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}

?>