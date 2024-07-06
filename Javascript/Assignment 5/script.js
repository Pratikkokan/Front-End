var gender = "";



function selectGender(target)
{
    gender = target.value;
}

function check()
{
    var age = Number(document.getElementById("client-age").value);

    if(gender==="male" && age>=25 && age<=65)
        document.getElementById("display").innerHTML = "Male Employee is Eligible for insurance";

    else if(gender==="female" && age>=25 && age<=65)
        document.getElementById("display").innerHTML = "Female Employee is Eligible for insurance";

    else
        document.getElementById("display").innerHTML = "Employee is not Eligible for insurance";
}