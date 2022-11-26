<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    header('Content-Type: application/json; charset=utf-8');  

    include 'connection.php';

    function getEmployee($conn){
        $sql = "SELECT * FROM funcionario";
        $res = $conn->query($sql);
        while($row = $res->fetch_assoc()){
            if($row['userAdmin'] == 0 && $row['idEscala'] >=1){
                $array[] = array('nome' => $row['nome']);
            }
        }
        return $array;
    }

    $conn = getConn();
    $array = getEmployee($conn);
    echo json_encode($array);
    closeConn($conn);