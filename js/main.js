// Signmastr Website JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Set active nav link based on current page
    setActiveNavLink();

    // Smooth scroll for anchor links
    enableSmoothScroll();

    // Add animation on scroll
    observeElements();
});

// Set active navigation link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
function enableSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content sections
    document.querySelectorAll('.content-section, .card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Calculate projected bonus (for performance scoring page)
function calculateBonus(points) {
    const baseBonus = 500; // RM 500 base
    let multiplier = 0.5;

    if (points >= 8001) {
        multiplier = 2.5;
    } else if (points >= 6001) {
        multiplier = 2.0;
    } else if (points >= 4001) {
        multiplier = 1.5;
    } else if (points >= 2001) {
        multiplier = 1.0;
    }

    return {
        bonus: baseBonus * multiplier,
        multiplier: multiplier,
        tier: getTierName(points)
    };
}

function getTierName(points) {
    if (points >= 8001) return 'Exceptional';
    if (points >= 6001) return 'Outstanding';
    if (points >= 4001) return 'Exceeding Expectations';
    if (points >= 2001) return 'Meeting Expectations';
    return 'Developing';
}

// Bonus Calculator (if exists on page)
const bonusCalculator = document.getElementById('bonus-calculator');
if (bonusCalculator) {
    const pointsInput = document.getElementById('points-input');
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('calculation-result');

    calculateBtn.addEventListener('click', function() {
        const points = parseInt(pointsInput.value) || 0;
        const result = calculateBonus(points);

        resultDiv.innerHTML = `
            <div class="alert alert-success">
                <h4>Calculation Result:</h4>
                <p><strong>Points:</strong> ${points}</p>
                <p><strong>Performance Tier:</strong> ${result.tier}</p>
                <p><strong>Multiplier:</strong> ${result.multiplier}x</p>
                <p><strong>Projected Bonus:</strong> RM ${result.bonus.toFixed(2)}</p>
            </div>
        `;
    });
}

// Print functionality
function printPage() {
    window.print();
}

// Search functionality (simple client-side search)
function searchContent(query) {
    const content = document.querySelector('.container').textContent.toLowerCase();
    return content.includes(query.toLowerCase());
}

// Export data as JSON (for admin purposes)
function exportData(data) {
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'signmastr-data.json';
    link.click();
}

// Back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
