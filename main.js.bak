// Dynamic Interactivity & Animations for Algorah "Ultra-Premium"

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const scrollProgress = document.getElementById('scroll-progress');
    const timelineBall = document.getElementById('timeline-ball');
    const timeline = document.querySelector('.timeline');
    const yearSpan = document.getElementById('current-year');

    // 0. Set Current Year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = (scrolled / totalHeight) * 100;

                // 1. Navbar & Scroll Progress
                if (scrolled > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                scrollProgress.style.width = `${progress}%`;

                // 2. Timeline Progress Ball & Snapping
                if (timeline && timelineBall) {
                    const timelineRect = timeline.getBoundingClientRect();
                    const stepNumbers = document.querySelectorAll('.step-number');
                    const windowHeight = window.innerHeight;
                    const centerY = windowHeight / 2;
                    
                    let relScroll = (centerY - timelineRect.top) / timelineRect.height;
                    relScroll = Math.max(0, Math.min(1, relScroll));
                    
                    stepNumbers.forEach((step) => {
                        const stepRect = step.getBoundingClientRect();
                        if (stepRect.top < centerY) {
                            step.classList.add('passed');
                        } else {
                            step.classList.remove('passed');
                        }
                    });

                    timelineBall.style.top = `${relScroll * 100}%`;
                    
                    const timelineProgress = document.getElementById('timeline-progress');
                    if (timelineProgress) {
                        timelineProgress.style.height = `${relScroll * 100}%`;
                    }
                }

                // 3. Subtle parallax for hero background
                const heroBg = document.querySelector('.hero-background');
                if (heroBg) {
                    heroBg.style.transform = `translateY(${scrolled * 0.15}px) scale(${1 + scrolled * 0.0003})`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // 4. Glow effect follow mouse to solution cards
    const cards = document.querySelectorAll('.solution-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    // 5. Staggered Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                if (entry.target.classList.contains('solutions-grid') || entry.target.classList.contains('timeline')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        if (child.id === 'timeline-ball') return;
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 100);
                    });
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .solutions-grid, .timeline, .testimonial-card, .cta-content, .diff-grid, .tech-grid, .cases-slider-container, .founder-content').forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });

    // Hero is visible by default
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('visible');
        }, 100);
    }

    // 6. Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 7. Form Submission Real
    const contactForm = document.querySelector('.lead-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            
            const formData = {
                name: contactForm.querySelector('input[type="text"]').value,
                email: contactForm.querySelector('input[type="email"]').value,
                message: contactForm.querySelector('textarea').value
            };

            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    contactForm.innerHTML = `
                        <div style="text-align: center; padding: 3rem 0; animation: fadeIn 0.5s ease forwards;">
                            <i class="ph ph-check-circle" style="font-size: 4rem; color: var(--gold); margin-bottom: 1.5rem; display: block;"></i>
                            <h3 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1rem;">¡Solicitud Recibida!</h3>
                            <p style="color: var(--text-muted);">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                        </div>
                    `;
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                alert('Hubo un error enviando el mensaje. Por favor intenta por WhatsApp.');
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    // 8. Cases Slider Logic - Versión Blindada e Infinita
    const track = document.getElementById('cases-track');
    const nextBtn = document.getElementById('cases-next');
    const prevBtn = document.getElementById('cases-prev');
    
    if (track && nextBtn && prevBtn) {
        // Limpiar clones previos si existen (útil en HMR)
        track.querySelectorAll('.clone').forEach(c => c.remove());
        
        const originalCards = track.querySelectorAll('.case-card');
        if (originalCards.length === 0) return;

        const totalOriginal = originalCards.length;
        let isMoving = false;
        
        // Clonación para Infinito Real
        const lastClone = originalCards[totalOriginal - 1].cloneNode(true);
        lastClone.classList.add('clone');
        track.insertBefore(lastClone, originalCards[0]);
        
        const clonesToAppend = 2; // Suficientes para cubrir el desfase de transición
        for (let i = 0; i < clonesToAppend; i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
        }

        const allCards = track.querySelectorAll('.case-card');
        let currentIndex = 1; // Empezamos en la primera original (índice 1 por el clon inicial)

        function getMetrics() {
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 0;
            const width = originalCards[0].offsetWidth;
            return { width, gap };
        }

        function updateSlider(animate = true) {
            const { width, gap } = getMetrics();
            const offset = currentIndex * (width + gap);
            
            track.style.transition = animate ? 'transform 0.7s cubic-bezier(0.23, 1, 0.32, 1)' : 'none';
            track.style.transform = `translateX(-${offset}px)`;
        }

        function handleNext() {
            if (isMoving) return;
            isMoving = true;
            currentIndex++;
            updateSlider(true);

            if (currentIndex >= totalOriginal + 1) {
                setTimeout(() => {
                    currentIndex = 1;
                    updateSlider(false);
                    isMoving = false;
                }, 710);
            } else {
                setTimeout(() => { isMoving = false; }, 710);
            }
        }

        function handlePrev() {
            if (isMoving) return;
            isMoving = true;
            currentIndex--;
            updateSlider(true);

            if (currentIndex <= 0) {
                setTimeout(() => {
                    currentIndex = totalOriginal;
                    updateSlider(false);
                    isMoving = false;
                }, 710);
            } else {
                setTimeout(() => { isMoving = false; }, 710);
            }
        }

        nextBtn.addEventListener('click', () => {
            handleNext();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            handlePrev();
            resetTimer();
        });

        // Auto-play
        let autoPlayTimer = setInterval(handleNext, 12000);

        function resetTimer() {
            clearInterval(autoPlayTimer);
            autoPlayTimer = setInterval(handleNext, 12000);
        }

        // Soporte de Gestos Táctiles (Swipe)
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) { // Umbral de 50px para el swipe
                if (diff > 0) handleNext();
                else handlePrev();
                resetTimer();
            }
        }

        window.addEventListener('resize', () => updateSlider(false));
        
        // Inicialización segura
        setTimeout(() => updateSlider(false), 300);
    }
});
