// dark mode start
const body = document.body;
const colorSchemeToggle = document.querySelector("#color-scheme-toggle");
const buttons = document.querySelectorAll("button");

colorSchemeToggle.addEventListener("change", function (e) {
    if (e.target.checked) {
        body.classList.add("dark");
        localStorage.setItem("current-theme", "dark");
        return;
    }
    body.classList.remove("dark");
    localStorage.setItem("current-theme", "light");
});

window.addEventListener("load", function () {
    const currentTheme = localStorage.getItem("current-theme");
    if (currentTheme === "dark") {
        body.classList.add("dark");
        colorSchemeToggle.checked = true;
    }
});

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
// dark mode end

// testimonial start

const testimonials = document.querySelectorAll(".testimonial");
const ANIMATION_DELAY = 5000; //ms
const ANIMATION_DURATION = 200; //ms
testimonials.forEach((item, index) => {
    if (index == 0) return;
    item.classList.add("testimonial-hidden");
});
let index = 1;

function showTestimonial() {
    const currentTestimonial = testimonials[index % testimonials.length];
    const previousTestimonial =
        testimonials[(index - 1 + testimonials.length) % testimonials.length];

    // Hide previous testimonial
    previousTestimonial.classList.remove("show-animation");
    previousTestimonial.classList.add("hide-animation");

    // Wait for the animation duration before hiding it completely
    setTimeout(() => {
        previousTestimonial.classList.add("testimonial-hidden");
    }, ANIMATION_DURATION);

    // Show current testimonial
    currentTestimonial.classList.remove("hide-animation");
    currentTestimonial.classList.add("show-animation");

    // Wait for a moment before removing the hidden class
    setTimeout(() => {
        currentTestimonial.classList.remove("testimonial-hidden");
    }, ANIMATION_DURATION);

    index++;
}

setInterval(showTestimonial, ANIMATION_DELAY);
// testimonial end

// faq start

const faqs = document.querySelectorAll(".question-text");

faqs.forEach((item) =>
    item.addEventListener("click", () => {
        const questionParent = item.parentNode;
        questionParent.classList.toggle("active");
    }),
);

// faq end

// about start

const aboutContent = [
    `
    We started with a dream: a world where you never have to walk or bike when you can roll in style! 
    Our rental service was born from a love of four wheels and a desire to help people avoid leg day. 
    Whether you need a car for a quick trip or just want to show off, we’re here to help. 
    Plus, our cars are so clean, you might think we don’t let anyone rent them!

    What began as a small local operation has grown into a full-fledged car rental service, trusted by dozens 
    (okay, maybe more like tens of people). But hey, you gotta start somewhere! Our passion for cars drives 
    us to provide the best service possible, and maybe one day we’ll have enough rentals to rival the big leagues. 
    Until then, we’ll keep making sure your rental experience is top-tier.
  `,
    `
    From economy rides that sip fuel like a fine wine to luxury cars that scream 'I’ve made it,' 
    we’ve got the wheels for every mood. Whether you need to fit the entire extended family or 
    just want to feel the wind in your hair, we’ve got you covered. And yes, we even have that one 
    model you can’t pronounce!

    Our fleet includes everything from eco-friendly hybrids to turbo-charged sports cars. Whether 
    you're heading out on a weekend getaway, impressing a date, or just needing a reliable ride 
    for your everyday errands, we have the perfect car for you. The best part? Every car in our fleet 
    comes with the latest features, including Bluetooth, GPS, and seat warmers for those chilly days. 
    And, of course, air conditioning that actually works!
  `,
    `
    Well, why not? We’ve got cars. You’ve got places to be. It’s a match made in vehicular heaven! 
    Our prices are fair, our staff is friendly (most of the time), and our cars are so reliable, 
    you’ll forget they aren’t yours. We’re here to make your rental experience as smooth as possible—just like the ride.

    We also offer flexible rental plans, no hidden fees, and a satisfaction guarantee that means 
    you can drive off with peace of mind. Our customer support team is always ready to help with 
    any questions or issues you might have (even if it’s just to talk about the weather).
  `,
    `
    ‘I rented a car for a weekend trip, and it was so comfortable, I decided to drive to the next state just for fun!’ — Sarah, probably.
    ‘Best rental ever. The car practically drove itself… or maybe I’m just that good.’ — Mark, probably.
    People are saying good things, so you should definitely trust them!

    Over the years, we’ve collected countless stories from happy customers who have rented everything 
    from our economy cars to our luxury sedans. Their tales of road trips, surprise adventures, and 
    smooth rides make us proud to be a part of their journey.
  `,
    `
    We aim to put you behind the wheel of a car you’ll love… even if it’s just for a day. Our mission 
    is to make sure you get from point A to point B without any weird smells or strange noises coming 
    from the engine. Rent with us, and your biggest worry will be what playlist to blast.

    We’re committed to providing the best car rental service possible with a friendly, no-nonsense 
    approach. We believe that driving should be fun, and we’ll do everything we can to make sure 
    you have a smooth, enjoyable experience every time.
  `,
];

const tabsButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelector(".tab-content p");
const indicator = document.querySelector(".indicator");
if (tabContent) {
    tabContent.innerText = aboutContent[0];
    indicator.style.width = aboutContent[0].offsetWidth + "px";
    indicator.style.left = aboutContent[0].offsetLeft + "px";
}
tabsButtons.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        if (!tabsButtons) return;
        if (index == tabContent.dataset.shownIndex) return;
        tabsButtons[Number(tabContent.dataset.shownIndex)].classList.remove(
            "active",
        );
        indicator.style.width = e.target.offsetWidth + "px";
        indicator.style.left = e.target.offsetLeft + "px";
        tabContent.dataset.shownIndex = index;
        tabContent.innerText = aboutContent[index];
        tabsButtons[index].classList.add("active");
    });
});
// about end

// Responsive nav start

const mainNav = document.querySelector(".nav-links");
const toggleNavBtn = document.querySelector(".main-nav .btn");

toggleNavBtn.addEventListener("click", () => {
    const isActive = !mainNav.classList.toggle("active");
    if (isActive) {
        toggleNavBtn.innerHTML = `                    <svg
                        viewBox="0 0 24.00 24.00"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        transform="matrix(1, 0, 0, 1, 0, 0)"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />

                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke="#CCCCCC"
                            stroke-width="0.0"
                        />

                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
                                fill="#302F42"
                            />
                        </g>
                    </svg>
`;
        return;
    }

    toggleNavBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM8.96965 8.96967C9.26254 8.67678 9.73742 8.67678 10.0303 8.96967L12 10.9394L13.9696 8.96969C14.2625 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0606 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73744 15.3232 9.26256 15.3232 8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697L10.9393 12L8.96965 10.0303C8.67676 9.73744 8.67676 9.26256 8.96965 8.96967Z" fill="#1C274C"/> </g>
        </svg>
`;
});

// Responsive nav end
