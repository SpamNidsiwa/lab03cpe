let hero_1 = document.getElementsByClassName("hero1");
let hero_2 = document.getElementsByClassName("hero2");
let hero_3 = document.getElementsByClassName("hero3");
let i1,i2,i3;
i1 = Math.floor(Math.random() * 20 + 3);
i2 = Math.floor(Math.random() * 20 + 3);
i3 = Math.floor(Math.random() * 20 + 3);
hero_1[0].style.animationDuration = `${i1}s`;
hero_2[0].style.animationDuration = `${i2}s`;
hero_3[0].style.animationDuration = `${i3}s`;
console.log(i1 + " " + i2 + " " + i3);
hero_1[0].style.animationPlayState="paused";
hero_2[0].style.animationPlayState="paused";
hero_3[0].style.animationPlayState="paused";



