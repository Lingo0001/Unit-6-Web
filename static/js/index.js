// Change style of navbar on scroll
window.onscroll = function() { myFunction() };
function myFunction() {
    var navbar = document.getElementById('navBar');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById('navBarSmall');
    if (x.className.indexOf('w3-show') == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Contact Form Validation
function validateForm() {
    let formEmail = document.forms["contactForm"]["EmailBox"].value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail) == false) {
        alert("Email is invalid");
    }
    let formName = document.forms["contactForm"]["NameBox"].value;
    let formMsg = document.forms["contactForm"]["MessageBox"].value;
    console.log(formName, formEmail, "\n", formMsg);
}