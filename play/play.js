const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
$(document).ready(function() {
  $('.search-toggler').click(function() {
    $('.search-bar').toggleClass('collapsed');
  });
});


$(document).ready(function () {
  // Variables
  var $slider = $('.reviews-slider');
  var $cards = $('.reviews-card');
  var cardWidth = $cards.outerWidth(true);
  var numCards = $cards.length;
  var currentIndex = 0;

  // Function to update the slider position
  function updateSlider() {
    var position = -currentIndex * cardWidth;
    $slider.css('transform', 'translateX(' + position + 'px)');
  }

  // Click event for the next button
  $('.next-button').click(function () {
    if (currentIndex < numCards - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  // Click event for the previous button
  $('.prev-button').click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
});





window.addEventListener('DOMContentLoaded', (event) => {
  // Find the input element with the ID 'name-on-card'
  const nameOnCardInput = document.getElementById('name-on-card');

  // Add an event listener to the input element
  nameOnCardInput.addEventListener('focus', () => {
      // When the input field is focused, change the placeholder text to include the red asterisk (*)
      nameOnCardInput.placeholder = 'Name on Card *';
  });

  nameOnCardInput.addEventListener('blur', () => {
      // When the input field loses focus, reset the placeholder text
      nameOnCardInput.placeholder = 'Name on Card';
  });
});

const decrementButton = document.querySelector('.decrement-button');
const incrementButton = document.querySelector('.increment-button');
const numberDisplay = document.getElementById('number');

let number = 0;

decrementButton.addEventListener('click', () => {
  number--;
  if(number <=0){
    numberDisplay.textContent = 0;
    number = 0
  }else{
    numberDisplay.textContent = number;
  }
  
});

incrementButton.addEventListener('click', () => {
  number++;
  numberDisplay.textContent = number;
});