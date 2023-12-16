var num1 = prompt("Enter first number")

var num2 = prompt("Enter Second number")

var res = Number(num1) + Number(num2)

if(isNaN(res))
{
    alert("Wrong input")
}

alert(`Result of sum ${num1} and ${num2} = ${res}`)
