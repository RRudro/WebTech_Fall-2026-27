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
    let validName = validateName();
    let validateAge = validAge();
    let validateEmail = validEmail();
    let validategender = validateGender();
    let validDept = validateDepartment();

    return false; 
}


function validateName(){
    let Pname=document.getElementById("PatientName").value.trim();
    let Error= document.getElementById("NameError");
    if(Pname=="")
    {
        Error.innerHTML = "Enter The Name";
        return false;
    }
    else if(Pname.length<6)
    {
        Error.innerHTML = "Name Must be at least 6 Char";
        return false;
    }
    else{
        Error.innerHTML = "Patient Name: "+Pname;
        return true;
    }
}

function validAge()
{
    let PAge= Number(document.getElementById("PatientAge").value);
    let ErrorAge = document.getElementById("AgeError");
    if(document.getElementById("PatientAge").value === "")
    {
        ErrorAge.innerHTML = "Please Enter The Age";
        return false;
    }
    else if (PAge < 1 || PAge > 100){
        ErrorAge.innerHTML = "Age Must be Within the Limit";
        return false;
    }
    else{
        ErrorAge.innerHTML = "Patient Age: "+PAge;
        return true;
    }
}

function validEmail()
{
    let Email = document.getElementById("PatientEmail").value.trim();
    let Error = document.getElementById("EmailError");
    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(Email ==="")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    }
    else if(!regexpression.test(Email))
    {
        Error.innerHTML = "Please Enter The Right Email Format";
        return false;
    }
    else{
        Error.innerHTML = "Patient Email: "+Email;
        return true;
    }
}

function validateGender()
{
    let genders = document.querySelectorAll('input[name="gender"]');
    let GenderError = document.getElementById("ErrorGender");
    let selectGender = "";

    for(let i=0; i<genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectGender = genders[i].value;
            break;
        }
    }
    if(selectGender=="")
        {
            GenderError.innerHTML = "Please Enter the Gender";
            return false;
        }
        else{
            GenderError.innerHTML = "Gender: "+selectGender;
            return true;
        }
}

function validateDepartment()
{
    let departments = document.querySelectorAll('input[name="dept"]');
    let deptError = document.getElementById("DeptError");
    let selectedDepartments = [];

    for(let i=0; i<departments.length; i++)
    {
        if(departments[i].checked)
        {
            selectedDepartments.push(departments[i].id);
        }
    }

    if(selectedDepartments.length === 0)
    {
        deptError.innerHTML = "Please select at least one department";
        return false;
    }
    else
    {
        deptError.innerHTML = "Selected Department(s): " + selectedDepartments.join(", ");
        return true;
    }
}




