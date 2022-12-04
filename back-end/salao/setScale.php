<?php

    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST");
    header('Content-Type: application/json; charset=utf-8');  

    include 'connection.php';

    function setScale($conn){
        $data = json_decode(file_get_contents("php://input"));
        $segunda = $data->segunda;
        $terca = $data->terca;
        $quarta = $data->quarta;
        $quinta = $data->quinta;
        $sexta = $data->sexta;
        $sabado = $data->sabado;
        $domingo = $data->domingo;

        $sql = "INSERT INTO escala (segunda, terca, quarta, quinta, sexta, sabado, domingo
        VALUES ('{$segunda}', '{$terca}', '{$quarta}', '{$quinta}', 
        '{$sexta}', '{$sabado}', '{$domingo}')";
        
        $conn -> query($sql);

        return 'success';
    }

    $conn = getConn();
    echo json_encode(setScale($conn));
    closeConn($conn);
?>
