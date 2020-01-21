// games.js

let hero_1 = document.getElementsByClassName("hero1");
let hero_2 = document.getElementsByClassName("hero2");
let hero_3 = document.getElementsByClassName("hero3");
let text = document.getElementsByClassName("text_ti");
let button1 = document.getElementsByClassName("num1");
let button2 = document.getElementsByClassName("num2");
let button3 = document.getElementsByClassName("num3");
let i1,i2,i3;
let player_choice;
let order = [hero_1[0],hero_2[0],hero_3[0]];
var j, x, i;

for (i = order.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = order[i];
    order[i] = order[j];
    order[j] = x;
}

i1 = 5;
i2 = Math.floor(Math.random() * 2 + 6);
i3 = Math.floor(Math.random() * 2 + 8);

order[0].style.animationDuration = `${i1}s`;
order[1].style.animationDuration = `${i2}s`;
order[2].style.animationDuration = `${i3}s`;
console.log(order[0].style.animationDuration + " " + order[1].style.animationDuration + " " + order[2].style.animationDuration);

hero_1[0].style.animationPlayState="paused";
hero_2[0].style.animationPlayState="paused";
hero_3[0].style.animationPlayState="paused";

button1[0].addEventListener("click",function(){
    player_choice = hero_1[0];
    run();
});
button2[0].addEventListener("click",function(){
    player_choice = hero_2[0];
    run();
});
button3[0].addEventListener("click",function(){
    player_choice = hero_3[0];
    run();
});

function run(){
    button1[0].style.display = "none";
    button2[0].style.display = "none";
    button3[0].style.display = "none";
    hero_1[0].style.animationPlayState="running";
    hero_2[0].style.animationPlayState="running";
    hero_3[0].style.animationPlayState="running";
    setTimeout(win_or_loss,i1*1000);
}
function win_or_loss(){
    if(order[0] == player_choice){
        text[0].innerHTML = "YOU WIN!!!";
        text[1].innerHTML = "Click here to play again!"
    }else{
        text[0].innerHTML = "YOU LOSS!!!";
        text[1].innerHTML = "Click here to play again!"
    }
}



