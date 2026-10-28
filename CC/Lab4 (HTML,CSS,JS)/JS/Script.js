console.log("JS Connected");
// alert("JS Connected");


let x;
x=10;
x="Ten";
console.log(x);


//case 1
var name = "AIUB";
var name;
console.log(name);

//case 2
var name = "AIUB";
var name = "NSU";
console.log(name);


//case 3
// let name="AIUB";
// let name="NSU";
// console.log(name); 

//number
let a = 3.14;
let b = 4.15;
console.log((a * 10 +b * 10)/10);


let a1 = 0.2;
let b1 = 0.1;
let sum = (a1 * 10 + b1 * 10) / 10;
console.log(sum);


//strings
let carname ="VOLVO";
let busname ="Greenline";
console.log(carname.length);
console.log(carname.toLowerCase());
console.log(carname.indexOf("L"));
console.log(carname.slice(0,4));
console.log(carname+" "+busname);

//null vs undefined
let busname1;
console.log(busname1);

let carname2 = null;
console.log(carname2);


//collect data from HTML Form
function collect_data()
{
    let Name=validName();
    let Age=validAge();
    let Gender = validateGender();
    let Email = validateEmail();
 
    return Name && Age && Gender && Email;
}

function validName()
{
    let Pname= document.getElementById("PatientName").value;
    let Error = document.getElementById("NameError");
    if(Pname=="")
    {
        Error.innerHTML = "* Please!! Enter the Name Carefully";
    }
    else if (Pname.length<6)
    {
        Error.innerHTML = " Name Must Carry At least 6 Character";
    }
    else{
        Error.innerHTML = "Patient Name: "+Pname;
    }
    return false;
} 

function validAge()
{
    let PAge= document.getElementById("PatientAge").value;
    let Error = document.getElementById("AgeError");
    if(PAge=="")
    {
        Error.innerHTML = "* Please!! Enter the Age";
    }
    else if(PAge<0 && PAge>100)
    {
        Error.innerHTML = "Age Must Be between 0-100";
    }
    else{
        Error.innerHTML = "Patient Age: "+PAge;
    }
    return false;
} 
function validateEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let RegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email==="")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    }
    else if (!RegularExpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Email in the Exact Format";
        return false; 
    }
    else{
        Error.innerHTML = "Patient Email: "+Email;
        return true;
    }
}


