<?php
    function getConn(){
        define('HOST', 'localhost');
        define('USER', 'root');
        define('PASS', '');
        define('DB', 'salaosimp');
    
        $conn = new mysqli(HOST, USER, PASS, DB);
        
        return $conn;
    }

    function closeConn($conn){
        $conn->close();
    }
?>