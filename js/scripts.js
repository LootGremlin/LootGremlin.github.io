/*!
* Start Bootstrap - Freelancer v7.0.4 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Slideshow

var slideIndex = 0;

function showSlides(modalId) {
    let slides = document.querySelectorAll(`#${modalId} .mySlides`);
    let timer;

    function updateSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex-1].style.display = "block";  
        slides[slideIndex-1].classList.add("fade");
        timer = setTimeout(updateSlides, 7000); // Change slide every 7 seconds
    }

    // Initialize the slides in the specific modal
    updateSlides();
    
    // Clear timer when modal is hidden to avoid overlapping timers
    document.getElementById(modalId).addEventListener('hidden.bs.modal', () => {
        clearTimeout(timer);
        slideIndex=0;
    });
}

// Function to show specific slide in a specific modal
function plusSlides(modalId, n) {
    let slides = document.querySelectorAll(`#${modalId} .mySlides`);

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].style.display === "block") {
            slideIndex = i;
            break;
        }
    }

    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex].style.display = "block";  
}

// Event listener for modal showing to start slides
document.querySelectorAll('.portfolio-modal').forEach(modal => {
    modal.addEventListener('shown.bs.modal', function () {
        showSlides(this.id);
    });
});