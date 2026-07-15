
        // Mobile menu toggle
        document.getElementById('menuIcon').addEventListener('click', function() {
            document.getElementById('navMenu').classList.toggle('active');
        });

        // Accordion toggle
        document.querySelectorAll('.process-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
        // ===============Animation===============//
        document.addEventListener('DOMContentLoaded', function() {
    // For page-title elements
    document.querySelectorAll('.page-title').forEach(el => {
        if (el.dataset.animated === 'true') return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    entry.target.classList.add('trigger-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(el);
    });
    
    // For card-animation elements
    document.querySelectorAll('.card-animation').forEach(el => {
        if (el.dataset.animated === 'true') return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    entry.target.classList.add('trigger-animation');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(el);
    });
});