const menuBtn = document.getElementById('btn');
let mobileMenu = document.getElementById("mobile_nav");

menuBtn.addEventListener('click', function() {
    if(window.getComputedStyle(mobileMenu).display === "none") {
        mobileMenu.style.display = "block"
    } else {
        mobileMenu.style.display = "none"
    }
})