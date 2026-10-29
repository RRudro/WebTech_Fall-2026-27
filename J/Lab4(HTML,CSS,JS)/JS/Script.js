console.log("Connected");
// alert("Hello Web Tech");
let x=10;
var y=20;
console.log("Sum: ", x+y);

//case 1
var a = "AIUB";
var a;
console.log(a);

//case 2
var a ="AIUB";
var a ="NSU";
console.log(a);


//case 3
let b = "AIUB";
let b1= "NSU";
console.log(b);
console.log(b1);


let c = 3.14;
let d= 0.3;
let e = c+d;
console.log(e);
let f = 0.1 + 0.2;
console.log(f);


let car1 = "VOLVO";
let car2 ='Mazda';
console.log(car1);
console.log(car2);
console.log(car1.length);
console.log(car1.toLowerCase());
console.log(car1.slice(0,3));
console.log(car1.indexOf("V"));
console.log(car1.indexOf("V")+"!");

// let paragraph = document.getElementById("demotext");
// paragraph.innerHTML="Demo text From JS";





function collect_data()
{
    let validname = collect_name();
    let validemail = validateEmail();
    return validname && validemail;

}
function collect_name()
{
    let PName = document.getElementById("PatientName").value.trim();
    let PError= document.getElementById("ErrorText");
    if(PName === "")
    {
        PError.textContent = "Enter The Name";
        return false;
    }

    if(PName.length<6)
    {
        PError.textContent = "Name Must Be atleast 6 Char";
        return false; 
    }
    else{
        PError.textContent = "";
        console.log(PName);
    } 
    return true;
}

function validateEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let Expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(Email ==="")
        {
            Error.textContent = "Please Enter The Email";
            return false;
        } 
    else if(!Expression.test(Email))
    {
        Error.textContent = "Please Enter The Email Again";
        return false;
    }
    else{
        Error.textContent = "Patient Email: "+Email;
        return true;
    }

}
function ValidGender()
{
    //radio
}
function validDepartment()
{
    //Checkbox
}