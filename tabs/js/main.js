let tab = document.querySelectorAll(".tab"); // получаем заголовки окон
let tabBody = document.querySelectorAll(".tab-body"); // получаем окна контента
init(1); //запускаем функцию скрытия контента кроме первого 



tab.forEach(function(element) { //проверка на нажатие таба
    element.onclick = showTabs;
});

function init(i) { // функция скрытия

    for (i; i < tabBody.length; i++) {
        tabBody[i].style.display = "none";
    }
}

function showTabs() {
    let data = this.getAttribute("data");
    init(0);
    document.querySelector(`.tab-body[data="${data}"]`).style.display = "block";
    for (let z = 0; tabBody.length; z++) {
        if (tabBody[z].style.display == "block") {
            tab[z].classList.add("active");
        } else {
            tab[z].classList.remove("active");
        }
    }
    // tabBody.forEach(function(e) {
    //     if (e.style.display == "block") {
    //         tab[e].classList.add("active");
    //     } else {
    //         tab[e].classList.remove("active");
    //     }
    // })
}



// if (tabBody[0].style.display == "block") {
//     tab[0].classList.add("active");
//     tab[1].classList.remove("active");
//     tab[2].classList.remove("active");

// } else {
//     if (tabBody[1].style.display == "block") {
//         tab[1].classList.add("active");
//         tab[0].classList.remove("active");
//         tab[2].classList.remove("active");
//     } else {
//         if (tabBody[2].style.display == "block") {
//             tab[2].classList.add("active");
//             tab[1].classList.remove("active");
//             tab[0].classList.remove("active");
//         }
//     }
// }

// if (document.querySelector(`.tab[data="${data}"]`).classList.contains("active")) {
//     document.querySelector(`.tab[data="${data}"]`).classList.remove("active");
// } else {
//     document.querySelector(`.tab[data="${data}"]`).classList.add("active");
// }