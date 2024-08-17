const form = document.querySelector('form');
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')
const email = document.getElementById("email")
const mess = document.getElementById("opinion");
let formSubmitted = false;

function resetStarRating() {
    ratingValue.value = 0;

    allStar.forEach(star => {
        star.classList.replace('bxs-star', 'bx-star');
        star.classList.remove('active');
    });
}

allStar.forEach((star, idx) => {
    star.addEventListener('click', function() {
        const isActive = star.classList.contains('active');

        if (!isActive) {
            ratingValue.value = idx + 1;

            allStar.forEach((s, i) => {
                if (i <= idx) {
                    s.classList.replace('bx-star', 'bxs-star');
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                    s.classList.replace('bxs-star', 'bx-star');
                }
            });
        } else {
            ratingValue.value = idx;

            allStar.forEach((s, i) => {
                if (i >= idx) {
                    s.classList.remove('active');
                    s.classList.replace('bxs-star', 'bx-star');
                }
            });
        }
    });
});

function checkInputs(){
    const items = document.querySelectorAll(".feedback-input");

    for(const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup",() => {
            checkEmail();
        });
        
        item.addEventListener("keyup" , () => {
            if (item.value !="") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error")
            }
        });
    }
}

function checkEmail(){
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else{
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}



form.addEventListener("reset" , (e) => {
    
    resetStarRating();
    form.reset();
    return false;
});

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    checkInputs()

    if (!mess.classList.contains("error") && !email.classList.contains("error")){

        alert("Rating sent sucessfully!");
        storeData();
        formSubmitted = true;
        resetStarRating();
        form.reset();
        return false;
    }
    
});

function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires = " + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";

}
document.cookie = "name = yong; expires=Fri, 31 Dec 2024 12:00:00 UTC; path=/";
function storeData() {
    var email = document.getElementById("email").value;
    var opinion = document.getElementById("opinion").value;
    var rating = ratingValue.value; // Correctly use ratingValue
    console.log("Email:", email); // Debugging
    console.log("Opinion:", opinion); // Debugging
    console.log("Rating:", rating); // Debugging

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("email", email);
        sessionStorage.setItem("opinion", opinion);
        setCookie("rating", rating, 2); // Set the rating cookie
    }
}




