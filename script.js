const grid = document.querySelector("#grid"); // Pegando a div do html para inserir divs dentro
const largura1 = document.querySelector("#largura");
const altura1 = document.querySelector("#altura");  // Pegando os valores do html, inputs e click do botao
const botao = document.querySelector("#btn");
const atual = document.querySelector("#atual") // trocar o valor atual da cor, na caixinha

atual.style.backgroundColor = "black";
let corAtual = "black";
function trocaCor(cor) {
    corAtual = cor;
    atual.style.backgroundColor = cor;
}

//Pegando os botões para mudar de cor
document.querySelectorAll("button[data-cor]").forEach((botao) => {  // SelectAll -> pega todos os botões
    botao.addEventListener("click", function () { //Ao clicar
        const cor = botao.getAttribute("data-cor");  // Armazena o valor do data-cor (red,white,black) numa const cor e vai dar como argumento de uma função
        trocaCor(cor);
    });
});

const larguraGrid = 1000;
const alturaGrid = 800;

botao.addEventListener("click", function () {
    grid.innerHTML = "";  //Zerando o grid a cada novo desenho
    const largura = largura1.value;
    const altura = altura1.value;           // Pegando os valores de altura e largura por EventListener

    const width = larguraGrid / largura;
    const height = alturaGrid / altura;

    //Acredito que a ideia será fazer 2 loops, o primeiro iterando horizontalmente e o segundo iterando verticalmente, criando divs e adicionando via DOM na página
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < largura; j++) {
            const caixas = document.createElement('div');
            const atual = document.createElement('p')
            caixas.classList.add("box");
            caixas.style.width = `${width}px`;
            caixas.style.height = `${height}px`;
            // Adicionando o EventListener do hover, dentro do loop pq cada div necessita de um desses
            caixas.addEventListener("mouseover", function () {
                caixas.style.backgroundColor = corAtual;
            })
            grid.appendChild(caixas);
        }
    }

})
