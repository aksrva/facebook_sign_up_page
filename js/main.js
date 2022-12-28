// Form Validation
function errorShow(inputId, i, m) {
    document.getElementById(i).innerHTML = m;
    document.getElementById(inputId).classList = "error_border";
}
function errorHide(inputId, i) {
    document.getElementById(i).innerHTML = "";
    document.getElementById(inputId).classList = "";
}

function errorGenderShow(i1, i2, i3, i, m) {
    document.getElementById(i).innerHTML = m;
    document.querySelector(i1).classList.add("error_border");
    document.querySelector(i2).classList.add("error_border");
    document.querySelector(i3).classList.add("error_border");
}
function errorGenderHide(i1, i2, i3, i, m) {
    document.getElementById(i).innerHTML = "";
    document.querySelector(i1).classList.remove("error_border");
    document.querySelector(i2).classList.remove("error_border");
    document.querySelector(i3).classList.remove("error_border");

}

function formValidate() {
    let f_name, l_name, mobile_email, pass, date, month, year, gender;
    f_name = document.getElementById("first_name").value;
    l_name = document.getElementById("last_name").value;
    mobile_email = document.getElementById("mobile_email").value;
    pass = document.getElementById("password").value;
    date = document.getElementById("date").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    gender = document.getElementsByName("gender");
    let check;
    for (let g of gender) {
        if (g.checked) {
            gender = g.checked;
            check = true;
        }
    }
    console.log(month)

    if (f_name.length == 0 || l_name.length == 0 || mobile_email.length == 0 || pass.length == 0 || date.length == 0 || month.length == 0 || year.length == 0 || gender != true) {
        if (f_name.length == 0) {
            errorShow("first_name", "f_name_error", "Enter First Name");
            document.querySelector(".f_name .fa").style.display = "block";
        } else {
            errorHide("first_name", "f_name_error");
            document.querySelector(".f_name .fa").style.display = "none";
        }
        if (l_name.length == 0) {
            document.querySelector(".l_name .fa").style.display = "block";
            errorShow("last_name", "l_name_error", "Enter Surname")
        } else {
            errorHide("last_name", "l_name_error");
            document.querySelector(".l_name .fa").style.display = "none";
        }
        if (mobile_email.length == 0) {
            document.querySelector(".mobile_email .fa").style.display = "block";
            errorShow("mobile_email", "mobile_email_error", "Please Provide Email or Mobile No.")
        } else {
            errorHide("mobile_email", "mobile_email_error");
            document.querySelector(".mobile_email .fa").style.display = "none";
        }
        if (pass.length == 0) {
            document.querySelector(".password .fa").style.display = "block";
            errorShow("password", "password_error", "Enter New Password")
        } else {
            errorHide("password", "password_error");
            document.querySelector(".password .fa").style.display = "none";
        }
        if (date.length == 0) {
            document.querySelector(".age .fa").style.display = "block";
            errorShow("date", "date_error", "Enter Date");
        } else {
            document.querySelector(".age .fa").style.display = "none";
            errorHide("date", "date_error");
        }
        if (month.length == 0) {
            document.querySelector(".age .fa").style.display = "block";
            console.log("yes");
            errorShow("month", "month_error", "Enter Month");
        } else {
            document.querySelector(".age .fa").style.display = "none";
            errorHide("month", "month_error");
        }
        if (year.length == 0) {
            document.querySelector(".age .fa").style.display = "block";
            errorShow("year", "year_error", "Enter Year");
        } else {
            document.querySelector(".age .fa").style.display = "none";
            errorHide("year", "year_error");
        }
        if (gender == true) {
            errorGenderHide(".male", ".female", ".custom", "gender_error");
            document.querySelector(".gender .fa").style.display = "none";
        } else {
            errorGenderShow(".male", ".female", ".custom", "gender_error", "Please Select Gender");
            document.querySelector(".gender .fa").style.display = "block";
        }
        return false;
    } else {
        return true;
    }
}