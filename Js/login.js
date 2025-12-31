$('#form').submit(function (e) {
    e.preventDefault();

    let email = $('#email').val();
    let password = $('#password').val();

    let registerPass = localStorage.getItem(email);

    if (!localStorage.getItem(email)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email not found!",
        });

    } else {
        if (password != registerPass) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password is incorrect!",
            });

        } else {
            Swal.fire({
                title: "Login Successfull!",
                icon: "success",
            }).then(function () {
                let userName = localStorage.getItem(email + "_name");
                localStorage.setItem("CurrentUser", userName);
                localStorage.setItem("CurrentEmail", email);
                window.location.href = "index.html";
            })

        }

    }

})