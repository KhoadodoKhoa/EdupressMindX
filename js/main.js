// JavaScript for handling tab switching in the course details page
document.addEventListener('DOMContentLoaded', function () {
    // Get all the tab buttons and tab content
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Add event listener for each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button and its corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
// Simple Pagination (Simulation for Blog Listing)
const pages = document.querySelectorAll('.page-number');
const blogsPerPage = 3; // Example, showing 3 blog posts per page
const blogItems = document.querySelectorAll('.blog-item');

// Function to display blogs for the active page
function showPage(page) {
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;

    blogItems.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? 'block' : 'none';
    });
}

// Add event listeners to page numbers
pages.forEach((pageButton, index) => {
    pageButton.addEventListener('click', (event) => {
        event.preventDefault();
        pages.forEach(p => p.classList.remove('active'));
        pageButton.classList.add('active');
        showPage(index + 1);
    });
});

// Initialize first page
showPage(1);
// Contact form validation
const contactForm = document.querySelector('.contact-us-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="comment"]').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('All fields are required.');
        } else {
            alert('Message sent successfully!');
        }
    });
}
// Approve or Reject Course
const courseApproveButtons = document.querySelectorAll('.btn-small');
courseApproveButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const action = event.target.textContent;
        if (action === 'Approve') {
            alert('Course Approved');
            // Change course status here (e.g., via backend API)
        } else if (action === 'Reject') {
            alert('Course Rejected');
        }
    });
});

// Delete Course
const deleteCourseButtons = document.querySelectorAll('.btn-small');
deleteCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this course?')) {
            alert('Course Deleted');
            // Handle course deletion here (e.g., via backend API)
        }
    });
});

// Handle User Deletion
const deleteUserButtons = document.querySelectorAll('.btn-small');
deleteUserButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this user?')) {
            alert('User Deleted');
            // Handle user deletion here
        }
    });
});

// Handle Promotions
const promotionForm = document.querySelector('form');
if (promotionForm) {
    promotionForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const promoCode = document.querySelector('#promotion-code').value;
        const discount = document.querySelector('#discount-percent').value;
        const validUntil = document.querySelector('#valid-until').value;

        if (promoCode && discount && validUntil) {
            alert('Promotion Added Successfully');
            // Handle promotion addition here (e.g., via backend API)
        } else {
            alert('All fields are required.');
        }
    });
}

// Delete Promotion
const deletePromoButtons = document.querySelectorAll('.btn-small');
deletePromoButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this promotion?')) {
            alert('Promotion Deleted');
            // Handle promotion deletion here
        }
    });
});
// Handle Account Deletion Request Form
const deletionRequestForm = document.querySelector('.deletion-request-form');
if (deletionRequestForm) {
    deletionRequestForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const reason = document.querySelector('#reason').value;

        if (reason) {
            alert('Your account deletion request has been submitted.');
            // Send the request to the admin (e.g., via backend API)
        } else {
            alert('Please provide a reason for deletion.');
        }
    });
}
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get all the tab links and tab panes
    const tabLinks = document.querySelectorAll('.tab-list li a');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Function to activate a tab and deactivate others
    function activateTab(link) {
        // Remove 'active' class from all tab links and tab panes
        tabLinks.forEach(function(link) {
            link.parentElement.classList.remove('active');
        });
        tabPanes.forEach(function(pane) {
            pane.classList.remove('active');
        });

        // Add 'active' class to the clicked tab link and the corresponding tab pane
        link.parentElement.classList.add('active');
        const targetPane = document.querySelector(link.getAttribute('href'));
        targetPane.classList.add('active');
    }

    // Add click event listeners to all tab links
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            activateTab(link); // Activate the clicked tab
        });
    });

    // Initially activate the first tab
    if (tabLinks.length > 0) {
        activateTab(tabLinks[0]);
    }
});
// Wait for the DOM content to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    // Get all the tab links and tab panes
    const tabLinks = document.querySelectorAll('.tab-list li a');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Function to activate a tab and deactivate others
    function activateTab(link) {
        // Remove 'active' class from all tab links and tab panes
        tabLinks.forEach(function(link) {
            link.parentElement.classList.remove('active');
        });
        tabPanes.forEach(function(pane) {
            pane.classList.remove('active');
        });

        // Add 'active' class to the clicked tab link and the corresponding tab pane
        link.parentElement.classList.add('active');
        const targetPane = document.querySelector(link.getAttribute('href'));
        targetPane.classList.add('active');
    }

    // Add click event listeners to all tab links
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            activateTab(link); // Activate the clicked tab
        });
    });

    // Initially activate the first tab
    if (tabLinks.length > 0) {
        activateTab(tabLinks[0]);
    }
});
