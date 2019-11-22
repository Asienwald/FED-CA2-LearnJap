//  This is my js file for the signup form validation

// Show error message in an alert p tag
function showError(msg){
    let errorDiv = document.querySelector("#signup-form #signup-error-msg");
    errorDiv.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}

// Function to validate signup form inputs
function validateSignUpInputs(){
    document.querySelector("#signup-form #signup-error-msg").innerHTML = "";

    // Get all the values of the inputs
    var email = document.querySelector("#signup-form #email").value;
    var uid = document.querySelector("#signup-form #uid").value;
    var pwd1 = document.querySelector("#signup-form #pwd1").value;
    var pwd2 = document.querySelector("#signup-form #pwd2").value;

    // Check if any inputs are empty
    let cannotEmpty = [email, uid, pwd1, pwd2];
    for(var i in cannotEmpty){
        if(cannotEmpty[i] == ""){
            showError("Please fill in all inputs!");
            return;
        }
    }

    // Check if email & password is legit and check if both passwords are same
    let emailRegex = /^\S+[@]{1}\S+[.]{1}\S+$/;
    let pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&.]{8,}$/;
    if(!email.match(emailRegex)){
        showError("Please input a valid email!");
    }else if(pwd1 != pwd2){
        showError("Please key in matching passwords!");
    }else if(!pwd1.match(pwdRegex)){
        showError("Your password must be at least 8 characters long, have capital letters & numbers");
    }else{
        window.location.href = "thankyou.html";
        return;
    }
}

//  Empty all inputs when signup modal is closed
function resetAllInputFields(){
    document.querySelector("#signup-form #signup-error-msg").innerHTML = "";
    document.querySelector("#signup-form #email").value = "";
    document.querySelector("#signup-form #uid").value = "";
    document.querySelector("#signup-form #pwd1").value = "";
    document.querySelector("#signup-form #pwd2").value = "";
}

// Set the onclick listeners onto the buttons in the modal
document.querySelector("#signup-form .modal-header button").addEventListener("click", resetAllInputFields);
document.getElementById("signup-btn").addEventListener("click", validateSignUpInputs);