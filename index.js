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
