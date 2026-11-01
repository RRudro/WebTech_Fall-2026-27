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
    let ValidGenders = ValidGender();
    let ValidDeptarments = validDepartment();

    return false;

}
function collect_name()
{
    let PName = document.getElementById("PatientName").value.trim();
    let PError= document.getElementById("ErrorText");
    if(PName === "")
    {
        PError.innerHTML = "Enter The Name";
        return false;
    }

    if(PName.length<6)
    {
        PError.innerHTML = "Name Must Be atleast 6 Char";
        return false; 
    }
    else{
        PError.innerHTML = ""+PName;
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
            Error.innerHTML = "Please Enter The Email";
            return false;
        } 
    else if(!Expression.test(Email))
    {
        Error.innerHTML = "Please Enter The Email Again";
        return false;
    }
    else{
        let safeEmail = Email.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        Error.innerHTML = "Patient Email: "+safeEmail;
        return true;
    }

}
function ValidGender()
{
    //radio buttons
    let genders = document.querySelectorAll('input[name="gender"]');
    let error = document.getElementById("GenderError");
    let selectedgender = "";
    
    for(let i=0; i<genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectedgender = genders[i].value;
            break;
        }
        
    }
    if(selectedgender=="")
    {
           error.innerHTML = "Please enter the gender values";
           return false;
    }
    else{
            error.innerHTML = "Patient Gender Is: "+selectedgender;
            return true;
        }

}
function validDepartment()
{
    //Checkbox 
    let departments = document.querySelectorAll('input[name="doctortype"]');
    let error = document.getElementById("DeptError");
    let selectedDept = [];
    for(let i = 0; i<departments.length; i++)
    {
        if(departments[i].checked)
        {
            selectedDept.push(departments[i].value);
        }
    }
    if(selectedDept.length === 0)
    {
        error.innerHTML = "Please select at least one option";
        return false;        
    }
    else{
        error.innerHTML = "Selected Department(s): " + selectedDept.join(",");
        return true;  
    }

}