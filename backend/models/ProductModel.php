<?php
include ("../controllers/ProductController.php");
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
    return $this->SKU;
}

public function getName(){
    return $this->name;
}

public function getPrice(){
    return $this->price;
}
public function getType(){
    return $this->type;
}

//abstract method
abstract public function addProduct($data);


}

class Dvd extends ProductModel{
    public $data;
    protected $size;

    public function __construct($SKU,$name,$price,$type,$size){
        $this->size=$size;
        parent::__construct($SKU,$name,$price,$type);
    }
    public function setSize($size){
        $this->size=$size;
    }

    public function getSize(){
       return $this->size;
    }

    public function addProduct($dvd){
        $product_controller=new ProductController();
        $product_controller->addDVD($dvd);
    }
}


class Furniture extends ProductModel
{
    protected $height;
    protected $width;
    protected $length;
    public function __construct($SKU, $name, $price, $type,$height,$width,$length) {
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
        parent::__construct($SKU, $name, $price, $type);
    }
    public function getHeight(){
        return $this->height;
    }
    public function getWidth()
    {
        return $this->width;
    }
    public function getLength()
    {
        return $this->length;
    }
    public function addProduct($furniture){
        $product_controller=new ProductController();
        $product_controller->addFurniture($furniture);
    }

}

class Book extends ProductModel
{
    protected $weight;
    public function __construct($SKU, $name, $price, $type,$weight) {
        $this->weight = $weight;
        parent::__construct($SKU, $name, $price, $type);
    }
    public function getWeight()
    {
        return $this->weight;
    }
    public function addProduct($book){
        $product_controller = new ProductController();
        $product_controller->addBook($book);
    }
}




?>
