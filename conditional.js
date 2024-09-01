let a = prompt("hey whats your age ?");
a = Number.parseInt(a) //converting the string into number
if (a<0){
    alert ("this is not valid age");
}
else if (a>10 & a<18){
    alert ("this is  not valid age but you are a kid");
}
else if (a>18 & a<25){
    alert ("this is valid age for driving");
}
else{
    alert ("your age is valid");
}

