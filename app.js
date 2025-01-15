let systrack=[];
let playertrack=[];
let randlist=["box1","box2","box3","box4"];
let start=false;
let max=0;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game has started");
        start=true;
        levelup();
    }
});
let h2=document.querySelector("h2");

function flash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},150);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
    }
    

function levelup(){
    playertrack=[];
    level++;
h2.innerText=`You are at Level ${level}`;
let rand=Math.floor(Math.random()*4);
let randbox=randlist[rand];
let randbtn=document.querySelector(`.${randbox}`);
systrack.push(randbox);
console.log(systrack);
// console.log(rand);
// console.log(randbox);
// console.log(randbtn);
flash(randbtn);
}

function check(int){
    // console.log("qurr length:",ind);
 
    if(systrack[int]===playertrack[int]){
      if(systrack.length==playertrack.length){
       setTimeout(levelup,500); 
      }
    }else{
        h2.innerHTML=`Game Over! Your score was :<b>${level} </b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        if(level>max){
            max=level;
        }
        // h4.innerHTML=`<b>Highest Score:${level}</b>`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor=" rgb(194, 153, 160)";
        },125);
        reset();
    }
}

function btnpress(){
    let btn=this;
    // console.log(this);
    // console.dir(btn);

   let usercolor=btn.getAttribute("id");
   console.log(usercolor);
    userflash(btn);
    playertrack.push(usercolor);
    check(playertrack.length-1);
}
let allbtns=document.querySelectorAll(".box");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
level=0;
systrack=[];
playertrack=[];
start=false;
}