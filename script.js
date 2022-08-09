var div=document.createElement('div');
div.style.textAlign='center';
var input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('id','country');

var button=document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('class','btn btn-primary');
button.innerHTML='Search';
button.addEventListener('click',foo);
let active=document.createElement('div');
active.setAttribute('id','active');
let recover=document.createElement('div');
recover.setAttribute('id','recover');
let death=document.createElement('div');
death.setAttribute('id','death');
div.append(input,button,active,recover,death);
document.body.append(div);

async function foo(){
    let res=document.getElementById('country').value;   //get data by countryname
    let url=`https://api.covid19api.com/dayone/country/${res}`;   //api

    let result=await fetch(url);   //fetch api
    let result1=await result.json();  //api.json()
    var index=result1.length-1;     //last update data so length-1
    //arr[920].Active
    console.log(result1[index].Active);   //on button clicking button will active so .Active
    active.innerHTML=`Total active cases:${result1[index].Active}`  //print getting data 
    console.log(result1[index].Recovered);
    recover.innerHTML=`Total recovered cases:${result1[index].Recovered}`;
    console.log(result1[index].Deaths);
    death.innerHTML=`Total death cases:${result1[index].Deaths}`;
}