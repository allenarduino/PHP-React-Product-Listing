<?php

function db(){
    static $conn;
    if($conn==NULL){
        $conn=new mysqli("localhost","root","","scandiweb");
    }
    return $conn;
}
?>