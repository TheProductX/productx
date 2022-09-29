const swiperProfile = new Swiper(".swiper-profile", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
  },
});

const swiperInstitution = new Swiper(".swiper-institution", {
  slidesPerView: 7,
  speed: 1500,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    pauseOnMouseEnter: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    520: {
      slidesPerView: 5,
    },
    950: {
      slidesPerView: 6,
    },
    1300: {
      slidesPerView: 7,
    },
  },
});

// Show current year
const yearElement = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear.toString();

// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

// Smooth scroll
// Smooth scroll behavior
const allLinks = document.querySelectorAll(".main-nav-link");
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.remove("nav-open");
    }
  });
});

// Sticky navigation
const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;
    if (!ent.isIntersecting) {
      console.log("Not Intersecting");
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      console.log("Intersecting");
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
