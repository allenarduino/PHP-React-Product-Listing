<?php
include '../config/db.php';
class ProductController
{
  

    public function addDVD($dvd)
    {
        $conn = db();
        $sku = mysqli_escape_string($conn, $dvd->getSKU());
        $name = mysqli_escape_string($conn, $dvd->getName());
        $price = mysqli_escape_string($conn, $dvd->getPrice());
        $type = mysqli_escape_string($conn, $dvd->getType());
        $size = mysqli_escape_string($conn, $dvd->getSize());

        $sql = "INSERT INTO
       products(SKU,name,price,type,size)
       VALUES ('$sku','$name','$price','$type','$size')";

        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("message" => "product added successfully"));
        } else {
            echo "Error" . $sql . mysqli_error($conn);
        }
        mysqli_close($conn);
    }

    public function addFurniture($furniture)
    {
        $conn = db();
        $sku = mysqli_escape_string($conn, $furniture->getSKU());
        $name = mysqli_escape_string($conn, $furniture->getName());
        $price = mysqli_escape_string($conn, $furniture->getPrice());
        $type = mysqli_escape_string($conn, $furniture->getType());
        $height = mysqli_escape_string($conn, $furniture->getHeight());
        $width = mysqli_escape_string($conn, $furniture->getWidth());
        $length = mysqli_escape_string($conn, $furniture->getLength());

        $sql = "INSERT INTO
       products(SKU,name,price,type,height,width,length)
       VALUES ('$sku','$name','$price','$type','$height','$width','$length')";

        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("message" => "product added successfully"));
        } else {
            echo "Error" . $sql . mysqli_error($conn);
        }
        mysqli_close($conn);
    }

    public function addBook($book)
    {
        $conn = db();
        $sku = mysqli_escape_string($conn, $book->getSKU());
        $name = mysqli_escape_string($conn, $book->getName());
        $price = mysqli_escape_string($conn, $book->getPrice());
        $type = mysqli_escape_string($conn, $book->getType());
        $weight = mysqli_escape_string($conn, $book->getWeight());

        $sql = "INSERT INTO
       products(SKU,name,price,type,weight)
       VALUES ('$sku','$name','$price','$type','$weight')";

        if (mysqli_query($conn, $sql)) {
            echo json_encode(array("message" => "product added successfully"));
        } else {
            echo "Error" . $sql . mysqli_error($conn);
        }
        mysqli_close($conn);
    }

    public function getProducts()
    {
        $conn = db();
        $sql = "SELECT* FROM products ORDER BY products.id DESC";
        $result = mysqli_query($conn, $sql);
        return $products = mysqli_fetch_all($result, MYSQLI_ASSOC);
        mysqli_close($conn);
    }

    public function deleteSelectedProducts($data, $num)
    {
        $conn = db();
        for ($i = 0; $i < $num; $i++) {
            $productToDelete = $data[$i];
            $sql = "DELETE FROM products WHERE id='$productToDelete'";
            mysqli_query($conn, $sql);
        }
    }
}
