// function addNewWEfield(){

//   let newNode = document.createElement("textarea");
//   newNode.classList.add("form-control");
//   newNode.classList.add("mt-2");
//   newNode.classList.add("weField");

//   let weOb = document.getElementById("we");
//   let weAddButtonOb = document.getElementById("weAddButton");

//   weOb.insertBefore(newNode, weAddButtonOb);
// }

// function addNewAQField(){

//   let newNode = document.createElement("textarea");
//   newNode.classList.add("form-control");
//   newNode.classList.add("mt-2");
//   newNode.classList.add("aqField");


//   let aqOb = document.getElementById("aq");
//   let aqAddButtonOb = document.getElementById("aqAddButton");

//   aqOb.insertBefore(newNode, aqAddButtonOb)

// }

function createResume(){

    let nameField = document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1")
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML = nameField;
    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;
    document.getElementById("githubT").innerHTML = document.getElementById("githubField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    document.getElementById("skillsT").innerHTML = document.getElementById("skillsField").value;
    document.getElementById("projectsT").innerHTML = document.getElementById("projectsField").value;
    document.getElementById("workT").innerHTML = document.getElementById("workField").value;
    document.getElementById("acedemicDT").innerHTML = document.getElementById("acedemicField").value;
    document.getElementById("achievementsT").innerHTML = document.getElementById("achievementsField").value;
    document.getElementById("activitesT").innerHTML = document.getElementById("activitesField").value;

    let file=document.getElementById("imgField").files[0];
    console.log(file);
    let reader= new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
    reader.onloadend = function() {
    document.getElementById("imgTemplate").src=reader.result;
    }
    
    // let  wes = document.getElementsByClassName("weField");

    // let str="";

    // for(let e of wes)
    // {
    //     str = str +'<li> ${e.value} </li>';
    // }

    // document.getElementById("weT").innerHTML = str;


    // let aqs=document.getElementsByClassName("aqField");
    // let str1='';
    // for(let e of aqs){
    //     str1 += '<li> ${e.value}  </li>';
    // }
    // document.getElementById("aqT").innerHTML = str1;

    


    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'

}


function printResume() {
    window.print();
}