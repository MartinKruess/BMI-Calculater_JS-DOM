// VERARBEITUNG

const arrLogin = ["Martin", "Password123", "Nico", "Password222"]
let loginName = "";
let password = ""

let tippGreen = "Du bist im einklang mit dir selbst und lebst gesund."
let tippOrange = "Du solltets ein wenig auf dein gewicht achten."
let tippRed = "Du solltest Sport treiben. Empfehlung: Schwimmen ist Gelenkschonend"

const login = () =>{
    loginName = document.getElementById("login").value
    password = document.getElementById("password").value
    if(arrLogin.includes(loginName) && arrLogin.includes(password)){
        document.getElementById("bmi").style.display = "flex";
    }else{
        console.log("ups")
    }
}

const bmiCalc = ()=>{
    const age = document.getElementById("age").value
    const weight = document.getElementById("gewicht").value
    const size =document.getElementById("groesse").value
    
    let resultBMI = weight/size**2*10000;
    document.getElementById("bmiOutput");
    document.getElementById("bmiScale")
    if(resultBMI < 25){
        document.getElementById("bmiOutput").style.backgroundColor = "green";
        document.getElementById("bmiScale").style.backgroundColor = "green";
        document.getElementById("tipp").textContent = tippGreen
    }else if(resultBMI < 29){
        document.getElementById("bmiOutput").style.backgroundColor = "orange";
        document.getElementById("bmiScale").style.backgroundColor = "orange";
        document.getElementById("tipp").textContent = tippOrange
    }else{
        document.getElementById("bmiOutput").style.backgroundColor = "red";
        document.getElementById("bmiScale").style.backgroundColor = "red";
        document.getElementById("tipp").textContent = tippRed
    }
    resultVisual = resultBMI.toFixed(2)*1.8 + "%";
    console.log(resultVisual)
    document.getElementById("bmiScale").style.width = resultVisual;
    document.getElementById("bmiOutput").textContent = resultBMI.toFixed(2);
    document.getElementById("bmiScale").textContent = resultBMI.toFixed(2)+"BMI";
}

let counter = 0;

const changer = ()=>{
    const arrIMG = ["./images/img01.png", "./images/img02.jpg", "./images/img03.jpg"]
    document.getElementById("changer").src=arrIMG[counter]
    if(counter < 2){
    counter++
    }else{
    counter = 0;
    }
}

changer();
setInterval(changer, 5000);