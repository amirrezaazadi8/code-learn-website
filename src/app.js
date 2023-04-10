const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const field = document.getElementById("field");
const number = document.getElementById("number");

const firstNameMsg = document.getElementById("firstNameMsg");
const lastNameMsg = document.getElementById("lastNameMsg");
const filedMsg = document.getElementById("filedMsg");
const numberMsg = document.getElementById("numberMsg");
const successMsg = document.getElementById("successMsg");
const onSuccessMsg = document.getElementById("onSuccessMsg");

const signUpBtn = document.getElementById("sign-up");

// ----------------------- click sign up btn
signUpBtn.addEventListener("click", signUp);
function signUp(event) {
    event.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const fieldValue = field.value;
    const numberValue = number.value;

    // -------------- name
    if (firstNameValue.length === 0) {
        firstNameMsg.innerText = "لطفا نام خود را وارد کنید";
    } else {
        firstNameMsg.innerText = "";
    }
    if (lastNameValue.length === 0) {
        lastNameMsg.innerText = "لطفا نام خانوادگی خود را وارد کنید";
    } else {
        lastNameMsg.innerText = "";
    }

    // ---------------- field
    if (fieldValue.length === 0) {
        filedMsg.innerText = "لطفا رشته مورد نظر خود را وارد کنید";
    } else {
        filedMsg.innerText = "";
    }

    // ----------------- number
    if (numberValue.length === 0) {
        numberMsg.innerText = "لطفا شماره تلفن خود را وارد کنید";
    } else {
        numberMsg.innerText = "";
    }

    // ------------------ success or onsuccess 
    if (firstNameValue.length === 0 | lastNameValue.length === 0 | fieldValue.length === 0 | numberValue.length === 0) {
        onSuccessMsg.innerText = "ثبت فرم انجام نشد";
    } else {
        onSuccessMsg.innerText = ""
        successMsg.innerText = "ثبت نام انجام شد";
    }

}