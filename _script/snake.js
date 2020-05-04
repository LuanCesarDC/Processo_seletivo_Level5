var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

window.onload = function(){
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    this.setInterval(game, 70);  //tempo em ms de duração de um quadro.

    var vel = 1; //Numero de quadrados que serão andados por quadro.

    var vel_x = vel_y = 0; // Velocidade inicial em X e em Y .
    var quant_p = 30; //Quantidade de casas (quadradinhos) em cada direção do Canvas.
    var tam_p = parseInt(cnv.width / quant_p); //Tamanho de cada (quadradinho) em pixels.
    var head_x = head_y = 15; //posição inicial da "cabeça" da cobra.
    var comida_x = comida_y = 11; //posição inicial da comida.
    var pontos = 0; //pontuação

    var rastro = []; //Array que guarda a posição de cada elemento da cobra
    var cauda = 2;  //tamanho inicial da cobra

    function game() {
        document.getElementById("pontos").innerText = pontos;
        head_x += vel_x;  //x e y são incrementados de acordo com vel_x e vel_y
        head_y += vel_y;  //fazendo com que sua posição varie

        if(head_x < 0) {  // Se a cobra passar das paredes do canvas, ela aparecerá na parede oposta
            head_x = quant_p - 1;
        }
        if(head_x > quant_p - 1) {
            head_x = 0;
        }
        if(head_y < 0) {
            head_y = quant_p - 1;
        }
        if(head_y > quant_p - 1) {
            head_y = 0;
        }
        
        ctx.clearRect(0, 0, cnv.width, cnv.height); //Limpa a tela.

        ctx.fillStyle = "red"; //troca a cor do renderizador para Vermelho para desenhar a comida.
        ctx.fillRect(comida_x*tam_p, comida_y*tam_p, tam_p, tam_p); //Desenha a comida

        ctx.fillStyle = "black"; //Troca a cor do renderizador para Preto para desenhar o corpo da cobra.
        for(var i = 0; i < rastro.length; i++) { 
            ctx.fillRect(rastro[i].x*tam_p, rastro[i].y*tam_p, tam_p, tam_p); //Desenha a cobra
            if(rastro[i].x == head_x && rastro[i].y == head_y) { //analisa a colisão com a cauda
                vel_x = vel_y = 0;  //Perdeu o jogo
                if(cauda > 2) {
                    vel = 0;
                    document.getElementById("restart").setAttribute("style", "display: block;");
                    document.getElementById("restart").setAttribute("href", "game.html");
                } 
            }
        }

        rastro.push({             //Acrescenda a posição da cabeça ao rastro, pois quando a cabeça se mover
                        x:head_x, //Sua posição será ocupada pela próxima posição do rastro
                        y:head_y
                    })
        while(rastro.length > cauda) { //Retira a ultima posição do rastro, pois a mesma já não faz parte do corpo da cobra
            rastro.shift();
        }
        
        if(comida_x == head_x && comida_y == head_y) { //Aumenta o tamanho quando encontra a comida.
            cauda++;
            pontos++;
            comida_x = Math.floor(Math.random()*quant_p); //gera uma comida em um local aleatório.
            comida_y = Math.floor(Math.random()*quant_p);
        }
    }

    function keyPush(e) {
        if(e.keyCode == LEFT && vel_x != vel) { //Muda a direção ou o sentido da velocidade.
            vel_y = 0;
            vel_x = -vel;            
        }else if(e.keyCode == RIGHT && vel_x != -vel) {
            vel_y = 0;
            vel_x = vel;            
        }else if(e.keyCode == UP && vel_y != vel) {
            vel_y = -vel;
            vel_x = 0;            
        }else if(e.keyCode == DOWN && vel_y != -vel) {
            vel_y = vel;
            vel_x = 0;
        }
    }
}