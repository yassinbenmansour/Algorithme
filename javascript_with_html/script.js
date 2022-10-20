let myNumber = 32;
document.getElementById("demo").innerHTML ="Decimal 32 = " + "<br><br>" +

"Hexatrigesimal (base 36): " + myNumber.totring(36) + "<br>" +
"Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
"Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
"Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
"Decimal (base 10): " + myNumber.toString(10) + "<br>" +
"Octal (base 8): " + myNumber.toString(8) + "<br>" +
"Binary (base 2): " + myNumber.toString(2);
