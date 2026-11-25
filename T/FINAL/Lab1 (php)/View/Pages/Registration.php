<!DOCTYPE html>
<html lang = "en-US">
    <head>
        <meta charset="UTF-8">
        <title> Registration </title>
        <link rel="stylesheet" href="../Design/Design.css">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1> Registration Page </h1>
        <form method ="post" action="" target="_blank"> 
            <label for="Name"> Name </label>
            <input type="text" id="Name" name="name">

            <label for="phone"> Phone </label>
            <input type="tel" id="Phone" name="phone">

            <label for="Email"> Email </label>
            <input type="email" id="Email" name="Email">

            <label for="Username"> Username </label>
            <input type="text" id="Username" name="Username">

             <label for="Password"> Password </label>
            <input type="password" id="Password" name="Password">

            <input type="submit" id="submit" value="Register">

        </form>
    </body>
</html>

<?php
echo "Hello World from outside of HTML";
echo "<br>";
$color= "red";
$color2= "green";
ECHO $color;
echo "<br>";
echo "$color"." "."$color2";
echo "<br>";
print $color;

echo "<br>";

echo "Hello $color <br>";
echo 'Hello $color <br>';

$number1 = 20;
$number2 = 40;
$text = "Web Technologies";

echo $number1 + $number2 ."<br>";

var_dump($number1);
var_dump($text);
echo "<br>";

$cars= array("BMW", "TOYOTA", "SUZUKI", "HONDA");
echo "$cars[0] <br>";
for($i = 0; $i<4; $i++)
    {
        echo "$cars[$i] <br>";
    }
var_dump($cars);
echo "<br>";
$name = array("Name"=>"Mr. Kodu", "CGPA"=>3.98, "Id"=>"23-------2");
var_dump($name);
echo "<br>";
foreach ($name as $x=>$y)
    {
        echo "$x : $y <br>";
    }

if($number1>0)
    {
        echo "Positive";
    }






?>

