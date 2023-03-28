var navBar = document.getElementById('Nav__Bar');


window.onscroll = function() {
    var scrollVal = window.scrollY;
    
    if (scrollVal > 0) {
        navBar.classList.remove('bg_Navbar');
        navBar.classList.add('bg_NavBar_Scroll');
    } else {
        navBar.classList.remove('bg_NavBar_Scroll');
        navBar.classList.add('bg_Navbar');
    }
}