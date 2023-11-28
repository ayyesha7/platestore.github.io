// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
//   item.addEventListener("click", function () {
//     this.classList.toggle("collapsible--expanded");
//   })
// );
$(document).ready(function() {
  $('.list-name').click(function() {
      $('.list-name').removeClass('highlighted');
      
      $(this).addClass('highlighted');
  });
});

$(document).ready(function() {
  $('.search-toggler').click(function() {
    $('.search-bar').toggleClass('collapsed');
  });
});

// JavaScript to handle accordion functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            // Close all other answers before opening this one
            faqItems.forEach((otherItem) => {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherItem !== item && otherAnswer.style.display === 'block') {
                    otherAnswer.style.display = 'none';
                }
            });

            answer.style.display = 'block';
        }
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