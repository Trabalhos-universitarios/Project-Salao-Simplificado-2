<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');  
    
    include 'connection.php';
  
    function getFuncEscala($conn){
        $sql = "SELECT * FROM funcionario join escala on funcionario.idEscala = escala.idEscala";
        $res = $conn->query($sql);
        while($row = $res->fetch_assoc()){
            $array[] = array('nome' => $row['nome'], 'segunda' => $row['segunda']
            , 'terca' => $row['terca'], 'quarta' => $row['quarta']
            , 'quinta' => $row['quinta'], 'sexta' => $row['sexta']
            , 'sabado' => $row['sabado'], 'domingo' => $row['domingo']);
        }
        return $array;
    }

    $conn = getConn();
    $array = getFuncEscala($conn);
    echo json_encode($array);
    closeConn($conn);
