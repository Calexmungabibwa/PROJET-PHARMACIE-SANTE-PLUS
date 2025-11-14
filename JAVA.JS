  // Menu mobile
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('main-menu').classList.toggle('show');
        });
        
        // filtrer nos produits
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        //  Navigation fluide 
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // fermeture de menu 
                document.getElementById('main-menu').classList.remove('show');
            });
        });