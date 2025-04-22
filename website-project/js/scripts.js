// JavaScript code for website interactivity

// Carousel slider functionality
const slides = document.querySelectorAll('.carousel .slide');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
    showSlide(currentIndex);
}

// Move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide
    showSlide(currentIndex);
}

// Event listeners for buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play functionality
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initialize the first slide
showSlide(currentIndex);

// Form validation for join with us page
document.querySelector('#login-form').addEventListener('submit', function(event) {
    const username = document.querySelector('#login-username').value;
    const password = document.querySelector('#login-password').value;
    if (!username || !password) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

document.querySelector('#register-form').addEventListener('submit', function(event) {
    const regUsername = document.querySelector('#register-username').value;
    const regPassword = document.querySelector('#register-password').value;
    if (!regUsername || !regPassword) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Admin dashboard functionality for adding books
document.querySelector('#add-book-form').addEventListener('submit', function(event) {
    const bookName = document.querySelector('#book-name').value;
    const bookImage = document.querySelector('#book-image').value;
    const bookDetails = document.querySelector('#book-details').value;
    if (!bookName || !bookImage || !bookDetails) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});