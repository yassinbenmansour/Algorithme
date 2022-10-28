function RandomFc (){
    let age = document.getElementById("age").value;

    let checkvalue = (age > 18) ? "rak kbir" : "rak baqi sghir";
    document.getElementById("msg").innerHTML=checkvalue
}