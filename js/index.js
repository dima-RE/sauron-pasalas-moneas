// ----------- FUNCIONES ---------------
//Definir arreglo fuera para que persista
const guerreros = [];

// Eliminar guerreros de la lista
const eliminarGuerrero = async function(){
    let res = await Swal.fire({
      title: `¿Desea eliminar el guerrero ${guerreros[this.nro].nombre}?`,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!"
    });
    if(res.isConfirmed){
      guerreros.splice(this.nro,1);
      cargarTabla();
      Swal.fire("Guerrero eliminado")
    } else {
      Swal.fire("Operacion cancelada")
    }
  };

// Cargas elementos en la lista y en la tabla
const cargarTabla = ()=>{
    let tbody = document.querySelector("#tabla-tbody");
    tbody.innerText = "";

    for(let i=0; i < guerreros.length; ++i){
      let g = guerreros[i];
      let tr = document.createElement("tr");

      let tdNro = document.createElement("td");
      tdNro.innerText = (i+1);

      let tdNombre = document.createElement("td");
      tdNombre.innerText = g.nombre;
  
      let tdTipo = document.createElement("td");
      tdTipo.innerText = g.tipo;

      let tdNivel = document.createElement("td");
      tdNivel.innerText = g.nivel;

      let tdRango = document.createElement("td");
      tdRango.innerText = g.rango;

      let tdAcciones = document.createElement("td");
      let boton = document.createElement("button");
      boton.classList.add("btn","btn-danger");
      boton.innerText = "Asesinado por la Aparicion";
      boton.nro = i;
      boton.addEventListener("click",eliminarGuerrero);
      tdAcciones.appendChild(boton);

      tr.appendChild(tdNro);
      tr.appendChild(tdNombre);
      tr.appendChild(tdTipo);
      tr.appendChild(tdRango);
      tr.appendChild(tdAcciones);

      tbody.appendChild(tr);
    }
  }

// Definir Funciones

// ------------ PRINCIPAL ---------------

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let tipo = document.querySelector("#tipo-txt").value;
    let nivel = document.querySelector("#nivel-txt").value;
    let rango = document.querySelector("#rango-txt").value;

    let guerrero = {};
    guerrero.nombre = nombre;
    guerrero.tipo = tipo;
    guerrero.nivel = nivel;
    guerrero.rango = rango;

    guerreros.push(guerrero);
    cargarTabla();
    swal.fire("Exito!","Guerrero registrado","success");

});