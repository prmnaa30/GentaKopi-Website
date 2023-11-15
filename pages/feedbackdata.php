<!DOCTYPE html>
<html>
    <?php
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['msg'];
    ?>
    email: <?php echo $email ?> <br>
    subject: <?php echo  $subject ?> <br>
    message: <?php echo  $message ?> <br>
</html>