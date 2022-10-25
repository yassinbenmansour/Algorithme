const names = ["yassine", "zakaria", "hafsa", "rachid", "salma", "saad"];


let textname = "";

for (let i = 0;i < names.length; i++){
    textname = textname + names[i] + "<br>";
    // or text += names[i] + "<br>";

}

document.getElementById("arr").innerHTML= textname;