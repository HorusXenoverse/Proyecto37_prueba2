class Quiz {
  constructor(){
    //AQUI EN LUGAR DE DISTANCIA, NAME Y DISTANCE
    //VA UN TITULO, RESPUESTA1 Y RESPUESTA2
    this.title = null;
    this.title2 = null;
    this.respuesta1 = null;
    this.respuesta2 = null;
  }


//ESTA SI VA ASI
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  //ESTA SI VA ASI
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
//ESTA SI ESTA BIEN ASI
  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
    
    //escribe aquí el código para cambiar el color de fondo 
     //AQUI SOLO HAY QUE PONER UN BACKGROUND DEL COLOR QUE QUIERAS
     background("yellow");

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    //AQUI USAS EL TITULO QUE TE PEDI ARRIBA EN EL CONSTRUCTOR
    //QUE CREARÁS PARA QUE LO USES Y PONGAS "EL RESULTADO DE LA ENCUESTA ES:"
    this.title2 = createElement('h3')
    this.title2.html("*NOTA: ¡El concursante que respondío correctamente, está resaltado en color verde!");
    this.title2.position(90,230);

    this.title = createElement('h2')
    this.title.html("Resultado del cuestionario:");
    this.title.position(350,0);
    //llama aquí a getContestantInfo( )
    //AQUI MANDAS LLAMAR LA FUNCION ESTATICA QUE ESTA EN LA CLASE CONTESTANT.JS
    //SE LLAMA GETPLAYERINFO()
    Contestant.getPlayerInfo();

    //No sé como mostrar los demás jugadores
    if(allContestants !== undefined){
      var displayPosition = 230;
      
      for(var plr in allContestants){
        var correctsAns = "2";

        displayPosition +=30;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 30,displayPosition);
       
        //A PARTIR DE AQUI PARA ABAJO YA ESTA BIEN
        if(correctsAns === allContestants[plr].answer){
          fill("Green");
        }
        else{
          fill("red");
        }

    }
  
    //AQUI AFUERA DEL FOR DECLARAS UNA VARIABLE 
    
    //PARA LA POSCION Y EL HUEQUITO QUE SE NECESITA AL MOSTRARLOS
  }
    //escribe la condición para comprobar si contestantInfor no está indefinido 

    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    //CON ESTO MUESTRAS EN FORMA DE LISTA A LOS DOS JUGADORES Y LA RESPUESTA QUE DIERON
    text(allContestants[plr].name + ": " + allContestants[plr].answer, positionX, position);
  }

}
