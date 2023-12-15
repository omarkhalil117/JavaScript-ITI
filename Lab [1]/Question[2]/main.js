var num = prompt("Guess the number ")

if ( num == 7 )
{
    alert("Congrats it's the right number !!")
}
else if ( num > 7)
{
    alert("Above secret number")
}
else if ( num < 7)
{
    alert("Below secret number")
}
else
{
    alert("Not a Number")
}