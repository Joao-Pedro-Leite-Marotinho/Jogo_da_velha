//*colocando classes e ids do html em variáveis
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

//*contador de jogadas
let player1 = 0;
let player2 = 0;

//*adicionando evento click aos boxes
for(let i = 0; i < boxes.length; i++){
    //*quando alguém clica na caixa
    boxes[i].addEventListener("click", function(){

        let el = checkEl(player1, player2)
        
        //*verificando se a caixa específica já contém um x ou o
        if(this.childNodes.length == 0){
            //*clonando o elemento para outra variável
            let cloneEl = el.cloneNode(true);

            //*adicionando o elemento na caixa
            this.appendChild(cloneEl);

            //*computar jogada
            if(player1 == player2){
                player1++;

                if(secondPlayer == 'ai-player'){
                    //*função para executar jogada
                    computerplay();
                    player2++;
                }
            }
            else{
                player2++;
            }

            //*checa quem venceu
            checkWinCondition();
        }

    });
}

//*evento para saber o modo de jogo: pvp ou pvia
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id");

        //*esconde o button
        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none';
        }

        //*mostra o jogo com um delay de .5 segundos
        setTimeout(function(){

            let container = document.querySelector("#container");
            container.classList.remove("hide");

        }, 500)
    });
}

//*função que vê quem vai jogar
function checkEl(player1, player2) {
    let el;

        if(player1 == player2){
            //*primeiro jogador x
            el = x;
        }
        else{
            //*segundo jogador o
            el = o;
        }
        return el;
}

//*vê quem venceu
function checkWinCondition(){
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //*formas horizontais
    //*checa se há um nó filho
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;
        
        //*checando se três caixas consecutivas estão marcadas com o mesmo símbolo
        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            declareWinner('o');
        }

    }

    //*horizontal
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            declareWinner('x');
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            declareWinner('o');
        }

    }

    //*horizontal
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            declareWinner('o');
        }

    }

    //*vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            declareWinner('o');
        }

    }

    //*vertical
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            declareWinner('o');
        }

    }

    //*vertical
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            declareWinner('o');
        }

    }

    //*diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            declareWinner('o');
        }

    }

    //*diagonal
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            declareWinner('o');
        }

    }

    //*velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++){
        //*verificando se a caixa tem um nó filho
        if(boxes[i].childNodes[0] != undefined){
            counter++;
        }
        if(counter == 9){
            declareWinner('');
        }
    }
}

//*limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){
    let scoreboardX = document.querySelector("scoreboard-1");
    let scoreboardO = document.querySelector("scoreboard-2");

    if(winner == 'x'){
        //*transforma o conteúdo em int e soma +1
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    }
    else if(winner == 'y'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = "O jogador 2 venceu!";
    }
    else{
        msg = "Deu velha!";
    }
    
    //*exibir mensagem na tela, colocando no p da div message

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    //*esconde mensagem depois de 3 segundos
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000);

    //*zera as jogadas
    player1 = 0;
    player2 = 0;

    //*remove x e o da grade
    //*seleciona todas as box que tem childNode
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++){
        //*seleciona a box e remove o childNode
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

//*executar a jogada do cpu
function computerplay(){

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
    
    //*sorteando número da box a ser preenchida
    for(let i = 0; i < boxes.length; i++){
        
        let randomNumber = Math.floor(Math.random() * 5);
        //*só preencher quando o childNode estiver vazio
        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        }
        else{
            filled++;
        }
    }
    //*checagem de quantas estão preenchidas
    if(counter == 0 && filled <9){
        computerplay();
    }
}