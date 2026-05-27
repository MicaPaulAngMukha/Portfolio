function scrollCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += direction * 300;
}