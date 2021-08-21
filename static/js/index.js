var positionY = window.innerHeight;
var indicator = document.getElementById("indicator");
var list = document.getElementsByClassName("nav-list");
var navbar = document.getElementById("navbar");

function removeActive(){
    for(var i = 0; i < list.length; i++){
        list[i].classList.remove("active");
    }
}


console.log(positionY);
$(document).ready(function(){
    $(window).scroll(function(){
        indicator.style.transform = `translateX(${(100 * (this.scrollY / positionY)) + ((this.scrollY / positionY) * 4)}px)`;
        var scale = this.scrollY / positionY;
        if (scale < 0.8){
            if(navbar.classList.contains("sticky")){
                navbar.classList.remove("sticky");
            }
        }else{
            navbar.classList.add("sticky");
        }


        if(scale < 0.8){
            removeActive();
            document.querySelector(".home").classList.add("active");
        }
        else if (scale > 0.85 && scale < 1.8){
            removeActive();
            document.querySelector(".about").classList.add("active");
        }else if(scale > 1.9 && scale < 2.8){
            removeActive();
            document.querySelector(".services").classList.add("active");
        }else if(scale > 2.9){
            removeActive();
            document.querySelector(".contact").classList.add("active");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('.collapse-navbar').click(function(){
        $('.navbar').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
});

window.onresize = function(){
    positionY = window.innerHeight;
    console.log(positionY);
}