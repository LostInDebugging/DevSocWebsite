document.addEventListener("DOMContentLoaded", () => {
  const allImageContainers = document.querySelectorAll('.imagecont');

  allImageContainers.forEach(container => {
    const images = container.querySelectorAll('img');
    let index = 0;

    setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 1500);
  });
});
