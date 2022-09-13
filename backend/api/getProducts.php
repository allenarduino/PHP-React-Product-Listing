<?php
include('../controllers/ProductController.php');
$product_controller = new ProductController();
$products = $product_controller->getProducts();
echo json_encode($products,JSON_NUMERIC_CHECK);

  ?>