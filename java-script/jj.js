


function toggleNightMode() {
    var ssss = document.getElementById('ss'); 
    var card = document.getElementById('card');
    var loginButton = document.getElementById('loginButton'); 
    var card_lab = document.querySelectorAll('.card_lab');
    var icon_arr = document.querySelectorAll('.icon_arr');
    var fa_solid = document.querySelectorAll('.fa');
    var checkbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        ssss.classList.add('sNight');
        card.classList.add('cardNight');
        loginButton.classList.add('LabNight');
        for(var i=0;i<card_lab.length;i++) {
            card_lab[i].classList.add('LabNight')
        }
        for(var i=0;i<icon_arr.length;i++) {
            icon_arr[i].classList.add('iconNight')
        }
        for(var i=0;i<fa_solid.length;i++) {
            fa_solid[i].classList.add('icon_color')
        }
    } else {
        ssss.classList.remove('sNight');
        card.classList.remove('cardNight');
        loginButton.classList.remove('LabNight');
        for(var i=0;i<card_lab.length;i++) {
            card_lab[i].classList.remove('LabNight')
        }
        for(var i=0;i<icon_arr.length;i++) {
            icon_arr[i].classList.remove('iconNight')
        }
        for(var i=0;i<fa_solid.length;i++) {
            fa_solid[i].classList.remove('icon_color')
        }
    }
  }      
    




function printPage() { window.print();}


let login_Button = function () {
    var loginButton = document.getElementById("loginButton");
    var loginWindow = document.getElementById("loginWindow");
    var loginWindowClose = document.getElementById("close_bt");
      loginButton.addEventListener("click", function() {
      loginWindow.style.visibility = "visible"; 
    });
    loginWindowClose.addEventListener("click", function() {
      loginWindow.style.visibility = "hidden"; 
    });
}
 


window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let navLinks = document.querySelectorAll('#navbar a');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'black';
    });
    } else {
      navbar.classList.remove('scrolled');
      navLinks.forEach(function(link) {
        link.style.color = 'white';
    });
    }
  });

  function toggleContent(index) {
    var content = document.getElementById("lab" + index);
    var arrow = document.getElementsByClassName("icon_arrow")[index - 1];
    content.classList.toggle("show");
     arrow.classList.toggle("expanded");   
}



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
  
  


window.onload = function() {
    let cont = document.getElementById("cont");
    let cont_t = document.getElementById("cont_t");

    cont_t.style.bottom = "70px";
    setTimeout(function(){
        cont.style.filter = " brightness(70%)";
    },1500);  

    cont.style.transform = "scale(1)";   
}



const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


function toggle_show_or_hide(index) {
    var content = document.getElementById("ans" + index);
    var title = document.getElementById("t" + index);
    var fa = document.getElementById("f" + index);
    content.classList.toggle("show_content");  
    title.classList.toggle("change_color");  
    fa.classList.toggle("show_fa");  
}


// let b = true;

// let showorhide1 = function () {
//     let ans1 = document.getElementById("ans1");
//     let t1 = document.getElementById("t1");
//     let fa1 = document.getElementById("f1");

//     if (b) {
//         ans1.style.display = "block";
//         t1.style.color = "#00b8ff";
//         fa1.style.display = "none";
//         b = false;

//     } else {
//         ans1.style.display = "none";
//         t1.style.color = "black";
//         fa1.style.display = "block";
//         b = true;


//     }
// }

// let showorhide2 = function () {
//     let ans2 = document.getElementById("ans2");
//     let t2 = document.getElementById("t2");
//     let fa2 = document.getElementById("f2");
//     if (b) {
//         ans2.style.display = "block";
//         t2.style.color = "#00b8ff";
//         fa2.style.display = "none";
//         b = false;
//     } else {
//         ans2.style.display = "none";
//         t2.style.color = "black";
//         fa2.style.display = "block";
//         b = true;

//     }
// }
// let showorhide3 = function () {
//     let ans3 = document.getElementById("ans3");
//     let t3 = document.getElementById("t3");
//     let fa3 = document.getElementById("f3");
//     if (b) {
//         ans3.style.display = "block";
//         t3.style.color = "#00b8ff";
//         fa3.style.display = "none";
//         b = false;
//     } else {
//         ans3.style.display = "none";
//         t3.style.color = "black";
//         fa3.style.display = "block";
//         b = true;

//     }
// }
// let showorhide4 = function () {
//     let ans4 = document.getElementById("ans4");
//     let t4 = document.getElementById("t4");
//     let fa4 = document.getElementById("f4");
//     if (b) {
//         ans4.style.display = "block";
//         t4.style.color = "#00b8ff";
//         fa4.style.display = "none";
//         b = false;
//     } else {
//         ans4.style.display = "none";
//         t4.style.color = "black";
//         fa4.style.display = "block";
//         b = true;

//     }
// }
// let showorhide5 = function () {
//     let ans5 = document.getElementById("ans5");
//     let t5 = document.getElementById("t5");
//     let fa5 = document.getElementById("f5");
//     if (b) {
//         ans5.style.display = "block";
//         t5.style.color = "#00b8ff";
//         fa5.style.display = "none";
//         b = false;
//     } else {
//         ans5.style.display = "none";
//         t5.style.color = "black";
//         fa5.style.display = "block";
//         b = true;

//     }
// }
// let showorhide6 = function () {
//     let ans6 = document.getElementById("ans6");
//     let t6 = document.getElementById("t6");
//     let fa6 = document.getElementById("f6");

//     if (b) {
//         ans6.style.display = "block";
//         t6.style.color = "#00b8ff";
//         fa6.style.display = "none";
//         b = false;

//     } else {
//         ans6.style.display = "none";
//         t6.style.color = "black";
//         fa6.style.display = "block";
//         b = true;

//     }
// }

// let showorhide7 = function () {
//     let ans7 = document.getElementById("ans7");
//     let t7 = document.getElementById("t7");
//     let fa7 = document.getElementById("f7");
//     if (b) {
//         ans7.style.display = "block";
//         t7.style.color = "#00b8ff";
//         fa7.style.display = "none";
//         b = false;
//     } else {
//         ans7.style.display = "none";
//         t7.style.color = "black";
//         fa7.style.display = "block";
//         b = true;

//     }
// }
// let showorhide8 = function () {
//     let ans8 = document.getElementById("ans8");
//     let t8 = document.getElementById("t8");
//     let fa8 = document.getElementById("f8");
//     if (b) {
//         ans8.style.display = "block";
//         t8.style.color = "#00b8ff";
//         fa8.style.display = "none";
//         b = false;
//     } else {
//         ans8.style.display = "none";
//         t8.style.color = "black";
//         fa8.style.display = "block";
//         b = true;

//     }
// }
// let showorhide9 = function () {
//     let ans9 = document.getElementById("ans9");
//     let t9 = document.getElementById("t9");
//     let fa9 = document.getElementById("f9");
//     if (b) {
//         ans9.style.display = "block";
//         t9.style.color = "#00b8ff";
//         fa9.style.display = "none";
//         b = false;
//     } else {
//         ans9.style.display = "none";
//         t9.style.color = "black";
//         fa9.style.display = "block";
//         b = true;

//     }
// }
// let showorhide10 = function () {
//     let ans10 = document.getElementById("ans10");
//     let t10 = document.getElementById("t10");
//     let fa10 = document.getElementById("f10");
//     if (b) {
//         ans10.style.display = "block";
//         t10.style.color = "#00b8ff";
//         fa10.style.display = "none";
//         b = false;
//     } else {
//         ans10.style.display = "none";
//         t10.style.color = "black";
//         fa10.style.display = "block";
//         b = true;

//     }
// }