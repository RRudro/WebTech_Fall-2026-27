console.log("Hello JS, Connected");
// alert("Hello JS");

let x;
x=10;
x="ten";
console.log(x);

//case 1
var name = "AIUB";
var name;
console.log(name);


//case 2
var name="AIUB";
var name="BUET";
console.log(name);

//case 3
let name1="AIUB";
let name2="NSU";
console.log(name1);

//numbers
let a=3.14; 
let b=4.15;
let sum = (a * 10 + b * 10) / 10; 
console.log("Sum of: ", sum)

//numbers
let a1=0.2; 
let b1=0.1;
let sum1 = (a1 * 10 + b1 * 10) / 10; 
console.log("Sum of: ", sum1);



//string
let carname = "VOLVO";
let busname = "GreenLine";
console.log(carname.length);
console.log(carname.toLowerCase());
console.log(carname.slice(0,5));
console.log(carname.indexOf("L"));
console.log(carname +" "+""+busname);

let cars=null;
console.log(cars);

function collect_data()
{
    let validName= validateName();


    

    let PAge= document.getElementById("PatientAge").value;
    console.log(PAge);
    return false;
}


function validateName(){
    let Pname=document.getElementById("PatientName").value;
    let Error= document.getElementById("NameError");
    if(Pname=="")
    {
        Error.innerHTML = "Enter The Name";
    }
    else if(Pname.length<6)
    {
        Error.innerHTML = "Name Must be at least 6 Char";
    }
    else{
        Error.innerHTML = "Patient Name: ",Pname;
    }
    return false;
}



