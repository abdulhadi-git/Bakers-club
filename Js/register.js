$('#form').submit(function (e) {
    e.preventDefault();

    let userName = $('#name').val();
    let email = $('#email').val();
    let password = $('#password').val();

    if (localStorage.getItem(email)) {
        Swal.fire({
            title: "Email already registered",
            text: "Try signing in ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sign in"
        })

        let action = Swal.getConfirmButton();
        $(action).click(function () {
            window.location.href = "signin.html";
        })

    } else { 
        localStorage.setItem(email + "_name", userName);
        localStorage.setItem(email, password);
        Swal.fire({
            title: "Sign up Successfully",
            text: "Login to continue!",
            icon: "success",
        }).then(function () {
            window.location.href = "signin.html";
        })
    }


})