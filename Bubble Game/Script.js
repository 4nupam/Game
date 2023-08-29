// code for making bubble;

function makeBullbe(){
    var clutter =" ";
for(var i=0;i<168;i++)
{
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}

// Code for timer
var timer=10;
function runtimer(){
 var totaltimer=setInterval(function(){
    if(timer>0)
    {
        timer--;
        document.querySelector("#Timerval").textContent=timer;
    }
    else{
       clearInterval(totaltimer);
       document.querySelector("#pbtm").innerHTML= `<h1>Game Over</h1> `;
    }
},1000)

}

// code for new Hit
var hit;
function getNewhit(){
   hit = Math.floor(Math.random()*10);
    document.querySelector("#newhit").textContent = hit;
}


// code for score
var score =0;
function inscreaseScore(){
    score = score+ 10;
    document.querySelector("#scoreval").textContent= score;
}

document.querySelector("#pbtm").addEventListener("click",function(details,){
    var clickedNumber=(Number(details.target.textContent));
     // we are using Number here because output was string, so we have to change it into number
   if(clickedNumber == hit)
   {
    inscreaseScore(); 
    makeBullbe();
    getNewhit();
   }
 
})


makeBullbe();
runtimer();
getNewhit();
// inscreaseScore();
