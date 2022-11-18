<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');  

    include 'connection.php';

    function getScale($conn){
        $data = json_decode(file_get_contents("php://input"));
        $nome = $data->nome; 
        $sql = "SELECT * FROM funcionario join escala on funcionario.idEscala = escala.idEscala";
        $res = $conn->query($sql);
        while($row = $res->fetch_assoc()){
            if($nome == $row['nome']){
                $array = array('segunda' => $row['segunda'], 'terca' => $row['terca'], 'quarta' => $row['quarta'],
                'quinta' => $row['quinta'], 'sexta' => $row['sexta'], 'sabado' => $row['sabado'], 'domingo' => $row['domingo']);
                return $array;
            }  
        }
        return 'error';
    }

    $conn = getConn();
    $array = getScale($conn);
    echo json_encode($array);
    closeConn($conn);