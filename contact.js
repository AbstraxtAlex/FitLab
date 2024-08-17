const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const mess = document.getElementById("message");

function checkInputs(){
    const items = document.querySelectorAll(".contact-input");

    for(const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != ""){
            checkEmail();
        }

        if(items[2].value != ""){
            checkPhone();
        }

        items[1].addEventListener("keyup",() => {
            checkEmail();
        });

        items[2].addEventListener("keyup", () => {
            checkPhone();
        });

        item.addEventListener("keyup" , () => {
            if (item.value !="") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error")
            } else {
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
    } else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

function checkPhone(){
    const phoneRegex = /^(?:\+?60)?(?:\s|-)?(?:\d{3})?(?:\s|-)?(?:\d{7})$/;
    const errorTxtPhone = document.querySelector(".error-txt.phone");

    if(!tel.value.match(phoneRegex)) {
        tel.classList.add("error");
        tel.parentElement.classList.add("error");

        if (tel.value != "") {
            errorTxtPhone.innerText = "Enter a valid phone number with (+60)";
        } else {
            errorTxtPhone.innerText = "Phone number can't be blank";
        }
    } else {
        tel.classList.remove("error");
        tel.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !tel.classList.contains("error") && !mess.classList.contains("error")) {
        storeData();  // Store data after successful validation
        alert("Your submission has been done");

        form.reset();  // Reset form fields
    }
});

function storeData() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var timestamp = new Date().getTime();  // Use the current timestamp as a unique key

    var newData = {
        name: name,
        phone: phone,
        email: email,
        message: message
    };

    localStorage.setItem(`formData_${timestamp}`, JSON.stringify(newData));  // Store each entry under a unique key
}

