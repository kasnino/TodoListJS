const itemForm = document.getElementById("itemForm");
const itemInput = document.getElementById("itemInput");
const item = document.querySelector(".item");
const itemlist = document.querySelector(".item-list");
const feedback = document.querySelector(".feedback");

let datosvector = [];
//evento input principal
itemForm.addEventListener("submit", function(event){
	event.preventDefault();
	var texto = itemInput.value;
	//console.log(event);
	if(texto == "")
	{
		//alerta
		showfeedback("porfavor ingrese un valor valido","primary");
	}else{
		agregar(texto);
		//dejo limpio el input
		itemInput.value= '';
		datosvector.push(texto);
		console.log(datosvector);
		completar(texto);
		editar(texto);
		remover(texto);
	}
});
//agregar items
function agregar(texto){
	const newItem = document.createElement("div");
	newItem.classList.add(
		"item",
		"my-3"
		);
	newItem.insertAdjacentHTML('afterbegin', `<h5 class="item-name text-capitalize">${texto}</h5>
		<div class="item-icons">
		<a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
		<a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
		<a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
		</div>`);
	/*tengo que insertarlo dentro de item-list*/
	/*document.body.appendChild(newItem);*/
	const itemlist = document.querySelector(".item-list");
	itemlist.appendChild(newItem);
	}
//revizar el item
function completar(texto){
	const items = itemlist.querySelectorAll(".item");
    items.forEach(function(elem, pos, vector){
	if(elem.querySelector(".item-name").textContent === texto){
		elem.querySelector(".complete-item").addEventListener("click", function(){
		console.log("click en subrayar");
		elem.querySelector(".item-name").classList.toggle("completed");
		this.classList.toggle("visibility")
			});
	       }
		});
	  }
//editar el item
function editar(texto){
	  const items = itemlist.querySelectorAll(".item");
      items.forEach(function(elem, pos, vector){
	  if(elem.querySelector(".item-name").textContent === texto){
		elem.querySelector(".edit-item").addEventListener("click", function(){
			itemInput.value = texto;
			itemlist.removeChild(elem);
			datosvector = datosvector.filter(function(item){
				return item !== texto;
     			});
			});
	       }
		});
	}
//borrar items
function remover(texto){
	  const items = itemlist.querySelectorAll(".item");
      items.forEach(function(elem, pos, vector){
	  if(elem.querySelector(".item-name").textContent === texto){
		elem.querySelector(".delete-item").addEventListener("click", function(){
		console.log("click borrar");
		elem.remove(elem);
			});
	       }
		});
const borrartodo = document.getElementById("clear-list");
const itemss = itemlist.querySelectorAll(".item");
borrartodo.addEventListener("click", function(){
	itemss.forEach(function(elem, pos, vector){
     elem.remove(elem);
	});
  })
}
///alertas 
function showfeedback(text, action){
	feedback.classList.add("showItem", `alert-${action}`);
	feedback.innerHTML = `<p>${text}</p>`;
	setTimeout(function(){
		feedback.classList.remove("showItem", `alert-${action}`);
	}, 2000);
}