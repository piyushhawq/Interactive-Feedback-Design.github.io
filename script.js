var star = document.getElementsByClassName("fas");
var emoji = document.getElementById("emoji");

star[0].onclick = function(){
star[0].style.color="#ffd93b";
star[1].style.color="#e4e4e4";
star[2].style.color="#e4e4e4";
star[3].style.color="#e4e4e4";
star[4].style.color="#e4e4e4";
emoji.style.transform = "translateX(0)";
}
star[1].onclick = function(){
    star[0].style.color="#ffd93b";
    star[1].style.color="#ffd93b";
    star[2].style.color="#e4e4e4";
    star[3].style.color="#e4e4e4";
    star[4].style.color="#e4e4e4";
    emoji.style.transform ="translateX(-100px)";
    }

star[2].onclick = function(){
        star[0].style.color="#ffd93b";
        star[1].style.color="#ffd93b";
        star[2].style.color="#ffd93b";
        star[3].style.color="#e4e4e4";
        star[4].style.color="#e4e4e4";
        emoji.style.transform ="translateX(-200px)";
        }
 star[3].onclick = function(){
            star[0].style.color="#ffd93b";
            star[1].style.color="#ffd93b";
            star[2].style.color="#ffd93b";
            star[3].style.color="#ffd93b";
            star[4].style.color="#e4e4e4";
            emoji.style.transform ="translateX(-300px)";
            }
 star[4].onclick = function(){
                star[0].style.color="#ffd93b";
                star[1].style.color="#ffd93b";
                star[2].style.color="#ffd93b";
                star[3].style.color="#ffd93b";
                star[4].style.color="#ffd93b";
                emoji.style.transform ="translateX(-400px)";
                }