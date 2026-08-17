/* =========================================================
   LEKAM GEDARA — Interactive Vanilla JS (Local Images)
   ========================================================= */

// DATA DEFINITIONS USING LOCAL IMAGES
const HERO_SLIDES = [
  {
    id: 1,
    title: "A Heritage Hideaway",
    subtitle: "Elegant modern luxury within a restored Secretary's Residence in Thibiriyawa, Sri Lanka.",
    badge: "Restored Colonial Heritage",
    image: "images/villa-front-facade.jpg",
    alt: "The restored colonial facade of Lekam Gedara with verandah in Sri Lanka",
    ctaText: "Explore the Villa",
    ctaLink: "#villa"
  },
  {
    id: 2,
    title: "Where Old Ceylon Meets Quiet Comfort",
    subtitle: "Deep verandahs, terracotta tile, and teak shutters, set peacefully among tropical coconut palms.",
    badge: "Architectural Authenticity",
    image: "images/verandah-seating-corridor.jpg",
    alt: "Verandah corridor surrounding Lekam Gedara villa",
    ctaText: "Discover Dining",
    ctaLink: "#dining"
  },
  {
    id: 3,
    title: "A Residence, Entirely Yours",
    subtitle: "One villa, one reservation at a time — a private sanctuary designed for a slower, refined kind of stay.",
    badge: "Exclusive Villa Sanctuary",
    image: "images/inner-garden-courtyard.jpg",
    alt: "Inner open garden courtyard of the Secretary's Residence",
    ctaText: "See Experiences",
    ctaLink: "#experiences"
  },
  {
    id: 4,
    title: "Private Pool & Tropical Gardens",
    subtitle: "Unwind by the sparkling swimming pool framed by serene greenery, swaying palms, and open breezes.",
    badge: "Sunlit Swimming Pool",
    image: "images/swimming-pool-deck-daytime.jpg",
    alt: "Lush tropical swimming pool deck at Lekam Gedara",
    ctaText: "View Pool Gallery",
    ctaLink: "#gallery"
  },
  {
    id: 5,
    title: "Curated Island Adventures",
    subtitle: "From lake kayaking and rural village cycling to ancient UNESCO heritage discovery trails.",
    badge: "Activities & Cultural Tours",
    image: "images/lake-kayaking-couple.jpg",
    alt: "Lake kayaking activity at Lekam Gedara Sri Lanka",
    ctaText: "Explore Activities",
    ctaLink: "#things-to-do"
  }
];

const GALLERY_ITEMS = [
  // Interior
  {
    id: "int-1",
    title: "Master Suite & Teak Furnishings",
    category: "Interior",
    image: "images/master-bedroom-suite.jpg",
    description: "High ceilings, reclaimed teak wood furniture, and soothing neutral tones for deep restful sleep."
  },
  {
    id: "int-2",
    title: "Colonial Lounge & Library",
    category: "Interior",
    image: "images/colonial-living-lounge.jpg",
    description: "Air-conditioned sitting room featuring vintage Ceylon artwork and comfortable reading nooks."
  },
  {
    id: "int-3",
    title: "Glass Shower Stone Bathroom",
    category: "Interior",
    image: "images/glass-shower-stone-bathroom.jpg",
    description: "Modern rainfall shower seamlessly built with local cut stone and brass fixtures."
  },
  {
    id: "int-4",
    title: "High Ceiling Lounge Suite",
    category: "Interior",
    image: "images/high-ceiling-lounge-suite.jpg",
    description: "Spacious sitting area under timber roof beams with chandelier lighting."
  },
  {
    id: "int-5",
    title: "Interior Open Living Hall",
    category: "Interior",
    image: "images/interior-open-living-hall.jpg",
    description: "Seamless open architectural flow connecting living area, dining hall, and inner courtyard."
  },
  {
    id: "int-6",
    title: "Modern Ensuite Bathroom",
    category: "Interior",
    image: "images/modern-ensuite-bathroom.jpg",
    description: "Refined dark slate tiles, modern sanitaryware, and vanity mirror."
  },
  {
    id: "int-7",
    title: "Polished Concrete Breakfast Bar",
    category: "Interior",
    image: "images/polished-concrete-breakfast-bar.jpg",
    description: "Modern island bar with wooden wheel accent and high stools."
  },
  {
    id: "int-8",
    title: "Wooden Pantry & Bar Corner",
    category: "Interior",
    image: "images/wooden-pantry-bar-corner.jpg",
    description: "Custom dark timber pantry cabinets with glass displays and bar seating."
  },

  // Exterior
  {
    id: "ext-1",
    title: "Restored Front Facade & Verandah",
    category: "Exterior",
    image: "images/villa-front-facade.jpg",
    description: "Hipped terracotta tile roof and open verandah with signature forest green shutters."
  },
  {
    id: "ext-2",
    title: "Villa Main Entrance Steps",
    category: "Exterior",
    image: "images/villa-main-entrance.jpg",
    description: "Curved stone entrance steps leading to the main residence verandah."
  },
  {
    id: "ext-3",
    title: "Inner Open Courtyard",
    category: "Exterior",
    image: "images/inner-garden-courtyard.jpg",
    description: "Lush inner courtyard with open skylight roof and tropical plants."
  },
  {
    id: "ext-4",
    title: "Verandah Seating Corridor",
    category: "Exterior",
    image: "images/verandah-seating-corridor.jpg",
    description: "Shaded verandah corridor with hand-carved wooden lounge chairs."
  },
  {
    id: "ext-5",
    title: "Illuminated Night Patio",
    category: "Exterior",
    image: "images/night-patio-illumination.jpg",
    description: "Warm evening lighting along the outdoor patio and covered dining area."
  },
  {
    id: "ext-6",
    title: "Night Garden Stone Pathway",
    category: "Exterior",
    image: "images/night-garden-stone-pathway.jpg",
    description: "Ambient bollard lighting guiding through the estate palm garden."
  },
  {
    id: "ext-7",
    title: "1941 Heritage Registrar Certificate",
    category: "Exterior",
    image: "images/historical-appointment-certificate.png",
    description: "Framed original colonial appointment certificate of the Registrar from 1941."
  },

  // Swimming Pool
  {
    id: "pool-1",
    title: "Sunlit Pool Deck & Loungers",
    category: "Swimming Pool",
    image: "images/swimming-pool-deck-daytime.jpg",
    description: "Curved swimming pool with stone deck, shade canopy, and sun loungers."
  },
  {
    id: "pool-2",
    title: "Illuminated Night Swimming Pool",
    category: "Swimming Pool",
    image: "images/night-illuminated-swimming-pool.jpg",
    description: "Serene night pool view featuring warm underwater lights and garden lanterns."
  },
  {
    id: "pool-3",
    title: "Poolside Outdoor Showers",
    category: "Swimming Pool",
    image: "images/poolside-rainfall-showers.jpg",
    description: "Modern rainfall shower area adjacent to the pool deck."
  },

  // Activities
  {
    id: "act-1",
    title: "Calm Lake Kayaking",
    category: "Activities",
    image: "images/lake-kayaking-couple.jpg",
    description: "Paddle across quiet waters with local guides, taking in lakeside wildlife."
  },
  {
    id: "act-2",
    title: "Inflatable Rafting Expedition",
    category: "Activities",
    image: "images/inflatable-boat-lake-activity.jpg",
    description: "Fun group lake boating and water exploration with safety equipment provided."
  },
  {
    id: "act-3",
    title: "Kayaking Lake Vista",
    category: "Activities",
    image: "images/kayak-lake-view.jpg",
    description: "Open lake waters surrounded by lush Sri Lankan greenery."
  },
  {
    id: "act-4",
    title: "Dusk Lake Kayak Landing",
    category: "Activities",
    image: "images/kayak-lake-bank-dusk.jpg",
    description: "Quiet sunset moments along the grassy bank of the lake."
  }
];

const THINGS_TO_DO_DATA = [
  {
    id: "kayaking",
    title: "Kayaking on a Calm Lake",
    category: "Water Experience",
    description: "Glide silently across mirror-still lake waters surrounded by water lilies, lotus blooms, and kingfishers. Our staff prepares lightweight kayaks and safety equipment for a peaceful morning or sunset paddle.",
    image: "images/lake-kayaking-couple.jpg",
    duration: "1.5 – 2 Hours",
    highlight: "Peaceful waters & birdwatching",
    included: ["Kayaks & Paddles", "Safety Vests", "Local Guide / Escort", "Fresh Cold Coconut Drink"]
  },
  {
    id: "cycling",
    title: "Inflatable Lake Rafting & Cycling",
    category: "Country Excursion",
    description: "Explore the gentle rhythm of rural Thibiriyawa. Enjoy lake rafting or cycle along shady dirt tracks, past emerald paddy fields, ancient banyan trees, and welcoming village homes.",
    image: "images/inflatable-boat-lake-activity.jpg",
    duration: "2 Hours",
    highlight: "Lake boating & village trails",
    included: ["Quality Boats / Bikes", "Helmets & Safety Vests", "Guided Escort", "Refreshment Stop"]
  },
  {
    id: "cooking-class",
    title: "Sri Lankan Culinary Masterclass",
    category: "Culinary Experience",
    description: "Join our residence chef in the kitchen to harvest fresh curry leaves and coconut, scrape coconut on a traditional scraper, and cook clay-pot curries over coconut wood fires.",
    image: "images/wooden-pantry-bar-corner.jpg",
    duration: "2.5 Hours",
    highlight: "Clay pot cooking & fresh spices",
    included: ["Garden Herb Tour", "All Ingredients", "Hands-on Cooking Session", "Full Meal Tasting"]
  },
  {
    id: "birdwatching",
    title: "Dawn Birdwatching & Nature Walk",
    category: "Nature Trail",
    description: "Sri Lanka's northwestern wetlands host over 60 bird species. Walk with our resident naturalist around the lake edge at first light when peacocks call and egrets feed.",
    image: "images/kayak-lake-bank-dusk.jpg",
    duration: "1.5 Hours",
    highlight: "Native peacocks & kingfishers",
    included: ["Binoculars Provided", "Field Guide", "Dawn Herbal Tea"]
  }
];

const CULTURAL_TOURS_DATA = [
  {
    id: "dambulla-tour",
    title: "1941 Heritage Registrar Trail & History",
    type: "Colonial History Tour",
    description: "Discover the authentic 1941 Registrar Appointment history of Lekam Gedara and explore nearby heritage landmarks with our private cultural guide.",
    image: "images/historical-appointment-certificate.png",
    duration: "Full Day (7–8 Hours)",
    distance: "Residental Heritage Site",
    highlights: [
      "Original 1941 Colonial Certificate",
      "Historical Registrar Archives",
      "Private air-conditioned vehicle",
      "Licensed cultural guide"
    ]
  },
  {
    id: "yapahuwa-tour",
    title: "Yapahuwa Rock Citadel & Temple Trail",
    type: "Historical Kingdom Expedition",
    description: "Ascend the dramatic stone staircase of Yapahuwa, the 13th-century rock fortress capital famous for its carved lion portal, ancient relics, and serene forest surroundings.",
    image: "images/kayak-lake-view.jpg",
    duration: "Half Day (4–5 Hours)",
    distance: "35 km from villa",
    highlights: [
      "Ornamental stone staircase",
      "Ancient Citadel Museum",
      "Quiet off-the-beaten-path ruin",
      "Gourmet picnic lunch"
    ]
  },
  {
    id: "artisan-pottery",
    title: "Village Crafts & Traditional Pottery Workshop",
    type: "Cultural Crafts Experience",
    description: "Visit traditional artisan families in nearby villages who have shaped clay pottery on kick-wheels for generations. Try turning your own clay vase under expert hands.",
    image: "images/night-garden-stone-pathway.jpg",
    duration: "3 Hours",
    distance: "12 km from villa",
    highlights: [
      "Kick-wheel pottery demo",
      "Hands-on clay creation",
      "Artisan gift souvenir",
      "Traditional Ceylon tea"
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------
     1. STICKY HEADER SCROLL EFFECT
     --------------------------------------------------------- */
  const header = document.querySelector('header.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  /* ---------------------------------------------------------
     2. MOBILE NAVIGATION DRAWER & ACCORDION
     --------------------------------------------------------- */
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer-nav a');
  const mobileAccordionBtn = document.getElementById('mobile-accordion-btn');
  const mobileAccordionContent = document.getElementById('mobile-accordion-content');

  function openMobileNav() {
    mobileDrawer.classList.add('active');
    mobileBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileDrawer.classList.remove('active');
    mobileBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  if (mobileAccordionBtn) {
    mobileAccordionBtn.addEventListener('click', () => {
      mobileAccordionContent.classList.toggle('active');
      const icon = mobileAccordionBtn.querySelector('.accordion-chevron');
      if (icon) icon.style.transform = mobileAccordionContent.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }

  /* ---------------------------------------------------------
     3. HERO CAROUSEL
     --------------------------------------------------------- */
  let currentSlideIndex = 0;
  let heroTimer = null;
  const heroSection = document.getElementById('hero');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.dot-btn');
  const currentNumEl = document.getElementById('hero-counter-current');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');

  function showSlide(index) {
    heroSlides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    heroDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    if (currentNumEl) {
      currentNumEl.textContent = `0${index + 1}`;
    }
    currentSlideIndex = index;
  }

  function nextSlide() {
    const nextIdx = (currentSlideIndex + 1) % HERO_SLIDES.length;
    showSlide(nextIdx);
  }

  function prevSlide() {
    const prevIdx = (currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
    showSlide(prevIdx);
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroTimer = setInterval(nextSlide, 6500);
  }

  function stopHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startHeroTimer(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startHeroTimer(); });

  heroDots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startHeroTimer();
    });
  });

  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopHeroTimer);
    heroSection.addEventListener('mouseleave', startHeroTimer);
  }

  startHeroTimer();

  /* ---------------------------------------------------------
     4. THINGS TO DO MODAL
     --------------------------------------------------------- */
  const activityModal = document.getElementById('activity-modal');
  const activityModalClose = document.getElementById('activity-modal-close');

  document.querySelectorAll('.btn-activity-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const actId = btn.getAttribute('data-id');
      const item = THINGS_TO_DO_DATA.find(a => a.id === actId);
      if (item && activityModal) {
        document.getElementById('modal-act-category').textContent = item.category;
        document.getElementById('modal-act-title').textContent = item.title;
        document.getElementById('modal-act-img').src = item.image;
        document.getElementById('modal-act-img').alt = item.title;
        document.getElementById('modal-act-desc').textContent = item.description;
        document.getElementById('modal-act-duration').textContent = `Duration: ${item.duration}`;

        const incList = document.getElementById('modal-act-included');
        incList.innerHTML = item.included.map(inc => `
          <div class="amenity-item">
            <svg class="check-box" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="amenity-text" style="text-transform:none; font-size:0.8125rem;">${inc}</span>
          </div>
        `).join('');

        activityModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (activityModalClose) {
    activityModalClose.addEventListener('click', () => {
      activityModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  /* ---------------------------------------------------------
     5. CULTURAL TOURS MODAL
     --------------------------------------------------------- */
  const tourModal = document.getElementById('tour-modal');
  const tourModalClose = document.getElementById('tour-modal-close');

  document.querySelectorAll('.btn-tour-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourId = btn.getAttribute('data-id');
      const item = CULTURAL_TOURS_DATA.find(t => t.id === tourId);
      if (item && tourModal) {
        document.getElementById('modal-tour-type').textContent = item.type;
        document.getElementById('modal-tour-title').textContent = item.title;
        document.getElementById('modal-tour-img').src = item.image;
        document.getElementById('modal-tour-img').alt = item.title;
        document.getElementById('modal-tour-desc').textContent = item.description;
        document.getElementById('modal-tour-info').textContent = `${item.duration} • ${item.distance}`;

        const highlightsList = document.getElementById('modal-tour-highlights');
        highlightsList.innerHTML = item.highlights.map(h => `
          <div class="amenity-item">
            <svg class="check-box" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span class="amenity-text" style="text-transform:none; font-size:0.8125rem;">${h}</span>
          </div>
        `).join('');

        tourModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (tourModalClose) {
    tourModalClose.addEventListener('click', () => {
      tourModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  /* ---------------------------------------------------------
     6. GALLERY FILTER TABS & LIGHTBOX
     --------------------------------------------------------- */
  let activeCategory = 'All';
  let currentFilteredItems = GALLERY_ITEMS;
  let currentLightboxIndex = 0;

  const tabBtns = document.querySelectorAll('.gallery-tabs .tab-btn');
  const galleryGrid = document.getElementById('gallery-grid');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function renderGallery() {
    currentFilteredItems = activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(item => item.category === activeCategory);

    galleryGrid.innerHTML = currentFilteredItems.map((item, idx) => `
      <div class="gallery-card" data-index="${idx}">
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" />
        <div class="badge-category" style="top:0.75rem; left:0.75rem;">${item.category}</div>
        <div class="gallery-overlay">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3 class="font-cinzel" style="font-size:1.125rem; color:var(--cream);">${item.title}</h3>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--beige)" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          </div>
          <p style="font-size:0.75rem; color:rgba(251,249,245,0.8); font-weight:300; line-height:1.5;">${item.description}</p>
        </div>
      </div>
    `).join('');

    // Reattach click events for lightbox
    document.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      });
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-cat');
      renderGallery();
    });
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function updateLightboxContent() {
    const item = currentFilteredItems[currentLightboxIndex];
    if (item) {
      document.getElementById('lightbox-img').src = item.image;
      document.getElementById('lightbox-img').alt = item.title;
      document.getElementById('lightbox-category').textContent = `${item.category} • Image ${currentLightboxIndex + 1} of ${currentFilteredItems.length}`;
      document.getElementById('lightbox-title').textContent = item.title;
      document.getElementById('lightbox-desc').textContent = item.description;
    }
  }

  function closeLightboxModal() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightboxModal);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
    updateLightboxContent();
  });
  if (lightboxNext) lightboxNext.addEventListener('click', () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredItems.length;
    updateLightboxContent();
  });

  // Close modals on overlay backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === activityModal) activityModal.classList.remove('active');
    if (e.target === tourModal) tourModal.classList.remove('active');
    if (e.target === lightboxModal) closeLightboxModal();
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (activityModal) activityModal.classList.remove('active');
      if (tourModal) tourModal.classList.remove('active');
      closeLightboxModal();
      closeMobileNav();
    }
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowLeft') {
        currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
        updateLightboxContent();
      }
      if (e.key === 'ArrowRight') {
        currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredItems.length;
        updateLightboxContent();
      }
    }
  });

  renderGallery();

  /* ---------------------------------------------------------
     7. CONTACT FORM SUBMISSION
     --------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formStatusSuccess = document.getElementById('form-status-success');
  const btnResetForm = document.getElementById('btn-reset-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Transmitting Inquiry...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        const fullName = document.getElementById('input-fullname').value;
        const interest = document.getElementById('input-interest').value;
        
        document.getElementById('success-user-name').textContent = fullName || 'Guest';
        document.getElementById('success-interest').textContent = interest || 'General Inquiry';

        contactForm.style.display = 'none';
        if (formStatusSuccess) formStatusSuccess.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }

  if (btnResetForm) {
    btnResetForm.addEventListener('click', () => {
      if (contactForm) {
        contactForm.reset();
        contactForm.style.display = 'block';
      }
      if (formStatusSuccess) formStatusSuccess.style.display = 'none';
    });
  }

  /* ---------------------------------------------------------
     8. DYNAMIC FOOTER COPYRIGHT YEAR
     --------------------------------------------------------- */
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
