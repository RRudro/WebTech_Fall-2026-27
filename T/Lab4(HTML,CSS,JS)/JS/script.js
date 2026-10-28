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
    let validateAge = validAge();
    let validateEmail = validEmail();
    let validategender = validateGender();
    
    
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
        Error.innerHTML = "Patient Name: "+Pname;
    }
    return false;
}

function validAge()
{
    let PAge= document.getElementById("PatientAge").value;
    let ErrorAge = document.getElementById("AgeError");
    if(PAge=="")
    {
        ErrorAge.innerHTML = "Please Enter The Age"
        return false;
    }
    else if (PAge>0 && PAge<100){
        ErrorAge.innerHTML = "Age Must be Within the Limit";
        return false;
    }
    else{
        ErrorAge.innerHTML = "Patient Age: "+PAge;
    }
    return false;
}

function validEmail()
{
    let Email = document.getElementById("PatientEmail").value;
    let Error = document.getElementById("EmailError");
    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if(Email ==="")
    {
        Error.innerHTML = "Please Enter The Email";
        return false;
    }
    else if(test(Email))
    {
        Error.innerHTML = "Please Enter The Right Email Format";
        return false;
    }
    else{
        Error.innerHTML = "Patient Email: "+Email;
    }
    return false;
}

function validateGender()
{
    let genders = document.getElementById("Gender");
    let GenderError = document.getElementById("ErrorGender");
    let selectGender = "";
    
    for(let i=0; i<genders.length; i++)
    {
        if(genders[i].checked)
        {
            selectGender = genders[i].value;
            return false;
        }
    }
    if(selectGender=="")
        {
            GenderError.innerHTML = "Please Enter the Gender";
            return false;
        }
        else{
            GenderError.innerHTML = "Gender: "+selectGender;
            return true
        }
}



