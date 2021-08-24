var positionY = window.innerHeight;
var indicator = document.getElementById("indicator");
var list = document.getElementsByClassName("nav-list");
var navbar = document.getElementById("navbar");
var sysDate = new Date();
var t = new Date(Date.UTC(sysDate.getFullYear(), sysDate.getMonth(), sysDate.getDate(),  sysDate.getHours(), sysDate.getMinutes(), 0));
var today = new Date().toISOString().substring(0,10);
var dates = document.getElementsByClassName("date");
var times = document.getElementsByClassName("time");
for(var k = 0; k < times.length; k++){
    times[k].valueAsDate = t;
}
for(var k = 0; k < dates.length; k++){
    dates[k].setAttribute('min', today);
    dates[k].valueAsDate = t;
}

function removeActive(){
    for(var i = 0; i < list.length; i++){
        list[i].classList.remove("active");
    }
}

function changeActive(id){
    var tabs = document.getElementsByClassName("tabs");
    var forms = document.getElementsByClassName("forms");
    // console.log(forms.length);
    for(var j = 0; j < forms.length; j++)
        forms[j].style.display = "none";
    for(var i = 0; i < tabs.length; i++)
        tabs[i].classList.remove("active");
    document.getElementsByClassName(id)[0].classList.add("active");
    document.getElementById(id).style.display = "block";
}


console.log(positionY);
$(document).ready(function(){
    $(window).scroll(function(){
        indicator.style.transform = `translateX(${(100 * (this.scrollY / positionY)) + ((this.scrollY / positionY) * 4)}px)`;
        var scale = this.scrollY / positionY;
        if (scale < 0.15){
            if(navbar.classList.contains("sticky")){
                navbar.classList.remove("sticky");
            }
        }else{
            navbar.classList.add("sticky");
        }


        if(scale < 0.8){
            removeActive();
            document.querySelector(".home").classList.add("active");
            document.title = "GEE Travels | Home"
        }
        else if (scale > 0.85 && scale < 1.8){
            removeActive();
            document.querySelector(".about").classList.add("active");
            document.title = "GEE Travels | About"
        }else if(scale > 1.9 && scale < 2.8){
            removeActive();
            document.querySelector(".services").classList.add("active");
            document.title = "GEE Travels | Services"
        }else if(scale > 2.9){
            removeActive();
            document.querySelector(".contact").classList.add("active");
            document.title = "GEE Travels | Contact"
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