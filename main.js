var colortofind;
var easyclicked=false;

//generates random color
function colorgenerator(){
    var a=Math.floor((Math.random()*255)+0);
    var b=Math.floor((Math.random()*255)+0);
    var c=Math.floor((Math.random()*255)+0);
    return `rgb(${a}, ${b}, ${c})`;
}

//To decide how many buttons to show according to chosen level
function showbuttons(numberofbuttons)
{
    for(var i=1;i<=numberofbuttons;i=i+1)
    {
        document.getElementById(`${i}`).style.visibility="visible";
    }
}

//to start the game
function gamestart(numberofbuttons)
{
    if(!easyclicked)
    {
    document.getElementById("hard").style.backgroundColor="rgb(178,34,34)";
    }
    document.getElementById("heading").style.backgroundColor="rgba(255, 255, 0, 0.76)";
    document.getElementById("message").innerHTML="          ";
    document.getElementById("play-again").style.display="none";
    document.getElementById("newcolor").style.display="initial";
    var colors=[];
    if(easyclicked)
    {
        showbuttons(3);
    }
    else{
        showbuttons(6);
    }
    for(var i=1;i<=numberofbuttons;i=i+1)
    {
        var x=colorgenerator();
        document.getElementById(`${i}`).style.backgroundColor=x;
        colors.push(x);
        console.log(x);
    }
   colortofind=colors[Math.floor((Math.random()*(colors.length-1))+0)];
   document.getElementById("randomcolor").innerHTML=colortofind.toUpperCase();
}
gamestart(6);//game started

//what happens on selecting easy level
document.getElementById("easy").addEventListener("click",()=>{
    easyclicked =true;
    for(var i=4;i<=6;i=i+1)
    {
        document.getElementById(`${i}`).style.visibility="hidden";
    }
    gamestart(3);
    document.getElementById("easy").style.backgroundColor="rgb(178,34,34)";
    document.getElementById("hard").style.backgroundColor="rgb(240,248,255)";
});

//what happens on selecting hard level
document.getElementById("hard").addEventListener("click",()=>{
    easyclicked=false;
    for(var i=4;i<=6;i=i+1)
    {
        document.getElementById(`${i}`).style.visibility="visible";
    }
    gamestart(6);
    document.getElementById("hard").style.backgroundColor="rgb(178,34,34)";
    document.getElementById("easy").style.backgroundColor="rgb(240,248,255)";
});

//what happens on clickikg new colors
document.getElementById("newcolor").addEventListener("click",()=>{
    if(easyclicked)
    {
        gamestart(3);
    }
    else{
        gamestart(6);
    }
});

//what happens on clicking play again after completing the game
document.getElementById("play-again").addEventListener("click",()=>{
    if(easyclicked)
    {
        gamestart(3);
    }
    else{
        gamestart(6);
    }
    
});

//what happens if user chooses right color
function winning()
{
    var n;
   if(easyclicked)
   {
         n=3;
   }
   else{
       n=6;
   }
   for(var i=1;i<=n;i=i+1)
   {
    document.getElementById(`${i}`).style.backgroundColor=colortofind;
    document.getElementById(`${i}`).style.visibility="visible";
   }
    document.getElementById("heading").style.backgroundColor=colortofind;
    document.getElementById("message").innerHTML="CORRECT!!";
    document.getElementById("newcolor").style.display="none";
    document.getElementById("play-again").style.display="initial";
}

//what should happen on choosing any particular color
for(var i=1;i<=6;i=i+1)
{
    var btn=document.getElementById(`${i}`);
    btn.addEventListener("click",function(){
        if(this.style.backgroundColor==colortofind)
        {
            winning();
        }
        else{
            this.style.visibility="hidden";
            document.getElementById("message").innerHTML="TRY AGAIN";
        }
    });
}
