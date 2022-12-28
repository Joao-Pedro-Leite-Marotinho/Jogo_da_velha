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
            }
            else{
                player2++;
            }

            //*checa quem venceu
            checkWinCondition();
        }

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
            //*x
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //*o
        }

    }

    //*horizontal
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            //*x
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //*o
        }

    }

    //*horizontal
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            //*x
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //*o
        }

    }

    //*vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            //*x
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //*o
        }

    }

    //*vertical
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            //*x
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //*o
        }

    }

    //*vertical
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            //*x
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //*o
        }

    }

    //*diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            //*x
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //*o
        }

    }

    //*diagonal
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        //*pegando a classe (x ou o) das caixas
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            //*x
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //*o
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
            console.log("Deu velha!");
        }
    }
}