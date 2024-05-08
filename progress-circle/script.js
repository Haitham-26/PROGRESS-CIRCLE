const progress = document.getElementById("progress");

const bodyHeight = document.body.scrollHeight;

const viewportHeight = window.innerHeight;

const deg = (bodyHeight - viewportHeight) / 360;

document.body.onscroll = () => {
  const bound = -document.body.getBoundingClientRect().top;
  progress.style.backgroundImage = `conic-gradient(red 0deg, red ${
    bound / deg
  }deg , transparent ${bound / deg}deg)`;
};
