const progress = document.getElementById("progress");

const bodyHeight = document.body.scrollHeight;

const viewportHeight = window.innerHeight;

const pixelsPerDegree = (bodyHeight - viewportHeight) / 360;

progress.style.display = "none";

progress.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

document.body.onscroll = () => {
  const bound = -document.body.getBoundingClientRect().top;

  if (bound > 300) {
    progress.style.display = "flex";
  } else {
    progress.style.display = "none";
  }

  progress.style.backgroundImage = `conic-gradient(#9b51e0 0deg, #9b51e0 ${
    bound / pixelsPerDegree
  }deg , transparent ${bound / pixelsPerDegree}deg)`;
};
