let header = `<nav class="navbar navbar-expand-lg px-3 position-fixed w-100 z-3 shadow">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="index.html"><span>Bakers</span> Club</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                    <li class="nav-item">
                        <a class="nav-link custom-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="faqs.html">Faq's</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="orders.html">Contact Us</a>
                    </li>
                </ul>
                <div class="d-flex gap-2 align-itms-center" id="nav-btns-holder">
                <a href="signin.html" class="custom-btn singin nav-btns mt-2" >Sign in!</a>
                <a href="signup.html" class="custom-btn signup nav-btns mt-2" >Sign up!</a>
                </div>
            </div>
        </div>
    </nav>`

let offcanvas = `
<div class="offcanvas offcanvas-start w-75" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"><span style="color: #B87C4C;">Bakers</span> Club</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   <div>
                <ul class="navbar-nav gap-2">
                    <li class="nav-item">
                        <a class="nav-link custom-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="products.html">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="about.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="faqs.html">Faq's</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link custom-link" href="orders.html">Contact Us</a>
                    </li>
                </ul>
                <a href="signin.html" class="custom-btn mt-2">Sign in!</a>
            </div>
  </div>
</div>`

let footer = ` <footer>
        <div class="container d-flex flex-column justify-content-center py-4">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <a href="index.html">
                        <h1 class="fs-1 fw-bold"><span style="color: #B87C4C;">Bakers</span> Club</h1>
                    </a> 
                    <p class="fs-5">Freshly baked, always loved</p>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <h1 class="fs-3  fw-bold">Our Products</h1>
                    <ul>
                        <a href="products.html">
                            <li>All</li>
                        </a>
                        <a href="products.html">
                            <li>Savory Items</li>
                        </a>
                        <a href="products.html">
                            <li>Sweets and Deserts</li>
                        </a>
                        <a href="products.html">
                            <li>Bread and buns</li>
                        </a>
                    </ul>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <a href=""><h1 class="fs-3 fw-bold">Contact Us</h1></a>
                    <p class="fs-5 lh-base">Contact us anytime for questions or support—we’re always happy to help.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <h1 class="fs-4 fw-bold">Follow us on</h1>
                    <p class="fs-5 lh-base">To keep connected with us follow us on:</p>
                    <div class="footer-icons">
                        <a href=""><img src="./imgaes/contact-images/facebook.png" alt=""></a>
                        <a href=""><img src="./imgaes/contact-images/instagram.png" alt=""></a>
                        <a href=""><img src="./imgaes/contact-images/media.png" alt=""></a>
                        <a href=""><img src="./imgaes/contact-images/twitter.png" alt=""></a>
                    </div>
                </div>
            </div>
            <hr>
            <div class="text-center py-1">
                <p class="fs-5 m-0">© Bakers Club All rights reserved</p>
            </div>
        </div>
    </footer>`

$(document).ready(function () {
    $('#header').html(header);
    $('#footer').html(footer);
    $('#canvas').html(offcanvas);

    // nav links active
    let PagePath = window.location.pathname.split("/").pop();
    $('.custom-link').each(function () {
        let currentPage = $(this).attr('href')
        if (currentPage == PagePath) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })
    // btn active
    let signinPage = $('.singin').attr('href')
    let signupPage = $('.signup').attr('href')
    $('.singin').each(function () {
        if (signinPage == PagePath) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })
    $('.signup').each(function () {
        if (signupPage == PagePath) {
            $(this).addClass('active')
        } else {
            $(this).removeClass('active')
        }
    })

    if (localStorage.getItem("CurrentUser")) {
        $('.nav-btns').remove();
        let profileNav = `<a href="profile.html" class="custom-btn mt-2" >Profile</a>`
        $('#nav-btns-holder').append(profileNav);
    }
    $('#logout-btn').click(function () {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: true
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure? You want to log out !",
            icon: "warning",
            confirmButtonText: "Log out",
            cancelButtonText: "cancel",
            showCancelButton: true,
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Log out Successfully",
                    icon: "success",
                }).then(function () {
                    window.location.href = "signin.html";
                    localStorage.removeItem("CurrentUser");
                    localStorage.removeItem("CurrentEmail");
                })
            }
        })
    })
})