document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

// $(document).ready(function () {

//     // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function () {

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");

//     });
// });

function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('is-active');
}

// Get the More link element
var moreLink = document.querySelector('.navbar-item.has-dropdown');

// Add a click event listener to the More link
moreLink.addEventListener('click', toggleDropdown);

// Function to toggle the dropdown
function toggleDropdown() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('is-active');
}




// document.getElementById("sectionDropdown").addEventListener("change", function () {
//     var selectedSection = this.value;
//     if (selectedSection) {
//         var targetSection = document.getElementById(selectedSection);
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: "smooth" });
//         }
//     }
// });


function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}



