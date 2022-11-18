<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');  
    
        include 'connection.php';

        function setSchedule($conn){
            $data = json_decode(file_get_contents("php://input"));
            $cliente = $data->emailCliente;
            $funcionario = $data->nomeFuncionario;
            $dataAg = $data->dataAgendamento;
            $hora = $data->hora;

            $sql = "SELECT * FROM cliente where email = '{$cliente}'";
            $res = $conn->query($sql);
            $row = $res->fetch_assoc();
            $idCliente = $row['idCliente'];

            $sql = "SELECT * FROM funcionario where nome = '{$funcionario}'";
            $res = $conn->query($sql);
            $row = $res->fetch_assoc();
            $idFuncionario = $row['idFuncionario'];

            $sql = "INSERT INTO agendamento (idCliente, idFuncionario, dataAg, hora) 
                VALUES ('{$idCliente}', '{$idFuncionario}', '{$dataAg}', '{$hora}')";
            
            $res = $conn->query($sql);
            
            return 'success';
            
        }

        $conn = getConn();
        echo json_encode(setSchedule($conn));
        closeConn($conn);

?>