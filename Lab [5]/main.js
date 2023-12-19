var pic = document.getElementById("pic");
var pass = document.getElementById("pass");


function checkPass()
{

    if(pass.value == "12345")
    {
        pic.valueOf().className="unblur"
    }
    else
    {
        alert("Wrong password")
    }

}