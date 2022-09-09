<?php
abstract class ProductModel{
protected $SKU;
protected $name;
protected $price;
protected $type;

//constructor 
public function __construct($SKU,$name,$price,$type){
$this->SKU=$SKU;
$this->name=$name;
$this->price=$price;
$this->type=$type;
}

//getters
public function getSKU(){
    return $this->$SKU;
}

public function getName(){
    return $this->name;
}

public function getPrice(){
    return $this->price;
}
public function getType(){
    return $this->getType;
}

//abstract method
abstract public function addProduct($data);


}



?>
