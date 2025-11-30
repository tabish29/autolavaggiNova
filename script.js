// SEO Meta Tags
const seoMeta = {
    it: {
        title: 'Nova Autolavaggi - Autolavaggio Professionale in Emilia-Romagna',
        description: 'Nova Autolavaggi: autolavaggio con operatori a Modena, Sassuolo, Rubiera e Limidi di Soliera. Servizi professionali, orari convenienti e qualità garantita.',
        keywords: 'autolavaggio Modena, lavaggio auto Sassuolo, autolavaggio Rubiera, lavaggio auto Limidi di Soliera, pulizia auto Emilia-Romagna'
    },
    en: {
        title: 'Nova Autolavaggi - Professional Car Wash in Emilia-Romagna',
        description: 'Nova Autolavaggi: car wash with operators in Modena, Sassuolo, Rubiera and Limidi di Soliera. Professional services, convenient hours and guaranteed quality.',
        keywords: 'car wash Modena, car cleaning Sassuolo, auto wash Rubiera, car detailing Limidi di Soliera, vehicle care Emilia-Romagna'
    }
};

// Search Data - Solo sedi con ID mapping
const searchData = {
    it: [
        { title: 'Modena', desc: 'Stazione servizio Q8 - Strada Morane, 338', section: 'locations', link: '#locations', id: 'location-modena' },
        { title: 'Rubiera', desc: 'Stazione servizio Eni - Via Contea, 20', section: 'locations', link: '#locations', id: 'location-rubiera' },
        { title: 'Limidi di Soliera', desc: 'Stazione servizio Q8 - Via Ravarino per Carpi, 141', section: 'locations', link: '#locations', id: 'location-limidi' },
        { title: 'Sassuolo', desc: 'Stazione servizio Q8 - Via Radici in Piano, 503', section: 'locations', link: '#locations', id: 'location-sassuolo' }
    ],
    en: [
        { title: 'Modena', desc: 'Q8 Gas Station - Strada Morane, 338', section: 'locations', link: '#locations', id: 'location-modena' },
        { title: 'Rubiera', desc: 'Eni Gas Station - Via Contea, 20', section: 'locations', link: '#locations', id: 'location-rubiera' },
        { title: 'Limidi di Soliera', desc: 'Q8 Gas Station - Via Ravarino per Carpi, 141', section: 'locations', link: '#locations', id: 'location-limidi' },
        { title: 'Sassuolo', desc: 'Q8 Gas Station - Via Radici in Piano, 503', section: 'locations', link: '#locations', id: 'location-sassuolo' }
    ]
};

// Translation system
const translations = {
    it: {
        'hero.title': 'Nova Autolavaggi',
        'hero.subtitle': 'La tua auto merita il meglio. Servizi di autolavaggio professionale con operatori specializzati in tutta l\'Emilia-Romagna.',
        'hero.hours': 'Aperto Lun-Sab: 8:00-19:00 | Dom: 8:00-13:00',
        'hero.btn1': 'Trova la sede più vicina',
        'hero.btn2': 'Chiama ora',
        'carousel.title': 'La Nostra Qualità in Azione',
        'carousel.subtitle': 'Scopri le nostre sedi, i nostri tecnici e le attrezzature all\'avanguardia',
        'carousel.slide1.title': 'Le Nostre Sedi Moderne',
        'carousel.slide1.desc': 'Strutture attrezzate e posizioni strategiche per la tua comodità',
        'carousel.slide2.title': 'Tecnici Professionisti',
        'carousel.slide2.desc': 'Personale qualificato e attento ai dettagli per un risultato perfetto',
        'carousel.slide3.title': 'Attrezzature All\'avanguardia',
        'carousel.slide3.desc': 'Tecnologia moderna per un lavaggio efficace e rispettoso della tua auto',
        'carousel.slide4.title': 'Risultati Eccellenti',
        'carousel.slide4.desc': 'Auto pulita e brillante, pronta per tornare sulla strada',
        'carousel.slide5.title': 'Servizio Clienti',
        'carousel.slide5.desc': 'Professionalità e cortesia per un\'esperienza di lavaggio completa',
        'features.title': 'Perché Scegliere Nova Autolavaggi',
        'features.subtitle': 'La nostra esperienza al servizio della tua auto',
        'features.quality.title': 'Qualità Garantita',
        'features.quality.desc': 'Servizi professionali con prodotti di alta qualità per proteggere e valorizzare la tua auto. Ogni lavaggio è un trattamento di cura completo.',
        'features.speed.title': 'Rapidità ed Efficienza',
        'features.speed.desc': 'Servizi rapidi senza compromettere la qualità. Rispettiamo il tuo tempo con procedure ottimizzate e personale esperto.',
        'features.locations.title': '4 Sedi Strategiche',
        'features.locations.desc': 'Presenti a Modena, Sassuolo, Rubiera e Limidi di Soliera. Trovaci sempre vicino a te per massima comodità.',
        'features.staff.title': 'Operatori Specializzati',
        'features.staff.desc': 'Personale formato e esperto che conosce ogni tipo di veicolo. L\'attenzione ai dettagli fa la differenza.',
        'features.shop.title': 'Shop e Accessori',
        'features.shop.desc': 'Oltre al lavaggio, prodotti e accessori per la cura della tua auto. Tutto ciò che serve per mantenerla perfetta.',
        'features.reliability.title': 'Servizio Affidabile',
        'features.reliability.desc': 'Anni di esperienza nel settore automotive. La fiducia dei nostri clienti è il nostro miglior biglietto da visita.',
        'locations.title': 'Le Nostre Sedi',
        'locations.subtitle': 'Trova la sede Nova Autolavaggi più vicina a te',
        'locations.address': 'Indirizzo:',
        'locations.phone': 'Telefono:',
        'locations.modena.name': 'Modena',
        'locations.modena.station': 'Stazione servizio Q8',
        'locations.rubiera.name': 'Rubiera',
        'locations.rubiera.station': 'Stazione servizio Eni',
        'locations.limidi.name': 'Limidi di Soliera',
        'locations.limidi.station': 'Stazione servizio Q8',
        'locations.sassuolo.name': 'Sassuolo',
        'locations.sassuolo.station': 'Stazione servizio Q8',
        'locations.call': 'Chiama',
        'services.title': 'I Nostri Servizi',
        'services.subtitle': 'Tutto ciò che serve per la cura della tua auto',
        'services.carwash.title': 'Autolavaggio con Operatori',
        'services.carwash.desc': 'Servizio professionale di lavaggio con personale qualificato che si prende cura della tua auto con attenzione ai dettagli.',
        'services.shop.title': 'Shop e Prodotti',
        'services.shop.desc': 'Presso le nostre sedi trovi un\'ampia selezione di prodotti per la cura e la manutenzione della tua auto, accessori e molto altro.',
        'services.all_locations': 'Tutte le nostre sedi offrono:',
        'services.all_locations_desc': 'Servizi completi di autolavaggio, shop con prodotti specifici e consulenza per la cura del tuo veicolo.',
        'contact.title': 'Contattaci Subito',
        'contact.subtitle': 'Siamo a tua disposizione per qualsiasi informazione',
        'contact.email.title': 'Email',
        'contact.phone.title': 'Chiamaci',
        'contact.phone.locations': 'Sassuolo e Rubiera',
        'contact.hours.title': 'Orari di Apertura',
        'contact.hours.weekdays': 'Lunedì - Sabato: 8:00 - 19:00',
        'contact.hours.sunday': 'Domenica: 8:00 - 13:00',
        'contact.locations.title': '4 Sedi',
        'contact.locations.list1': 'Modena, Sassuolo',
        'contact.locations.list2': 'Rubiera, Limidi di Soliera',
        'contact.cta.title': 'Vieni a Trovarci!',
        'contact.cta.subtitle': 'La tua auto merita il trattamento migliore. Prenota o passa direttamente in una delle nostre sedi.',
        'contact.cta.btn1': 'Trova la sede più vicina',
        'contact.cta.btn2': 'Chiama ora',
        'footer.brand.title': 'Nova Autolavaggi',
        'footer.brand.desc': 'Servizi professionali di autolavaggio con operatori in Emilia-Romagna.',
        'footer.brand.copyright': '© 2025 Nova Autolavaggi. Tutti i diritti riservati.',
        'footer.contacts.title': 'Contatti',
        'search.title': 'Cerca',
        'search.placeholder': 'Cerca le sedi...',
        'search.no_results': 'Nessuna sede trovata',
        'loading.text': 'Caricamento...'
    },
    en: {
        'hero.title': 'Nova Autolavaggi',
        'hero.subtitle': 'Your car deserves the best. Professional car wash services with specialized operators throughout Emilia-Romagna.',
        'hero.hours': 'Open Mon-Sat: 8:00-19:00 | Sun: 8:00-13:00',
        'hero.btn1': 'Find nearest location',
        'hero.btn2': 'Call now',
        'carousel.title': 'Our Quality in Action',
        'carousel.subtitle': 'Discover our locations, our technicians and state-of-the-art equipment',
        'carousel.slide1.title': 'Our Modern Facilities',
        'carousel.slide1.desc': 'Equipped facilities and strategic locations for your convenience',
        'carousel.slide2.title': 'Professional Technicians',
        'carousel.slide2.desc': 'Qualified staff attentive to details for a perfect result',
        'carousel.slide3.title': 'State-of-the-Art Equipment',
        'carousel.slide3.desc': 'Modern technology for effective and car-friendly washing',
        'carousel.slide4.title': 'Excellent Results',
        'carousel.slide4.desc': 'Clean and shiny car, ready to get back on the road',
        'carousel.slide5.title': 'Customer Service',
        'carousel.slide5.desc': 'Professionalism and courtesy for a complete wash experience',
        'features.title': 'Why Choose Nova Autolavaggi',
        'features.subtitle': 'Our experience at the service of your car',
        'features.quality.title': 'Guaranteed Quality',
        'features.quality.desc': 'Professional services with high-quality products to protect and enhance your car. Every wash is a complete care treatment.',
        'features.speed.title': 'Speed and Efficiency',
        'features.speed.desc': 'Fast services without compromising quality. We respect your time with optimized procedures and expert staff.',
        'features.locations.title': '4 Strategic Locations',
        'features.locations.desc': 'Located in Modena, Sassuolo, Rubiera and Limidi di Soliera. Always close to you for maximum convenience.',
        'features.staff.title': 'Specialized Operators',
        'features.staff.desc': 'Trained and expert staff who knows every type of vehicle. Attention to detail makes the difference.',
        'features.shop.title': 'Shop and Accessories',
        'features.shop.desc': 'Beyond washing, products and accessories for your car care. Everything you need to keep it perfect.',
        'features.reliability.title': 'Reliable Service',
        'features.reliability.desc': 'Years of experience in the automotive sector. Our customers\' trust is our best business card.',
        'locations.title': 'Our Locations',
        'locations.subtitle': 'Find the Nova Autolavaggi location nearest to you',
        'locations.address': 'Address:',
        'locations.phone': 'Phone:',
        'locations.modena.name': 'Modena',
        'locations.modena.station': 'Q8 Gas Station',
        'locations.rubiera.name': 'Rubiera',
        'locations.rubiera.station': 'Eni Gas Station',
        'locations.limidi.name': 'Limidi di Soliera',
        'locations.limidi.station': 'Q8 Gas Station',
        'locations.sassuolo.name': 'Sassuolo',
        'locations.sassuolo.station': 'Q8 Gas Station',
        'locations.call': 'Call',
        'services.title': 'Our Services',
        'services.subtitle': 'Everything you need for your car care',
        'services.carwash.title': 'Car Wash with Operators',
        'services.carwash.desc': 'Professional washing service with qualified staff who takes care of your car with attention to detail.',
        'services.shop.title': 'Shop and Products',
        'services.shop.desc': 'At our locations you find a wide selection of products for the care and maintenance of your car, accessories and much more.',
        'services.all_locations': 'All our locations offer:',
        'services.all_locations_desc': 'Complete car wash services, shop with specific products and consultation for your vehicle care.',
        'contact.title': 'Contact Us Now',
        'contact.subtitle': 'We are at your disposal for any information',
        'contact.email.title': 'Email',
        'contact.phone.title': 'Call Us',
        'contact.phone.locations': 'Sassuolo and Rubiera',
        'contact.hours.title': 'Opening Hours',
        'contact.hours.weekdays': 'Monday - Saturday: 8:00 - 19:00',
        'contact.hours.sunday': 'Sunday: 8:00 - 13:00',
        'contact.locations.title': '4 Locations',
        'contact.locations.list1': 'Modena, Sassuolo',
        'contact.locations.list2': 'Rubiera, Limidi di Soliera',
        'contact.cta.title': 'Visit Us!',
        'contact.cta.subtitle': 'Your car deserves the best treatment. Book or visit us directly at one of our locations.',
        'contact.cta.btn1': 'Find nearest location',
        'contact.cta.btn2': 'Call now',
        'footer.brand.title': 'Nova Autolavaggi',
        'footer.brand.desc': 'Professional car wash services with operators in Emilia-Romagna.',
        'footer.brand.copyright': '© 2025 Nova Autolavaggi. All rights reserved.',
        'footer.contacts.title': 'Contacts',
        'search.title': 'Search',
        'search.placeholder': 'Search locations...',
        'search.no_results': 'No locations found',
        'loading.text': 'Loading...'
    }
};

let currentLang = 'it';

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.getElementById('html-lang').lang = lang;
    
    // Update SEO meta tags
    document.getElementById('page-title').textContent = seoMeta[lang].title;
    document.getElementById('page-description').setAttribute('content', seoMeta[lang].description);
    document.getElementById('page-keywords').setAttribute('content', seoMeta[lang].keywords);
    
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Loading Screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500); // Show loading for 1.5 seconds
    }
}

/* Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}*/

// Accessibility improvements
function initAccessibility() {
    // Keyboard navigation for location cards
    document.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Find and click the first action button
                const firstButton = this.querySelector('a');
                if (firstButton) {
                    firstButton.click();
                }
            }
        });
    });
    
    // Announce search results to screen readers
    function announceSearchResults(count) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = count === 0 ? 
            'Nessuna sede trovata' : 
            `Trovate ${count} sedi`;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Enhanced search functionality with accessibility
    function performSearch(query) {
        const results = searchData.it.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase())
        );
        
        searchResults.innerHTML = '';
        
        // Announce results to screen readers
        announceSearchResults(results.length);
        
        if (results.length === 0) {
            searchResults.innerHTML = `<div class="search-result-item" role="option">Nessuna sede trovata</div>`;
            return;
        }
        
        results.forEach((item, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.setAttribute('role', 'option');
            resultItem.setAttribute('tabindex', '0');
            resultItem.setAttribute('aria-selected', 'false');
            resultItem.innerHTML = `
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-desc">${item.desc}</div>
            `;
            
            // Keyboard navigation for search results
            resultItem.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = this.nextElementSibling;
                    if (next) next.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = this.previousElementSibling;
                    if (prev) prev.focus();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    searchOverlay.classList.remove('active');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                    searchTrigger.focus();
                }
            });
            
            resultItem.addEventListener('click', () => {
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
                
                // Remove any existing highlights
                document.querySelectorAll('.location-card').forEach(card => {
                    card.classList.remove('highlighted');
                });
                
                // Navigate to the section
                window.location.href = item.link;
                
                // Highlight the specific location after a short delay
                setTimeout(() => {
                    const targetCard = document.getElementById(item.id);
                    if (targetCard) {
                        targetCard.classList.add('highlighted');
                        targetCard.focus();
                        // Scroll to the highlighted card
                        targetCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                        
                        // Remove highlight after 5 seconds
                        setTimeout(() => {
                            targetCard.classList.remove('highlighted');
                        }, 5000);
                    }
                }, 300);
            });
            
            searchResults.appendChild(resultItem);
        });
        
        // Set first result as focusable
        if (results.length > 0) {
            searchResults.querySelector('.search-result-item').focus();
        }
    }
    
// Enhanced search functionality with accessibility
    function performSearch(query) {
        const results = searchData.it.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.desc.toLowerCase().includes(query.toLowerCase())
        );
        
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = '';
        
        // Announce results to screen readers
        announceSearchResults(results.length);
        
        if (results.length === 0) {
            searchResults.innerHTML = `<div class="search-result-item" role="option">Nessuna sede trovata</div>`;
            return;
        }
        
        results.forEach((item, index) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.setAttribute('role', 'option');
            resultItem.setAttribute('tabindex', '0');
            resultItem.setAttribute('aria-selected', 'false');
            resultItem.innerHTML = `
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-desc">${item.desc}</div>
            `;
            
            // Keyboard navigation for search results
            resultItem.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const next = this.nextElementSibling;
                    if (next) next.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prev = this.previousElementSibling;
                    if (prev) prev.focus();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    const searchOverlay = document.getElementById('search-overlay');
                    const searchInput = document.getElementById('search-input');
                    searchOverlay.classList.remove('active');
                    searchInput.value = '';
                    searchResults.innerHTML = '';
                    document.getElementById('search-trigger').focus();
                }
            });
            
            resultItem.addEventListener('click', () => {
                const searchOverlay = document.getElementById('search-overlay');
                const searchInput = document.getElementById('search-input');
                searchOverlay.classList.remove('active');
                searchInput.value = '';
                searchResults.innerHTML = '';
                
                // Navigate to the section
                window.location.href = item.link;
                
                // Focus the specific location after a short delay
                setTimeout(() => {
                    const targetCard = document.getElementById(item.id);
                    if (targetCard) {
                        targetCard.focus();
                        targetCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 300);
            });
            
            searchResults.appendChild(resultItem);
        });
        
        // Set first result as focusable
        if (results.length > 0) {
            searchResults.querySelector('.search-result-item').focus();
        }
    }
    
    return { performSearch };
}

// Global search function (fallback)
function performSearch(query) {
    const results = searchData.it.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
    );
    
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    
    if (results.length === 0) {
        searchResults.innerHTML = `<div class="search-result-item" role="option">Nessuna sede trovata</div>`;
        return;
    }
    
    results.forEach((item, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.setAttribute('role', 'option');
        resultItem.setAttribute('tabindex', '0');
        resultItem.setAttribute('aria-selected', 'false');
        resultItem.innerHTML = `
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-desc">${item.desc}</div>
        `;
        
        resultItem.addEventListener('click', () => {
            const searchOverlay = document.getElementById('search-overlay');
            const searchInput = document.getElementById('search-input');
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
            
            // Navigate to the section
            window.location.href = item.link;
            
            // Focus the specific location after a short delay
            setTimeout(() => {
                const targetCard = document.getElementById(item.id);
                if (targetCard) {
                    targetCard.focus();
                    targetCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 300);
        });
        
        searchResults.appendChild(resultItem);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    hideLoadingScreen();
    
    // Initialize components
    //initBackToTop();
    const accessibility = initAccessibility();
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'it';
    updateLanguage(savedLang);

    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Remove hash from URL without affecting scroll position
                history.replaceState(null, null, ' ');
            }
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(event) {
        if (event.state === null) {
            history.replaceState(null, null, ' ');
        }
    });

    // Remove hash on page load if present
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
        // Scroll to the section if hash was present
        const hash = window.location.hash.substring(1);
        const target = document.getElementById(hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    // Auto-start carousel
    const carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
        interval: 4000,
        ride: 'carousel'
    });
    
    // Search functionality
    const searchTrigger = document.getElementById('search-trigger');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    // Open search
    searchTrigger.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    // Close search
    searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    // Close on overlay click
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Live search
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 2) {
            performSearch(searchInput.value);
        } else {
            searchResults.innerHTML = '';
        }
    });
});
