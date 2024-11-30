        const header = document.querySelector("header");
        const heroSection = document.querySelector(".hero");
        const hamburger = document.querySelector(".hamburger");
        const navBar = document.querySelector(".nav-bar");


        //contact form cleared after submitting
        function clearFormFields() {
        const form = document.getElementById("contactForm");
        
        // Delay clearing to allow form submission to complete
        setTimeout(() => {
            form.reset();
        }, 100);

    }
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 0);
        });

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("clicked");
            navBar.classList.toggle("active");
        });

        
    