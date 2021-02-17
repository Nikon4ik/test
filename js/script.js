function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("webp");
    } else {
        document.querySelector("body").classList.add("no-webp");
    }
});
;
function OpenMenu() {
    document.querySelector(".header__burger").classList.toggle("header__burger-active");
    document.querySelector(".header__menu").classList.toggle("header__menu-active");
    document.querySelector("body").classList.toggle("lock");
};
function Select(event) {
    document.querySelectorAll(".select-box__item").forEach((item) => {
        item.style.display = "initial";
    });
    event.currentTarget.style.display = "none";
}

function Current() {
    const item = document.querySelector(".select-box__current");
    item.classList.toggle("select-box__current_active");
    
    document.querySelectorAll(".select-box__input").forEach((input) => {
        if( input.checked == true ) {
            document.querySelector(".select-box .p3").style.top = "6px";
        }
    });
}

function Remove() {
    document.querySelectorAll(".select-box__input").forEach((input) => {
        input.checked = false;
    });

    document.querySelectorAll(".select-box__item").forEach((item) => {
        item.style.display = "initial";
    });

    document.querySelector(".select-box .p3").style.top = "calc(50% - 10px)";
}

(function () {
    const item = document.querySelector(".select-box__current");
    document.onclick = function(event) {
        const classList = event.target.classList;
        if( classList.contains("select-box__current") != true && classList.contains("select-box__input-text") != true && classList.contains("p3") != true && classList.contains("select-box__icon") != true && classList.contains("select-box__close-button") != true ) {
            item.classList.remove("select-box__current_active");
        }
    }
}());;
