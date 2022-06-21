<?php require_once('./functions.php'); ?> 
<?php
if(isset($_POST)){
    $name = $_POST['first-name']; // Get Name value from HTML Form
    $email_id = $_POST['email']; // Get Email Value
    $mobile_no = $_POST['mobile']; // Get Mobile No
    $bussiness_name = $_POST['business-name']; // Get Bussnes Name
    $business_url = $_POST['business-url']; // Get Bussnes Url
    $msg = $_POST['message']; // Get Message Value

    if(empty($name)){
        echo json_encode(array('status'=>false,'message'=>'Please Enter First Name.','key'=>'first-name'));
        die();
    }
    if(empty($email_id)){
        echo json_encode(array('status'=>false,'message'=>'Please Enter email address.','key'=>'email'));
        die();
    }
    if(empty($msg)){
        echo json_encode(array('status'=>false,'message'=>'Please Enter Message.','key'=>'message'));
        die();
    }
    if(empty($mobile_no)){
        echo json_encode(array('status'=>false,'message'=>'Please Enter Mobile Number.','key'=>'mobile'));
        die();
    }
     
    $to = "info@vigour360.com"; // You can change here your Email
    $subject = "Vigour Contact Form Submission"; // This is your subject
     
    // HTML Message Starts here
    $message ='
    <html>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"> 
    <body style="font-family: "Ubuntu", sans-serif;">
        <div>
            <table style="color:#382F31; width: 620px; margin: 20px auto; box-sizing: border-box; padding: 30px 25px 20px; border:solid 1px #eaeaea; border-radius: 6px;font-size:14px;">
                <tbody>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                            <img style="width: 90px" src="'.get_site_url().'/assets/img/img_logo.png" alt="Vigour360">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <h2 style="text-align: center;margin: 20px 0 25px;">User Details</h2>
                        </td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">First & Last Name</td>
                        <td style="width: 400px">: '.$name.'</td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">Mobile Number</td>
                        <td style="width: 400px">: '. $mobile_no.'</td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">Email ID</td>
                        <td style="width: 400px">: '.$email_id.'</td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">Business Name</td>
                        <td style="width: 400px">: '.$bussiness_name.'</td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">Business Url</td>
                        <td style="width: 400px">: '.$business_url.'</td>
                    </tr>
                    <tr>
                        <td style="width:160px;font-weight:500;padding-bottom:6px">Message</td>
                        <td style="width: 400px">: '.$msg.'</td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div style="text-align: center; border-top:solid 1px #ece5e5;margin: 16px 0 0;padding: 16px 0 0">
                               <h2 style="margin: 0 0 3px;color: #382F31;">Contact Us</h2>
                                <p style="margin: 0 0 0px"><a style="color: #382F31;text-decoration: none;font-weight: 500;" href="tel:+91 8446844645">+91 8446844645</a></p>
                                <p style="margin: 0 0 0"><a style="color: #382F31;text-decoration: none;font-weight: 500;" href="mailto:varun.patidar@physiocell.com">varun.patidar@physiocell.com</a></p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
</html>
    ';
    // HTML Message Ends here
     
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: Vigour <info@vigour360.com>' . "\r\n"; // Give an email id on which you want get a reply. User will get a mail from this email id
    $headers .= 'Cc: <varun.patidar@physiocell.com>' . "\r\n";

    if( mail($to,$subject,$message,$headers) == true ) {
        echo json_encode(array('status'=>true));
        die();
    }else {
        echo json_encode(array('status'=>false,'message'=>'Something went wrong please try again later. ','key'=>''));
        die();
    }
}else{
    echo json_encode(array('status'=>false,'message'=>'Something went wrong please try again later. ','key'=>''));
    die();
}
?>