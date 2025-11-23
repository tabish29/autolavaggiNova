// Translation system
const translations = {
    it: {
        'hero.title': 'Autolaggi Nova',
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
        'features.title': 'Perché Scegliere Autolaggi Nova',
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
        'locations.subtitle': 'Trova la sede Autolaggi Nova più vicina a te',
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
        'footer.brand.title': 'Autolaggi Nova',
        'footer.brand.desc': 'Servizi professionali di autolavaggio con operatori in Emilia-Romagna.',
        'footer.brand.copyright': '© 2025 Autolaggi Nova. Tutti i diritti riservati.',
        'footer.contacts.title': 'Contatti'
    },
    en: {
        'hero.title': 'Autolaggi Nova',
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
        'features.title': 'Why Choose Autolaggi Nova',
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
        'locations.subtitle': 'Find the Autolaggi Nova location nearest to you',
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
        'footer.brand.title': 'Autolaggi Nova',
        'footer.brand.desc': 'Professional car wash services with operators in Emilia-Romagna.',
        'footer.brand.copyright': '© 2025 Autolaggi Nova. All rights reserved.',
        'footer.contacts.title': 'Contacts'
    }
};

let currentLang = 'it';

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.getElementById('html-lang').lang = lang;
    
    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Language switcher event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        updateLanguage(lang);
    });
});

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
document.addEventListener('DOMContentLoaded', function() {
    const carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
        interval: 4000,
        ride: 'carousel'
    });
});
