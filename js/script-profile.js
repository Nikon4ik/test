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
function Validate(event) {
    event.preventDefault();
    const userName = document.querySelector('input[name="userName"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');
    var first_element = document.createElement("p");
    var second_element = document.createElement("p");
    var third_element = document.createElement("p");

    if ( !userName.value ) {
        userName.classList.add("error");
        if( !userName.nextElementSibling ) {
            first_element.innerText = "Please enter a valid name";
            first_element.classList.add("error-text");
            document.querySelector('.profile__inputs .first_element').insertBefore(first_element, userName.nextElementSibling);
        }
    }
    else {
        userName.classList.add("success");
    }


    if ( email.value.indexOf('@') > -1 ) {
        email.classList.add("success");
    }
    else {
        email.classList.add("error");
        if( !email.nextElementSibling ) {
            second_element.innerText = "Please enter a valid e-mail";
            second_element.classList.add("error-text");
            document.querySelector('.profile__inputs .second_element').insertBefore(second_element, email.nextElementSibling);
        }
    }

    if ( phone.value.length != 17 ) {
        phone.classList.add("error");
        if( !phone.nextElementSibling ) {
            third_element.innerText = "Please enter a valid phone";
            third_element.classList.add("error-text");
            document.querySelector('.profile__inputs .third_element').insertBefore(third_element, phone.nextElementSibling);
        }
    }
    else {
        phone.classList.add("success");
    }
    
}

(function() {
    document.querySelectorAll('.profile__inputs input').forEach((input) =>  {


        input.onfocus = function () {
            input.previousElementSibling.classList.add("active");
        }
        input.onblur = function () {
            if ( input.value != "" ) {
                input.previousElementSibling.classList.add("active");
            }
            else {
                input.previousElementSibling.classList.remove("active");
            }
        }

        input.onclick = function() {
            input.classList.remove("error");
            input.classList.remove("success");
            if ( input.nextElementSibling != null && input.nextElementSibling.classList.contains("error-text") ) {
                input.nextElementSibling.remove();
            }
        };
        
    });
}());;
