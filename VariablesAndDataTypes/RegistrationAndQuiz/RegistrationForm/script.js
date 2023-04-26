const dose2Div = document.querySelector('#dose2');
dose2Div.style.display = 'none';

//display and remove second dose questionnaire
let secondDoseYes = document.querySelector("#yesDoseQ");
secondDoseYes.addEventListener('click',() => {
    dose2Div.style.display = 'block';
});
let secondDoseNo = document.querySelector('#noDoseQ');
secondDoseNo.addEventListener('click',() => {
    dose2Div.style.display = 'none';
});

//submit button will display info
let subBut = document.querySelector('#subBut');
subBut.addEventListener('click',displayInfo);

function displayInfo(){
    document.querySelector("#nameA").innerHTML = nameInfo();
    document.querySelector("#genderA").innerHTML = genderInfo();
    document.querySelector("#bdayA").innerHTML = bdayInfo();
    document.querySelector('#emailA').innerHTML = emailInfo();
    document.querySelector('#addressA').innerHTML = addressInfo();
    document.querySelector('#dose1A').innerHTML = dose1Info();
    document.querySelector('#hadSecond').innerHTML = moreDoseQInfo();
}
function dose2Info(){
    let dose2Brand = document.querySelector('#brandDose2').value;
    let dose2Date = document.querySelector('#dateDose2').value;
    let dose2Location = document.querySelector('#locDose2').value;
    return `Dose 2<br>Brand: ${dose2Brand}<br>Date: ${dose2Date}<br>Location of Vaccination: ${dose2Location}<br>`;
}
function moreDoseQInfo(){
    let secondDoseQ = document.querySelector('input[name=moreDoseQ]:checked').value;
    if (secondDoseQ === 'yes'){
        return `Second Dose: ${secondDoseQ}<br>${dose2Info()}`;
    }
    return `Second Dose: ${secondDoseQ}`;
}

function dose1Info(){
    let dose1Brand = document.querySelector('#brandDose1').value;
    let dose1Date = document.querySelector('#dateDose1').value;
    let dose1Location = document.querySelector('#locDose1').value;
    return `Dose 1<br>Brand: ${dose1Brand}<br>Date: ${dose1Date}<br>Location of Vaccination: ${dose1Location}<br>`;
}

function addressInfo(){
    let region = document.querySelector('#region').value
    let usersRegion = () => region === "1" ? "Region I - Ilocos Region" : region === "2" ? "Region II - Cagayan Valley" :region === "3" ? "Region III - Central Luzon" : region === "4a" ? "Region IV-A - CALABARZON" : region === "mimaropa" ? "MIMAROPA Region" : region === "5" ? "Region V - Bicol Region" :region === "6" ? "Region VI - Western Visayas" :region === "7" ? "Region VII - Central Visayas" :region === "8" ? "Region VIII - Eastern Visayas" :region === "9" ? "Region IX - Zamboanga Peninsula" :region === "10" ? "Region X - Northern Mindanao" :region === "11" ? "Region XI - Davao Region" :region === "12" ? ">Region XII - SOCSARGEN" :region === "13" ? "Region XIII - Caraga" :region === "car" ? "Cordillera Administrative Region" :region === "ncr" ? "NCR - National Capital Regio" :region === "barmm" ? ">BARMM" : "undefined" ;
    return `Region: ${usersRegion()}<br>`;
}

function emailInfo(){
    let email = document.querySelector('#email').value;
    return `Email: ${email}<br>`;
}

function nameInfo(){
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let middleName = document.querySelector("#middleName").value;
    return `First Name: ${firstName}<br>Middle Name: ${middleName}<br>Last Name: ${lastName}<br>`;
}

function genderInfo(){
    let gender = checkGender();
    return `Gender: ${gender} <br>`;
}

function checkGender(){
    let genderAnswer = document.querySelector("input[name='gender']:checked").value;
    if(genderAnswer === 'Male'){
        return 'Male ';
    }else if(genderAnswer === 'Female'){
        return 'Female'
    }
    return 'Others';
}
function bdayInfo(){
    let bday = document.querySelector('#bDay').value;
    return `Birthday: ${bday}<br>`;
}