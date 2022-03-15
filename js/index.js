const productos = [
    {nombre: 'Control Philips', valor: 1500},
    {nombre: 'Control Noblex', valor: 1300},
    {nombre: 'Control LG', valor: 1450},
    {nombre: 'RCA común', valor: 450},
    {nombre: 'RCA premium', valor: 650},
    {nombre: 'RCA - 3.5mm', valor: 750},
  ]
  
  const formulario = document.querySelector('#formulario');
  const boton = document.querySelector('#boton');
  const resultado = document.querySelector('#resultado')
  
  const filtrar = ()=>{
    //console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for(let producto of productos){
      let nombre = producto.nombre.toLocaleLowerCase();
      if(nombre.indexOf(texto) !== -1){
        resultado.innerHTML += `
        <li>${producto.nombre} - Valor: ${producto.valor} </li>
        
        
        `
      }
    }
  }
  
  boton.addEventListener('click', filtrar);
  formulario.addEventListener('keyup', filtrar);


  filtrar();