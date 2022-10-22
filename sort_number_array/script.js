const arrayNumber = [40, 100, 1, 5, 25, 10];
document.getElementById("princ_value").innerHTML = arrayNumber;  

arrayNumber.sort();


document.getElementById("order_value").innerHTML= arrayNumber;


arrayNumber.sort(function(a,b){ return a - b});

document.getElementById("funcC").innerHTML= arrayNumber;
