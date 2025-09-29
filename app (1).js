// CrisDepil Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#ffffff';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Products data
   const products = [
    {
        id: 1,
        name: 'Sebo de Carneiro',
        description: 'Sebo de carneiro Creme 100% natural, ideal para hidratar a pele após o banho. Rico em nutrientes que ajudam a suavizar e proteger a pele.',
        price: 'R$ 25,00',
        image: './Imagens/sebo-de-carneiro-2.0.JPG', // Caminho corrigido com maiúsculas e extensão correta
        whatsappMessage: 'Olá! Gostaria de *COMPRAR* o Sebo de Carneiro por R$ 25,00. Poderia me informar sobre formas de pagamento e entrega?',
        instagramPost: 'Confira nosso Creme Cebo de Carneiro! 🔥 #Crisdepil #Natural'
    },
    {
        id: 2,
        name: 'Cera Crisdepil',
        description: 'Crisdepil, a cera que deixa a pele lisinha, toque de suavidade e confiança em cada detalhe. Com a Cris-depil, a depilação se transforma em um momento de cuidado e bem-estar. Nossa fórmula especial garante remoção eficiente dos pelos, deixando sua pele macia, hidratada e com acabamento impecável. (OBS: Apenas para profissionais)',
        price: 'R$ 45,00',
        image: './Imagens/cera-crisdepil-1.0.jpg', // Caminho corrigido com maiúsculas
        whatsappMessage: 'Olá! Gostaria de *COMPRAR* a Cera Cris-depil por R$ 45,00. Poderia me informar sobre formas de pagamento e entrega?',
        instagramPost: 'Cris-depil – Sua pele merece esse cuidado. Pele lisinha, confiança garantida 🍯 #Cris-depil'
    },
    {
        id: 3,
        name: 'Bucha Vegetal',
        description: 'Bucha vegetal 100% natural, ideal para esfoliação e limpeza da pele. Ajuda a remover células mortas e deixar a pele mais suave.',
        price: 'R$ 12,00',
        image: './Imagens/bucha-vegetal.jpg', // Caminho corrigido com nome de arquivo correto
        whatsappMessage: 'Olá! Gostaria de *COMPRAR* a Bucha Vegetal por R$ 15,00. Poderia me informar sobre formas de pagamento e entrega?',
        instagramPost: 'Experimente nossa Bucha Vegetal! 🍃 #CrisDepil #Esfoliacao'
    }
];
    
    // Load products into the grid
    function loadProducts() {
        const productsGrid = document.getElementById('productsGrid');
        if (!productsGrid) return;
        
        productsGrid.innerHTML = '';
        
        products.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        // Add animation to product cards
        animateProductCards();
    }
    
    // Create product card element
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="product-image-src">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <a href="#" class="product-btn whatsapp-btn"  style="font-size:13px" data-whatsapp="${product.whatsappMessage}">
                        <i class="fab fa-whatsapp"></i>
                        Comprar no WhatsApp
                    </a>
                    <a href="#" class="product-btn instagram-btn"  style="font-size:13px"data-instagram="${product.instagramPost}">
                        <i class="fab fa-instagram"></i>
                        Ver no Instagram
                    </a>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Animate product cards on scroll
    function animateProductCards() {
        const cards = document.querySelectorAll('.product-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
    
    // Handle product actions (WhatsApp and Instagram)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.whatsapp-btn')) {
            e.preventDefault();
            const message = e.target.closest('.whatsapp-btn').dataset.whatsapp;
            const whatsappUrl = `https://wa.me/5579988099879?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }
        
        if (e.target.closest('.instagram-btn')) {
            e.preventDefault();
            const instagramUrl = 'https://instagram.com/crisdepil176';
            window.open(instagramUrl, '_blank');
        }
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Validate form
            if (!validateForm(formData)) {
                return;
            }
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Create WhatsApp message
                const whatsappMessage = `Olá! Meu nome é ${formData.name}.
                
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem: ${formData.message}`;
                
                const whatsappUrl = `https://wa.me/5579988099879?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappUrl, '_blank');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                showNotification('Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.', 'success');
                
            }, 2000);
        });
    }
    
    // Form validation
    function validateForm(data) {
        const errors = [];
        
        if (!data.name.trim()) {
            errors.push('Nome é obrigatório');
        }
        
        if (!data.email.trim()) {
            errors.push('E-mail é obrigatório');
        } else if (!isValidEmail(data.email)) {
            errors.push('E-mail inválido');
        }
        
        if (!data.phone.trim()) {
            errors.push('Telefone é obrigatório');
        }
        
        if (!data.message.trim()) {
            errors.push('Mensagem é obrigatória');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('<br>'), 'error');
            return false;
        }
        
        return true;
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Show notification
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add notification styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            max-width: 400px;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Add notification animations to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.2s;
        }
        
        .notification-close:hover {
            background-color: rgba(255,255,255,0.2);
        }
    `;
    document.head.appendChild(style);
    
    // Animate sections on scroll
    function animateOnScroll() {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.8s ease';
            observer.observe(section);
        });
    }
    
    // Service cards hover effect
    function addServiceCardEffects() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Parallax effect for hero section
    function addParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroDecoration = document.querySelector('.hero-decoration');
            if (heroDecoration) {
                heroDecoration.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    }
    
    // Counter animation for statistics (if needed)
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count);
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                    }, 16);
                    
                    observer.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => observer.observe(counter));
    }
    
    // Initialize all functions
    function init() {
        loadProducts();
        animateOnScroll();
        addServiceCardEffects();
        addParallaxEffect();
        animateCounters();
        
        // Add loading class removal after page load
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
        
        // Add scroll to top functionality
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: var(--primary-green);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: var(--shadow-lg);
        `;
        
        document.body.appendChild(scrollToTopBtn);
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Initialize everything
    init();
    
    // Add some interactive features
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Close any open modals or notifications
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => notification.remove());
        }
    });
    
    // Performance optimization: Lazy load images when they come into view
    const lazyImages = document.querySelectorAll('img[data-src]');
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
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    console.log('CrisDepil website loaded successfully! 🌿');
});
