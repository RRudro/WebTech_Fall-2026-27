<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset = "UTF-8">
        <title> Registration </title>
        <link rel = "stylesheet" href="../Design/Design.css">
    </head>
    <body>
        <h1> Registration Form </h1>
        <form method ="post" action="#">
        
        <label for = "Name"> Name </label>
        <input type ="text" id = "name" name="name">

        <label for = "Phone"> Phone </label>
        <input type = "tel" id="Phone" name ="Phone">

        <label for="Email"> Email </label>
        <input type ="email" id="Email" name="Email">
        
        <label for="username"> Username</label>
        <input type="text" id="username" name="username">

        <label for="password"> Password </label>
        <input type="password" id="password" name="password">

        <input type="submit" id="submit" value="Register">

        </form>
    </body>
</html>

<?php
$color="red";
echo "My Color is " .$color."<br>";
Echo "My Color is " .$color."<br>";
ECHO "My Color is " .$color."<br>";

//echo vs print

$text1 = "Hello World of Web Tech";
$text2 = "World of AIUB";

echo "Print Value of text 1:".$text1." ".$text2;
echo "<h1> Print Value of text 1:</h1>".$text1." ".$text2;
echo "<br>";
print "<h1> Print Value of text 1:</h1>".$text1." ".$text2;

echo "<br>";
//"" and ''
$text3 = "AIUB";
echo 'Print: $text3';
echo "<br>";
echo "Print: $text3";


echo "<br>";
$number1 = 10;
$number2 = 30;
echo "Total: " .$number1+$number2;
if($number1>0)
    {
        echo "Positive";
    }
else{
    echo "negative";
}
echo "<br>";
var_dump($number1);
var_dump($number2);
var_dump($text1);
echo "<br>";
$cars = array("Volvo", "BMW", "TOYOTA");
for($i = 0; $i<3; $i++)
    {
        echo $cars[$i];
    }
echo "<br>";
var_dump($cars);

$car2 = array("brand"=> "TOYOTA", "Model"=>"CH-R", "Year"=>"2022");
echo $car2["brand"];
echo "<br>";
foreach ($car2 as $x =>$y){
    echo "$x: $y <br>";
}



?>