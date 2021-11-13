const answers = document.querySelectorAll(".arrow");

answers.forEach(arrow => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("is-open")) {
      arrow.classList.remove("is-open");
    } else {
      const answersIsOpen = document.querySelectorAll(".is-open");

      answersIsOpen.forEach(answersIsOpen => {
        answersIsOpen.classList.remove(".is-open");
      });
      arrow.classList.add(".is-open");
    }
  });
});
