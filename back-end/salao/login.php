<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');   

    include 'connection.php';
    function login($conn){
        $data = json_decode(file_get_contents("php://input"));
        $email = $data->email;
        $senha = md5($data->senha);
        $sql = "SELECT * FROM cliente WHERE email = '{$email}' AND senha = '{$senha}'";
        $res = $conn->query($sql);
        if($res->num_rows > 0){
            return 'success';
        }
        else{
            return 'error';
        }
    }
    $conn = getConn();
    echo json_encode(login($conn));
    closeConn($conn);
?>