document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");
  const emailInput = document.querySelector(".email-input");
  const errorState = document.getElementById("error-state");
  const thanksYouCard = document.querySelector(".thanks-you-card");
  const card = document.querySelector('.card');

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    if (!isValidEmail(emailInput.value)) {

      errorState.style.visibility = "visible";
      emailInput.classList.add("error");
      
    } else {
      errorState.style.visibility = "hidden";
      thanksYouCard.classList.add("success");
      card.classList.add("submitted");
      form.reset();
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const dismissButton = document.getElementById("dismis-button");
  dismissButton.addEventListener("click", function () {
    thanksYouCard.classList.remove("success");
    card.classList.remove("submitted");
  });
});
