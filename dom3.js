const btnSetBackground = document.querySelector(".set-background");

const setBackground = () => {
  const p1 = document.querySelector(".first");
  const p2 = document.querySelector(".last");

  p1.classList.add("bg-yellow");
  p2.classList.add("bg-red");
};

btnSetBackground.addEventListener("click", setBackground);
