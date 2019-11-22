//  This is my validation for the contact form present in the footer

// Show your message in the alert p
function showErrorInContact(msg){
    let errorDiv = document.querySelector("#contact-form #error-msg");
    errorDiv.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}

// Function to validate your form inputs
function validateContactForm(){
    document.querySelector("#contact-form #error-msg").innerHTML = "";

    // Get all the values
    let name = document.querySelector("#contact-form input[name=name").value;
    let email = document.querySelector("#contact-form input[name=email").value;
    let subject = document.querySelector("#contact-form input[name=subject").value;
    let message = document.querySelector("#contact-form textarea[name=message").value;

    // Check if empty
    let cannotEmpty = [name, email, subject, message];
    for(var i in cannotEmpty){
        if(cannotEmpty[i] == ""){
            showErrorInContact("Please fill in all inputs!")
            return;
        }
    }

    // Check if email is legit
    let emailRegex = /^\S+[@]{1}\S+[.]{1}\S+$/;
    if(!email.match(emailRegex)){
        showErrorInContact("Please input a valid email!");
    }else{
        window.location.href = "thankyou.html";
    }
}

// Place validate function on the contact submit btn
document.getElementById("contact-btn").addEventListener("click", validateContactForm);