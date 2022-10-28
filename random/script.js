function checkCD (){
    let age = document.getElementById("age").value;

    let checkvalue = (age > 18) ? "rak kbir" : "rak baqi sghir";
    document.getElementById("msg").innerHTML=checkvalue
}






function Randomnbr(){
     let nbr = Math.floor(Math.random() * 10);

     return nbr ;
}


console.log(Randomnbr());