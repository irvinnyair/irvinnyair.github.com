// Obtener los elementos del elemento .close
//Recorrerlos
//Agregar un evento clic en cada una de ellos

let close = document.querySelectorAll('.close');

close.forEach(function(close){
  close.addEventListener('click',function(evento){
  evento.preventDefault();
  let content = document.querySelector(".content");

  //Quitar las clases de la animacion

  content.classList.remove("animate");
  content.classList.remove("fadeInDown");

  //Agregar las clases de la animacion

  content.classList.add("animate");
  content.classList.add("fadeOutUp");

  setTimeout(function(){
    location.href="/boletines";
  },1000);
  return false;
  });
});


// let close = document.querySelectorAll('.close');
//
// close.forEach(function(close){
//   close.addEventListener('click',function(evento){
//   evento.preventDefault();
//   return false;
//   });
// });

// let iconos = document.querySelectorAll('i');
//
// iconos.forEach(function(icono){
//       icono.classList.remove("far");
//       icono.classList.add("fa ")
// });



/*let links = document.querySelectorAll('a');
links.forEach(function(links){//Recorrer con arreglo todas las etiquetas A
  console.log(links);
});*/

// let celdas = document.querySelectorAll("td");
//
// celdas.forEach(function(td){
//   td.addEventListener('click',function(){
//     console.log(this);
//   });
// });
