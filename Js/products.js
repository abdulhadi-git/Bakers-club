$(document).ready(function () {
    $('.grid-item img').data('title', 'Freshly baked with love, made to delight your taste buds. Order now and enjoy every bite!')
    $('.grid-item img').data('description', 'Visit our bakery to purchase fresh, delicious treats made daily.')
    $('.grid-item img').attr('data-bs-toggle', 'modal')
    $('.grid-item img').attr('data-bs-target', '#staticBackdrop');

    if (localStorage.getItem("CurrentUser")) {
        $('#order').attr("data-bs-toggle", "modal");
        $('#order').attr("data-bs-target", "#exampleModal");
    }

    $('.grid-item img').click(function () {
        let img = $(this).attr('src');
        let description = $(this).data('title');
        let subPara = $(this).data('description');

        $('#modal-img').attr('src', img);
        $('#modal-para').text(description);
        $('#modal-sub-para a').text(subPara);

    })
    $('.grid-item').attr('data-aos', 'zoom-in')
    AOS.refresh();

    // Quantity Logic

    let qty = 1;
    const qtyValidatepara = "Minimum quantity is 1.";
    function qtyCounter() {
        $('#qty').html(qty);
    }
    qtyCounter();
    $('#decrease').click(function () {
        if (qty > 1) {
            qty--;
            qtyCounter();
        } else {
            $('#qty-validation-para').html(qtyValidatepara);
        }
    })
    $('#increase').click(function () {
        qty++;
        qtyCounter();
        $('#qty-validation-para').html("");
    })

    $('#order').click(function () {
        if (!localStorage.getItem("CurrentUser")) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Sign in to continue..",
            });
            return;
        }
    })
    $('#confirm-form').submit(function (e) {
        e.preventDefault();
        Swal.fire({
            title: "Order Done",
            icon: "success",
        }).then(function(){
            window.location.href = "products.html";
        })
    })

})