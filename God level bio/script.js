// ========================================
// CYBER PHONK PORTFOLIO - SIDDHARTH JADHAV
// Interactive Animations & Effects
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // TYPING ANIMATION
    // ========================================
    const typedText = document.querySelector('.typed-text');
    const phrases = [
         'Accounting',
        'Taxation',
        'Auditing',
        'Financial Analysis',
        'CA Aspirant'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    typeEffect();
    
    // ========================================
    // NAVIGATION SCROLL EFFECT
    // ========================================
    const nav = document.querySelector('.cyber-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // ========================================
    // SMOOTH SCROLL FOR NAV LINKS
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // ========================================
    // SCROLL REVEAL ANIMATION
    // ========================================
    const revealElements = document.querySelectorAll('.skill-category, .project-card, .about-content');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        revealElements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                setTimeout(() => {
                    element.classList.add('reveal');
                    element.classList.add('active');
                }, index * 100);
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
    
    // ========================================
    // SKILL BAR ANIMATION
    // ========================================
    const skillItems = document.querySelectorAll('.skill-item');
    let skillsAnimated = false;
    
    const animateSkills = () => {
        if (skillsAnimated) return;
        
        const skillsSection = document.getElementById('skills');
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            skillsAnimated = true;
            
            skillItems.forEach((item, index) => {
                const skillPercent = item.getAttribute('data-skill');
                const progressBar = item.querySelector('.skill-progress');
                
                setTimeout(() => {
                    progressBar.style.width = skillPercent + '%';
                }, index * 200);
            });
        }
    };
    
    window.addEventListener('scroll', animateSkills);
    
    // ========================================
    // STAT COUNTER ANIMATION
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;
    
    const animateStats = () => {
        if (statsAnimated) return;
        
        const heroSection = document.getElementById('home');
        const sectionTop = heroSection.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight - 200) {
            statsAnimated = true;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count')) || 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        stat.textContent = target;
                    }
                };
                
                updateCount();
            });
        }
    };
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Initial check
    
    // ========================================
    // MOBILE NAVIGATION TOGGLE
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.background = 'rgba(10, 10, 10, 0.95)';
                navMenu.style.padding = '20px';
                navMenu.style.borderBottom = '1px solid var(--neon-cyan)';
            }
        });
    }
    
    // ========================================
    // GLITCH EFFECT ON HOVER
    // ========================================
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
        
        
        element.addEventListener('mouseleave', () => {
            element.style.animation = 'glitch-anim 2.5s infinite linear alternate-reverse';
        });
    });
    
    // ========================================
    // PROJECT CARD HOVER EFFECTS
    // ========================================
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // ========================================
    // FORM SUBMISSION HANDLER
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.querySelector('.btn-text').textContent;
            
            submitBtn.querySelector('.btn-text').textContent = 'SENDING...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.querySelector('.btn-text').textContent = 'MESSAGE SENT!';
                submitBtn.style.background = 'var(--neon-green)';
                submitBtn.style.borderColor = 'var(--neon-green)';
                submitBtn.style.color = 'var(--bg-primary)';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.querySelector('.btn-text').textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 3000);
                
            }, 1500);
        });
    }
    
    // ========================================
    // CURSOR EFFECT (Custom Cursor)
    // ========================================
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--neon-cyan);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    
    // Only show custom cursor on desktop
    if (window.matchMedia('(min-width: 768px)').matches) {
        document.body.appendChild(cursor);
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        // Cursor hover effect on links
        document.querySelectorAll('a, button, .project-card, .skill-category').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = 'var(--neon-pink)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--neon-cyan)';
            });
        });
    }
    
    // ========================================
    // PARALLAX EFFECT ON SCROLL
    // ========================================
    const heroVisual = document.querySelector('.hero-visual');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrollY * 0.1}px)`;
        }
    });
    
    // ========================================
    // SCROLL PROGRESS BAR
    // ========================================
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--neon-cyan), var(--neon-pink));
        z-index: 1001;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
    
    // ========================================
    // TOOLTIP EFFECT ON TOOLS
    // ========================================
    const toolItems = document.querySelectorAll('.tool-item');
    
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateX(10px)';
            item.style.borderColor = 'var(--neon-pink)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateX(0)';
            item.style.borderColor = 'transparent';
        });
    });
    
    // ========================================
    // CERTIFICATION HOVER ANIMATION
    // ========================================
    const certItems = document.querySelectorAll('.cert-item');
    
    certItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // ========================================
    // BACKGROUND ANIMATION INTENSITY ON SCROLL
    // ========================================
    const gridOverlay = document.querySelector('.grid-overlay');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (gridOverlay) {
            gridOverlay.style.opacity = 0.3 + (scrollY / window.innerHeight) * 0.5;
        }
    });
    
    // ========================================
    // PREVENT DEFAULT FOR ANCHOR LINKS
    // ========================================
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Add click effect
            link.style.color = 'var(--neon-cyan)';
            setTimeout(() => {
                link.style.color = '';
            }, 300);
        });
    });
    
    // ========================================
    // ADD LOADING ANIMATION
    // ========================================
    const loader = document.createElement('div');
    loader.classList.add('page-loader');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-primary);
        z-index: 10000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: opacity 0.5s ease, visibility 0.5s ease;
    `;
    
    const loaderContent = `
        <div class="loader-text" style="
            font-family: var(--font-display);
            font-size: 1.5rem;
            color: var(--neon-cyan);
            margin-bottom: 20px;
            letter-spacing: 5px;
        ">LOADING PORTFOLIO</div>
        <div class="loader-bar" style="
            width: 200px;
            height: 3px;
            background: var(--bg-tertiary);
            position: relative;
            overflow: hidden;
        ">
            <div class="loader-progress" style="
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0%;
                background: linear-gradient(90deg, var(--neon-cyan), var(--neon-pink));
                animation: loadProgress 1.5s ease forwards;
            "></div>
        </div>
        <style>
            @keyframes loadProgress {
                0% { width: 0%; }
                100% { width: 100%; }
            }
        </style>
    `;
    
    loader.innerHTML = loaderContent;
    document.body.appendChild(loader);
    
    // Hide loader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1500);
    });
    
    console.log('%c🌐 SIDDHARTH JADHAV - Portfolio Loaded', 'color: #00f5ff; font-size: 16px; font-weight: bold;');
    console.log('%c📊 Finance Portfolio Loaded', 'color: #ff00ff; font-size: 12px;');
});

// ========================================
// ADDITIONAL UTILITY FUNCTIONS
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

