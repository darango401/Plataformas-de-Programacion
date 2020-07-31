<?php
$salt = "DAA2098";
echo md5($_POST['contrasena'].$salt);
?>