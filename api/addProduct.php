<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include "../models/ProductModel.php";

$data = json_decode(file_get_contents("php://input"));

if ($data->type == 'Dvd') {
    $dvd = new Dvd($data->SKU, $data->name, $data->price, $data->type, $data->size);
    $dvd->addProduct($dvd);
} elseif ($data->type == 'Furniture') {
    $furniture = new Furniture($data->SKU, $data->name, $data->price, $data->type, $data->height, $data->width, $data->length);
    $furniture->addProduct($furniture);
} elseif ($data->type == 'Book') {
    $book = new Book($data->SKU, $data->name, $data->price, $data->type, $data->weight);
    $book->addProduct($book);
} else {
    echo json_encode(array('error' => 'Failed to add product'));
}
