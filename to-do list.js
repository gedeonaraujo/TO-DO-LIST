const button = document.querySelector(".buton-tesk");
const input = document.querySelector(".input-tesk");
const listaCompleta = document.querySelector(".list-tesk");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push(input.value);

  mostrarTarefa();
}

function mostrarTarefa() {
  let novaLi = "";

  minhaListaDeItens.forEach((tarefa) => {
    novaLi =
      novaLi +
      `
        <li class="tesk">
          <img src="/img/cheked.png" alt="checkhaut na tarefa" />
          <p>${tarefa}</p>
          <img src="/img/lixeira.png" alt="jogar na lixeira" />
        </li>
    
      `;
  });

  listaCompleta.innerHTML = novaLi;
}

button.addEventListener("click", adicionarNovaTarefa);
