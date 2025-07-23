const grid = document.querySelector("#grid"); // Pegando a div do html para inserir divs dentro
const largura1 = document.querySelector("#largura");
const altura1 = document.querySelector("#altura");  // Pegando os valores do html, inputs e click do botao
const botao = document.querySelector("#btn");

const larguraGrid = 1000;
const alturaGrid = 800;


botao.addEventListener("click", function () {
    const largura = largura1.value;
    const altura = altura1.value;           // Pegando os valores de altura e largura por EventListener

    const width = larguraGrid / largura;
    const height = alturaGrid / altura;
    console.log(width, height)
    //Acredito que a ideia será fazer 2 loops, o primeiro iterando horizontalmente e o segundo iterando verticalmente, criando divs e adicionando via DOM na página
    grid.innerHTML = "";
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < largura; j++) {
            const caixas = document.createElement('div');
            caixas.classList.add("box");
            caixas.style.width = `${width}px`;
            caixas.style.height = `${height}px`;

            // Adicionando o EventListener do hover, dentro do loop pq cada div necessita de um desses
            caixas.addEventListener("mouseover", function () {
                caixas.style.backgroundColor = "black";
            })
            grid.appendChild(caixas);
        }
    }

})