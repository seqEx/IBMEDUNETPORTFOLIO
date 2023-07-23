AOS.init();

        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.navbar-nav a');

        for (const link of navLinks) {
            link.addEventListener('click', smoothScroll);
        }

        function smoothScroll(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        }
        const descriptionElement = document.querySelector(".description");
    
    // Get the text from the data-text attribute
    const text = descriptionElement.getAttribute("data-text");
    
    // Function to animate the description text
    function animateDescriptionText() {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          descriptionElement.textContent += text[index];
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50); // Adjust the speed of animation (lower value means faster)
    }
    
    // Call the function to start the animation when the page loads
    animateDescriptionText();