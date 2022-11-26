<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');   
    
        include 'connection.php';
        
        function cadastro($conn){

            $data = json_decode(file_get_contents("php://input"));
            $nome = $data->nome;
            $cpf = $data->cpf;
            $email = $data->email;
            $senha = md5($data->senha);

            $sql = "SELECT * FROM funcionario WHERE email = '{$email}'";
            $res = $conn->query($sql);
            if($res->num_rows > 0){
                return 'error';
            }
            else{
                if ($nome == '' || $cpf == '' || $email == '' || $senha == '') {
                    return 'error';
                }
                else{
                    $sql = "INSERT INTO funcionario (nome, cpf, email, senha) 
                    VALUES ('{$nome}', '{$cpf}', '{$email}', '{$senha}')";

                    $conn->query($sql);
                } 
            } 
            return 'success';
        }
        
        $conn = getConn();
        echo json_encode(cadastro($conn));
        closeConn($conn);
?>