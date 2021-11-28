var j = 0;
var p = 0;
function expand(){
    var x = document.getElementById("projectObject")
    let menu = document.getElementById('menu');
    let menuItems = menu.children;
    if(j == 0){
        document.getElementById("add").style.transform = 'rotate(45deg)';
        document.getElementById("menu").style.transform = 'scale(1)';
        menuItems[0].style.transform = "translateY(-160px)";
        menuItems[1].style.transform = "translate(140px, -80px)";
        menuItems[2].style.transform = "translate(140px, 80px)";
        menuItems[3].style.transform = "translateY(160px)";
        menuItems[4].style.transform = "translate(-140px, 80px)";
        menuItems[5].style.transform = "translate(-140px, -80px)";
        j = 1;
    }
    
    else{
        document.getElementById("add").style.transform = 'rotate(0deg)';
        document.getElementById("menu").style.transform = 'scale(0.9)';
        menuItems[0].style.transform = "translateY(0px)";
        menuItems[1].style.transform = "translate(0px, 0px)";
        menuItems[2].style.transform = "translate(0px, 0px)";
        menuItems[3].style.transform = "translateY(0px)";
        menuItems[4].style.transform = "translate(0px, 0px)";
        menuItems[5].style.transform = "translate(0px, 0px)";
        x.style.display = "none";
        j = 0
    }
}



function expandProjects(){
    var x = document.getElementById("projectObject")
    if(p == 0){
        x.style.display = "block";
        p = 1;
    }
    else{
        x.style.display = "none";
        p = 0;
    }
}