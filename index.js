const starsContainer = document.getElementById("stars-container");

const generateParticles = (number) => {
  for (let i = 0; i < number; i += 1) {
    const particleElement = document.createElement("div");
    particleElement.setAttribute("class", "particle");
    particleElement.style.animationDuration = `${Math.random() * 3}s`;
    starsContainer.appendChild(particleElement);
    particleElement.style.top =
      Math.random() * starsContainer.offsetHeight -
      particleElement.offsetHeight +
      "px";
    particleElement.style.left =
      Math.random() * starsContainer.offsetWidth -
      particleElement.offsetWidth +
      "px";
    const randomSize = Math.random() * 3;
    particleElement.style.width = randomSize + "px";
    particleElement.style.height = randomSize + "px";
  }
};



generateParticles(1000);

