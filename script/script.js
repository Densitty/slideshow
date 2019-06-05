const button = document.querySelector('.banner button');
const banner = document.querySelector('.banner');
const slider = document.querySelector('.slideshow-wrapper');
const slide = document.querySelector('.slideshow');
const slideBtn = document.querySelector('.content button');

button.addEventListener('click', () => {
	banner.style.display = 'none';
	slider.style.cssText = 'opacity: 1; visibility: visible';
	slide.style.animation = 'slideshow 24s infinite';
});
