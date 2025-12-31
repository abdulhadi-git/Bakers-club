$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        // getting input field

        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#tel').val();
        let message = $('#Description').val();

        let ReadyToSubmit = true;

        // validation for name

        if (name == "") {
            $('#name-error-msg').html("Enter your name");
            ReadyToSubmit = false;
        } else {
            if (name.length < 5) {
                $('#name-error-msg').html("Enter full name.");
                ReadyToSubmit = false;
            } else {
                $('#name-error-msg').html("");
            }
        }

        // validation for email

        if (email == "") {
            $('#email-error-msg').html('Enter your email.');
            ReadyToSubmit = false;
        } else {
            if (!email.endsWith("@gmail.com")) {
                $('#email-error-msg').html('Enter correct email.');
                ReadyToSubmit = false;
            } else {
                $('#email-error-msg').html("");
            }
        }

        // validation for phone number

        if (phone == "") {
            $('#phone-error-msg').html('Enter your phone number.');
            ReadyToSubmit = false;
        } else {
            if (phone.length < 11) {
                $('#phone-error-msg').html('Enter correct phone number.');
                ReadyToSubmit = false;
            } else {
                $('#phone-error-msg').html("");
            }
        }

        // validation for text area

        if (message == "") {
            $('#description-error-msg').html("Enter your Message");
            ReadyToSubmit = false;
        } else {
            if (message.length < 20) {
                $('#description-error-msg').html("Enter minimum 20 characters.");
                ReadyToSubmit = false;
            } else {
                $('#description-error-msg').html("");
            }
        }



        // alert

        if (ReadyToSubmit == true) {
            Swal.fire({
                title: "Done!",
                icon: "success",
                html: "Form submitted successfully.",
                timer: 2000,
                timerProgressBar: true,
            })
            this.reset();
        }
    })
})