<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include('../controllers/ProductController.php');
$product_controller = new ProductController();
$products = $product_controller->getProducts();
echo json_encode($products,JSON_NUMERIC_CHECK);

  ?>