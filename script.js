let subMenu = document.getElementById("subMenu");
let menu = document.getElementById("menu");
let up = document.getElementById("up");
let a = menu;

function toggleMenu(){
    subMenu.classList.toggle("open_menu");
    if(a == menu){
        menu.style.display = 'none'
        up.style.display = 'flex'
        a = up;
    }else if(a == up){
        menu.style.display = 'flex'
        up.style.display = 'none'
        a = menu;
    }
}


function revealToSpan(){
document.querySelectorAll(".reveal").forEach(function(elem){
    let spanParent = document.createElement("span"); 
    let spanChild = document.createElement("span"); 

    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    spanChild.innerHTML = elem.innerHTML;
    spanParent.appendChild(spanChild);

    elem.innerHTML = "";
    elem.appendChild(spanParent);
})
}

revealToSpan();


var tl = gsap.timeline();

tl.from(".child span", {
    x: 100,
    delay: -.25,
    stagger: .2,
    duration: 1.4,
    ease: Power3.easeInOut
})
.to(".parent .child", {
    y: "-100%",
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader-inner",{
    height : 0,
    duration: 1,
    ease: Expo.easeInOut,
})
.to("#green",{
    height : 0,
    duration: 1,
    delay: -.8,
    ease: Expo.easeInOut
}) 