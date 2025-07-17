// Loading animation
        window.addEventListener('load', () => {
            const loadingOverlay = document.querySelector('.loading-overlay');
            setTimeout(() => {
                loadingOverlay.classList.add('hidden');
            }, 1000);
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.querySelector('.nav-links');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
const header = document.querySelector('header');
const tog = document.querySelector('.menu-toggle');
        let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.classList.add('header-scrolled');
                tog.classList.add('toggle-scrolled');
                
            } else {
                header.classList.remove('header-scrolled');
                                tog.classList.remove('toggle-scrolled')
            }
            
            // Hide/show header on scroll
            if (currentScrollY > lastScrollY && currentScrollY > 500) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.skill-card, .project-card').forEach(el => {
            observer.observe(el);
        });

        // Staggered animations
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });

        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
// Form handling with Brevo API via PHP backend
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    // Simple validation
    if (!formData.get('name') || !formData.get('email') || !formData.get('subject') || !formData.get('message')) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    if (!isValidEmail(formData.get('email'))) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Button loading state
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('send-email.php', {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        console.log('Server response:', result);

        if (response.ok && result.includes('successfully')) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        showNotification('An error occurred. Please try again later.', 'error');
        console.error('Fetch error:', error);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Utility functions
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}


// Utility functions
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateY(-20px)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

        // Enhanced particle system
        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positioning and timing
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                
                // Random size
                const size = Math.random() * 3 + 1;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize particles
        createParticles();

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const heroParticles = document.querySelector('.particles');
            
            if (heroContent && scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });

        // Theme toggle functionality (bonus feature)
        function createThemeToggle() {
            const themeToggle = document.createElement('button');
            themeToggle.innerHTML = '🌙';
            themeToggle.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: none;
                background: var(--primary-color);
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 1000;
                transition: all 0.3s ease;
                box-shadow: var(--shadow);
            `;
            
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                themeToggle.innerHTML = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
            });
            
            document.body.appendChild(themeToggle);
        }

        // Initialize theme toggle
        createThemeToggle();

        // Typing effect for hero text
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            const originalText = element.innerHTML;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    // Add cursor blink effect
                    element.innerHTML = originalText;
                }
            }
            
            type();
        }

        // Enhanced scroll animations
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.skill-card, .project-card');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('animate');
                }
            });
        }

        // Debounced scroll handler
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Add performance-optimized scroll listener
        window.addEventListener('scroll', debounce(handleScrollAnimations, 10));

        // Initialize animations on load
        document.addEventListener('DOMContentLoaded', () => {
            handleScrollAnimations();
            
            // Add entrance animations to hero content
            const heroElements = document.querySelectorAll('.hero-badge, .hero h1, .hero p, .hero-buttons');
            heroElements.forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // Enhanced form validation
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', validateField);
            input.addEventListener('input', clearFieldError);
        });

        function validateField(e) {
            const field = e.target;
            const value = field.value.trim();
            
            removeFieldError(field);
            
            if (!value) {
                showFieldError(field, 'This field is required');
                return false;
            }
            
            if (field.type === 'email' && !isValidEmail(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
            
            if (field.name === 'message' && value.length < 10) {
                showFieldError(field, 'Message must be at least 10 characters long');
                return false;
            }
            
            return true;
        }

        function showFieldError(field, message) {
            const errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.style.cssText = `
                color: #ef4444;
                font-size: 0.875rem;
                margin-top: 0.5rem;
                animation: fadeInUp 0.3s ease;
            `;
            
            field.parentNode.appendChild(errorElement);
            field.style.borderColor = '#ef4444';
        }

        function removeFieldError(field) {
            const errorElement = field.parentNode.querySelector('.field-error');
            if (errorElement) {
                errorElement.remove();
            }
            field.style.borderColor = '';
        }

        function clearFieldError(e) {
            removeFieldError(e.target);
        }

        // Add CSS for light theme
        const lightThemeStyles = `
            body.light-theme {
                --dark-bg: #ffffff;
                --card-bg: #f8fafc;
                --text-primary: #1e293b;
                --text-secondary: #475569;
                --border-color: #e2e8f0;
                --glass-bg: rgba(248, 250, 252, 0.8);
            }
        `;
        
        const styleSheet = document.createElement('style');
        styleSheet.textContent = lightThemeStyles;
        document.head.appendChild(styleSheet);

        // Performance optimization: Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Add keyboard navigation support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });

        // Add focus management for accessibility
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid var(--primary-color)';
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });

        console.log('🚀 Portfolio loaded successfully!');