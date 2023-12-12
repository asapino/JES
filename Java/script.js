document.addEventListener('DOMContentLoaded', function () {
  
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === '' || emailValue === '' || messageValue === '') {
      alert('Please fill in all fields');
      return;
    }

    alert('Form submitted successfully!'); 
    contactForm.reset(); 
  });

  const sliderImages = document.querySelectorAll('.slider-img');
  let currentSlide = 0;

  function showSlide(index) {
    sliderImages.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % sliderImages.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  const nextButton = document.getElementById('nextButton');
  const prevButton = document.getElementById('prevButton');

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  const tooltips = document.querySelectorAll('.tooltip');
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', function () {
      const tooltipText = this.getAttribute('data-tooltip');
      const tooltipElement = document.createElement('div');
      tooltipElement.className = 'custom-tooltip';
      tooltipElement.textContent = tooltipText;

      document.body.appendChild(tooltipElement);

      const rect = this.getBoundingClientRect();
      tooltipElement.style.top = rect.top - tooltipElement.offsetHeight + 'px';
      tooltipElement.style.left = rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2 + 'px';
    });

    tooltip.addEventListener('mouseout', function () {
      const tooltipElement = document.querySelector('.custom-tooltip');
      if (tooltipElement) {
        tooltipElement.remove();
      }
    });
  });

  const nav = document.querySelector('.nav');


});
