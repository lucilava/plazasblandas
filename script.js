// Smooth scroll para los links de navegación
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

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const formData = new FormData(this);
        const nombre = this.querySelector('input[type="text"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Crear mensaje para WhatsApp
        const whatsappNumber = '5491112345678'; // Cambia este número
        const whatsappMessage = `Hola! Me llamo ${nombre}. ${mensaje}`;
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Limpiar formulario
        this.reset();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias! Te estamos redirigiendo a WhatsApp para completar tu consulta.');
    });
}

// Animación al hacer scroll
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

// Elementos a animar
document.querySelectorAll('.feature, .age-card, .gallery-item, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// FAQ toggle (opcional - si quieres hacer las preguntas expandibles)
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const isActive = answer.style.display === 'block';
        
        // Cerrar todas las respuestas
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.display = 'none';
        });
        
        // Abrir la respuesta clickeada si no estaba abierta
        if (!isActive) {
            answer.style.display = 'block';
        }
    });
});

// Inicializar todas las respuestas como visibles
document.querySelectorAll('.faq-answer').forEach(answer => {
    answer.style.display = 'block';
});

// WhatsApp button pulse animation
const whatsappButton = document.querySelector('.whatsapp-float');
if (whatsappButton) {
    setInterval(() => {
        whatsappButton.style.animation = 'pulse 1s ease-in-out';
        setTimeout(() => {
            whatsappButton.style.animation = '';
        }, 1000);
    }, 5000);
}

// Añadir animación pulse al CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;
document.head.appendChild(style);

// Lazy loading para imágenes (si agregas imágenes reales)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Age card click - scroll to contact
document.querySelectorAll('.age-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelector('#faq').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Gallery item click - optional zoom effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Aquí podrías agregar un lightbox o modal para ver las imágenes en grande
        console.log('Gallery item clicked');
    });
});

// Console log para verificar que el script se cargó
console.log('Soft Play 0+ website loaded successfully! 🎉');
