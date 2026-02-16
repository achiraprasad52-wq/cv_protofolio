// =============================
// Typing effect
// =============================
const typingText = ["Web Developer", "POS System Developer", "Software Engineer"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

const typingSpan = document.getElementById('typing');

function type() {
    if(index >= typingText.length) index = 0;
    currentText = typingText[index];

    if(!isDeleting) {
        typingSpan.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;
        if(charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        typingSpan.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
        if(charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// =============================
// Dark/Light Theme Toggle
// =============================
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// =============================
// Reveal on Scroll
// =============================
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for(let i=0; i<reveals.length; i++){
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
// =============================
// Contact Form Email Send
// =============================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Contact Form Message from ${name}`);
    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    // Open default email client
    window.location.href = `mailto:achira.prasad@example.com?subject=${subject}&body=${body}`;
});
