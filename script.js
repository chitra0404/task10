
fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
});
fetch(`https://restcountries.com/v3.1/name/France`)
.then((response)=>response.json())
.then((data)=>{
 
const capital=data[0].capital[0];
const flag=data[0].flags.svg;
const region=data[0].region;
var latlng=data[0].latlng;
const cioc=data[0].cioc;
console.log(flag);
document.getElementsByClassName("card-img-top").innerHTML=flag;
document.getElementById("region").innerHTML=region;
document.getElementById("cd").innerHTML=cioc;
document.getElementById("latlng").innerHTML=latlng;});

document.getElementById('weatherinfo').addEventListener('click',()=>{
    const country="France";
   
    const api="16e7ddbde5ba196e50741603872a5ab3";
    fetch(`https://restcountries.com/v3.1/name/France`)
    .then((response)=>response.json())
.then((data)=>{
    const capital=data[0].capital[0];
 
    document.getElementById("country").innerHTML=country;
    return fetch(  `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
    );
  })
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "details"
    ).innerHTML = `Weather is ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
  })
  .catch((err) => {
    console.log("Error:", err);
  });
});
//INDIA
fetch(`https://restcountries.com/v3.1/name/India`)
.then((response)=>response.json())
.then((data)=>{
 
const capital=data[1].capital[0];
const flag=data[1].flags.svg;
const region=data[1].region;
var latlng=data[1].latlng;
const cioc=data[1].cioc;

document.getElementsByClassName(".card-img-top1").innerHTML=flag;

console.log(capital);
document.getElementById("region1").innerHTML=region;
document.getElementById("cd1").innerHTML=cioc;
document.getElementById("latlng1").innerHTML=latlng;});

document.getElementById('weatherinfo1').addEventListener('click',()=>{
    const country="India";
   
    const api="16e7ddbde5ba196e50741603872a5ab3";
    fetch(`https://restcountries.com/v3.1/name/India`)
    .then((response)=>response.json())
     .then((data)=>{
    
  const capital=data[1].capital[0];
 
    document.getElementById("country1").innerHTML=country;
    return fetch(  `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
    );
  })
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "details1"
    ).innerHTML = `Weather is ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
  })
  .catch((err) => {
    console.log("Error:", err);
  });
});

fetch(`https://restcountries.com/v3.1/name/China`)
.then((response)=>response.json())
.then((data)=>{
 

const region=data[2].region;
var latlng=data[2].latlng;
const cioc=data[2].cioc;
const flag=data[2].flags.svg;
console.log(flag);
document.getElementsByClassName(".card-img-top2").innerHTML=flag;

document.getElementById("region2").innerHTML=region;
document.getElementById("cd2").innerHTML=cioc;
document.getElementById("latlng2").innerHTML=latlng;});

document.getElementById('weatherinfo2').addEventListener('click',()=>{
    const country="China";
   
    const api="16e7ddbde5ba196e50741603872a5ab3";
    fetch(`https://restcountries.com/v3.1/name/China`)
    .then((response)=>response.json())
.then((data)=>{
    const capital=data[2].capital[0];
 
    document.getElementById("country2").innerHTML=country;
    return fetch(  `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api}`
    );
  })
  .then((response) => response.json())
  .then((data) => {
    document.getElementById(
      "details2"
    ).innerHTML = `Weather is ${data.name}: ${data.weather[0].main}, Temp: ${data.main.temp}`;
  })
  .catch((err) => {
    console.log("Error:", err);
  });
});