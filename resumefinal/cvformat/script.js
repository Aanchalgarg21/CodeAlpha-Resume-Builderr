function addNewWefield() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let we= document.getElementById("we");
    let weAddButton = document.getElementById("weAddButton");

    we.insertBefore(newNode,weAddButton);

}


function addNewAqfield() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder","Enter here");

    let aq= document.getElementById("aq");
    let aqaddbtn = document.getElementById("aqaddbtn");

    aq.insertBefore(newNode, aqaddbtn);

}


function addNewAcfield() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("achievefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");

    let ac= document.getElementById("ac");
    let achieveaddbtn = document.getElementById("achieveaddbtn");

    ac.insertBefore(newNode, achieveaddbtn);

}



function generateCV() {
    let nameField = document.getElementById("nameField").value;

    let namet1 = document.getElementById("namet1");

    namet1.innerHTML = nameField;

    document.getElementById("namet2").innerHTML = nameField;

    document.getElementById("contactt").innerHTML = document.getElementById("contactField").value;

    document.getElementById("addresst").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbt").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instat").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedt").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("objectivet").innerHTML = document.getElementById("objectiveField").value;


    let wes =document.getElementsByClassName("wefield");

    let str="";

    for(let e of wes){
        str = str + ` <li> ${e.value} </li> `;
    }

    document.getElementById("wet").innerHTML=str;


    let aqs =document.getElementsByClassName("aqfield");

    let str1="";

    for(let e of aqs){
        str1= `<li>${e.value} </li>`;
    }

    document.getElementById("aqt").innerHTML=str1;


    let acs =document.getElementsByClassName("achievefield");

    let str2 ="";

    for(let e of acs){
        str2=` <li>${e.value}</li>`;
    }

    document.getElementById("achievet").innerHTML=str2;

document.getElementById("cv-form").style.display="none";
document.getElementById("template").style.display="block";
   
}

function printCV()
{
    window.print();
}