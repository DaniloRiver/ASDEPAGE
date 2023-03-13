var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




// const colImg = document.getElementById('info');

// function handleScroll() {
//   const elementTop = colImg.getBoundingClientRect().top;
//   const elementHeight = colImg.offsetHeight;

//   if (elementTop + elementHeight >= 0 && elementTop < window.innerHeight) {
//     colImg.classList.add('info.animate');
//   } else {
//     colImg.classList.remove('info.animate');
//   }
// }

// window.addEventListener('scroll', handleScroll);
