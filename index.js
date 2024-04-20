var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


var map = L.map('map').setView([14.10335884452478, -87.20285956451028], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myLayer = L.marker([14.10335884452478, -87.20285956451028]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.');

// Define los estilos que deseas aplicar a la capa
var nuevoEstilo = {
    color: 'red',         // Color del borde
    fillColor: 'yellow',  // Color de relleno
    weight: 2,            // Grosor del borde en píxeles
    opacity: 0.5,         // Opacidad de la capa
    fillOpacity: 0.2      // Opacidad del relleno
};
var zoomLevel = 28;

// Aplica los nuevos estilos a la capa
myLayer.setStyle(nuevoEstilo);
myLayer.setZoom(zoomLevel);

  // Función para detener la animación de rotación cuando el cursor está sobre la tarjeta
function stopRotation(card) {
    card.style.transition = 'none';
}

// Función para reanudar la animación de rotación cuando el cursor sale de la tarjeta
function resumeRotation(card) {
    card.style.transition = 'transform 0.8s';
}




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

function enviarCorreo() {
  var nombre = document.querySelector('input[name="nombre"]').value;
  var apellido = document.querySelector('input[name="apellido"]').value;
  var mensaje = document.querySelector('textarea[name="mensaje"]').value;

  var data = {
      nombre: nombre,
      apellido: apellido,
      mensaje: mensaje
  };

  fetch('enviar_correo.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al enviar el correo');
      }
      return response.text();
  })
  .then(data => {
      alert('Correo enviado con éxito');
  })
  .catch(error => {
      console.error('Error:', error);
  });
}



