<!DOCTYPE html> 
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title> Registration </title>
        <link rel="stylesheet" href="../Design/Design.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
        <h1> Registration Page </h1>
        <form method="post" action="#" target="_blank"> 
        
        <label for="name"> Name </label>
        <input type="text" id="Name" name="name">

        <label for="Phone"> Phone </label>
        <input type="tel" id="Phone" name="Phone">

        <label for="Email"> Email </label>
        <input type="email" id="Email" name="Email">

        <label for="username"> User Name </label>
        <input type="text" id="UserName" name="Username">

        <label for="password"> Password </label>
        <input type="password" id="password" name="password">

        <input type="submit" id="submit" value="Register">

        </form>
    </body>

</html>

<?php
echo "Hello World from Outside of HTML Form <br>";
$color="red";
$color2 = "green";
ECHO "$color <br>";
Echo "$color <br>";
echo $color." ".$color2."<br>";
print "$color <br>";

$text = "AIUB";
echo "This is an University named $text <br>";
echo 'This is an University named $text <br>';

$number1=10;
$number2=20;
echo $number1+$number2."<br>";
var_dump($number1);
var_dump($text);

$cars = array("BMW", "TOYOTA", "SUZUKI", "HONDA", "RR");
var_dump($cars);
for($i=0 ; $i<5;  $i++)
    {
        echo "$cars[$i]". " ";
    }

$student = array("Name"=>"Mr. Kalam", "CGPA"=> 3.97, "Age"=>21, "Credit Complete"=>101);
var_dump($student);
echo "<br>";
foreach($student as $x=>$y)
    {
        echo "$x : $y <br>";
    }

if($number1>0)
    {
        echo"Positive";
    }
else{
    echo "Negative";
}

?>