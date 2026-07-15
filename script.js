
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