let inputPadrao = document.querySelectorAll(".input-item")
const btnEnviar = document.querySelector(".btn")

console.log(inputPadrao)


btnEnviar.addEventListener('click', function () {
    inputPadrao.forEach(function (input) {
        if (input.children[0].value !== "") {
            input.classList.remove("desativado");
            input.classList.add("ativado");
            input.children[1].classList.remove("aviso-ativo");
        } else {
            input.classList.remove("ativado");
            input.classList.add("desativado");
            input.children[1].classList.add("aviso-ativo");
        }
    });
});















// inputPadrao.forEach(function(input){
//     input.addEventListener('change', function(){
//         // const inputPreenchido = document.querySelector(".preenchido");
//         if (input.value !== "") {
//             input.classList.add("preenchido");
//         } else {
//             input.classList.add("vazio");
//         }

//     });
// });


// aviso aviso-maior
