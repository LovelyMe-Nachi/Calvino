window.addEventListener('scroll',(event)=>{
    const pexel = window.scrollY 
    const header = document.querySelector('header');
    if(pexel > 300){
        header.style.position = 'fixed'
        header.style.top = '0'
        header.style.backgroundColor = 'var(--white-color)'
        header.style.boxShadow = '0 10px 15px rgba(25,25,25,0.1)';
    }else{
        header.style.position = 'unset'
        header.style.backgroundColor = 'transparent'
        header.style.boxShadow = 'none';
    }
})

// nav responsiveness
const headerNav = document.querySelector('nav');
const headerMenu = document.querySelector('header .menu-btn')

headerMenu.addEventListener('click', ()=>{
    const headerNavId = headerNav.getAttribute('data-id').trim();
    if (headerNavId === '1') {
        headerNav.setAttribute('data-id', '0');
        headerNav.style.height = 'auto';
        headerNav.style.padding= '30px';
        headerMenu.style.background = 'linear-gradient(to top, var(--primary-color) 0%, var(--secondary-color) 100%, var(--secondary-light-color) 100%)';
    } else{
        headerNav.setAttribute('data-id', '1');
        headerNav.style.height = '0';
        headerNav.style.padding= '0px';
        headerMenu.style.background = 'linear-gradient(to bottom, var(--primary-color) 0%, var(--secondary-color) 100%, var(--secondary-light-color) 100%);';
    }
})

// pricing plan filtering functionality
const pricingPlanFilterBtns = document.querySelectorAll(".pricing-plan-filter-btns span");

pricingPlanFilterBtns.forEach(filteringBtn =>{
    filteringBtn.addEventListener("click", ()=>{
        const pricingPlan = filteringBtn.getAttribute("data-pricing-plan").trim();
        const pricingPlanRow = document.querySelector(".pricing-plan-row");
        const pricingPlanCards = pricingPlanRow.querySelectorAll(".pricing-plan-col");

        pricingPlanCards.forEach(pricingPlancard =>{
            if (pricingPlancard.classList.contains(pricingPlan)) {
                pricingPlancard.style.display = "block";
            } else {
                pricingPlancard.style.display = "none";
            }
        })

        document.querySelectorAll(".pricing-plan-filter-btns span").forEach(filteringBtn => filteringBtn.classList.remove("pricing-plan-btn-active"));
        filteringBtn.classList.add("pricing-plan-btn-active");
    })
})

// counting functionality
const calvinoBenefitCounter = document.querySelectorAll(".calvino-benefits-counting-row h3 span");
function startCounting() {
    calvinoBenefitCounter.forEach(counter => {
        const counterUpdate = () =>{
            const target = +counter.getAttribute('data-target');
            const countedText = +counter.textContent;
            const increment = target/500;
    
            if (countedText < target) {
                counter.textContent = Math.ceil(countedText + increment);
                setTimeout(counterUpdate, 50);
            } else{
                counter.textContent = target;
            }
        }
        counterUpdate();
    });
}
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
});
calvinoBenefitCounter.forEach(counter => counterObserver.observe(counter));

// Back to the Top function
let backToTopReach = 800;
window.addEventListener('scroll', ()=>{
    const scrolling  = window.scrollY
    const backToTopBtn = document.querySelector('.back-to-top');

    if (scrolling >= backToTopReach) {
        backToTopBtn.style.visibility = 'visible'        
    }else{
        backToTopBtn.style.visibility = 'hidden'
    }
})

// swiper
new Swiper('.case-study-wrapper', {
    loop: true,
    spaceBetween: 30,

    autoplay:{
        delay:2000,
        pauseOnMouseEnter: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
});


const reviewsWrapper = document.querySelector('.reviews-wrapper');
const reviewsImg = reviewsWrapper.querySelector('.reviews-img');
const review = reviewsWrapper.querySelector('.reviews-text');
const reviewsUser = reviewsWrapper.querySelector('.review-username');
const reviewDots = document.querySelectorAll('.review-dots span');


const allSlides = [
    {
        image: "assets/images/reviews-img.png",
        theReview: `"Even the all-powerful pointing has no control about the blind texts. It is an almost unreal orthographic eaque  Lorem ipsum dolor sit amet consectetur adipisicing elit. "`,
        theReviewUser: "Unique Loveth"
    },
    {
        image: "assets/images/reviews-img-2.png",
        theReview: `"We’re out to create purposeful spaces that molestias architecto sunt eveniet deleniti sequi. Omnis enim itaque quas, veniam incidunt hic  has no control about the Even the all-powerful pointing"`,
        theReviewUser: "Flora Aloysius"
    },
    {
        image: "assets/images/reviews-img-3.png",
        theReview: `"Nemo tempora pariatur porro sit nesciunt, molestias architecto sunt eveniet deleniti sequi. Omnis enim itaque quas, veniam incidunt hic "`,
        theReviewUser: "Jane Robbinson"
    }
]

let iteration = 0;

// Function to update the content of the review slider
function updateSlide() {
    reviewsImg.src = allSlides[iteration].image;
    review.textContent = allSlides[iteration].theReview;
    reviewsUser.textContent = allSlides[iteration].theReviewUser;

    reviewDots.forEach((dot, index) => {
        if (index === iteration) {
            dot.classList.add('active-dots');
        } else {
            dot.classList.remove('active-dots');
        }
    });

    iteration = (iteration + 1) % allSlides.length;
}

// Start the slider
updateSlide();
setInterval(updateSlide, 5000); 


// footerdate
const currentYear = new Date().getFullYear();
const footerDate = document.querySelector('footer .copyright-year');
footerDate.textContent = currentYear;