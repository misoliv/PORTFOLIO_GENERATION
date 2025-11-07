// Selecionando elementos HTML
const input_change = document.querySelector("#input_change");
const uppercase = document.querySelector("#uppercase");
const botao_clique = document.querySelector("#botao_clique");
const botao_over = document.querySelector("#botao_over");

// Função para converter texto para maiúsculas
function upperCase(){
    uppercase.innerHTML = input_change.value.toUpperCase();
}

// Adicionando evento click ao elemento
botao_clique.addEventListener("click", () =>{
    alert("O botão foi clicado!");
})

// Adicionando evento Mouse Over ao elemento
botao_over.addEventListener("mouseover", () =>{
    alert("O mouse passou sobre o botão!");
})