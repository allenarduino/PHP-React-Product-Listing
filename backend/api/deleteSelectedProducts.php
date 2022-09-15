<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "../controllers/ProductController.php";

$json_data = json_decode(file_get_contents("php://input"));


if($json_data !==null){
    $data=$json_data->products;
    $num=$json_data->numOfProducts;
    $product_controller=new ProductController();
    $product_controller->deleteSelectedProducts($data,$num);
    echo json_encode(array("message"=>"Products deleted"));
}
else{
    echo json_encode(array("error"=>"Data must not be empty"));
}