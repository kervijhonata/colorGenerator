<?php

    if(
        isset($_POST['nome']) and
        isset($_POST['endereco']) and
        isset($_POST['idade']) and
        isset($_POST['tel']) and
        isset($_POST['competencias']) and
        isset($_POST['formacao_academica']) and
        isset($_POST['historico']) and
        isset($_POST['habilidade'])
    ) {

    $data=[$_POST['nome'],$_POST['endereco'],$_POST['idade'], $_POST['tel'],$_POST['competencias'],$_POST['formacao_academica'],$_POST['historico'],$_POST['habilidade']];


    $fp = fopen('curriculo.txt', 'a');
    if(fwrite($fp, print_r($data, true))){
    print "Dados enviados com Sucesso";
    fclose($fp);
    }
    // file_put_contents('filename.txt', print_r($b, true));

    }
?>