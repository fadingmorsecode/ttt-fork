const cells = document.querySelectorAll(".Cell")

 
const startBTN =document.querySelector(".startBTN")

const P1Name = document.querySelector(".P1Name")

const P2Name = document.querySelector(".P2Name")

 


startBTN.addEventListener("click",()=>{
    if(P1Name.value==="" || P2Name.value===""){
       //if the user didnt enter a name dont start the game
    }
    
    else{
       document.querySelector(".PlayerNamesContainer").style.display="none"
       document.querySelector(".startBTNContainer").style.display="none"
       document.querySelector(".gameInfo").style.display=""
       document.querySelector(".boardContainer").style.display=""
       document.querySelector(".playerTurn").textContent=`${P1Name.value} must select a cell!`
       document.querySelector(".P1Score").textContent=`${P1Name.value} score: `
       document.querySelector(".P2Score").textContent=`${P2Name.value} score: `
  
    }
})
 


 
    
    

 


  


class Player{
    #score=0;
    Turn=0
    constructor(Name,Marker,Choices,playerScore){
        this.Name=Name.value;
        this.Marker=Marker;
        this.Choices=Choices;
        this.playerScore=playerScore
    }

      

    increaseScore(){
        this.#score+=1;
    }

    getScore(){
      return  this.#score;
    }

    IncreaseTurn(){
        this.Turn+=1
    }
}

// End of player class

class GameRule{
      CellNumber=0
    constructor(WinningCondition,PlayerChoices){
        this.WinningCondition=WinningCondition;
        this.PlayerChoices=PlayerChoices;
    }
}

//End of GameRule class


class GameBoard{
    constructor(player1,player2,gameRule,playerTurn){
        this.player1=player1;
        this.player2=player2;
        this.gameRule=gameRule
        this.playTurn=playerTurn
   
    }

    playTurn(cell){
         if(this.gameRule.PlayerChoices.includes(cell.getAttribute("value"))){
            //do nothing
            // here this code is just to prevent the player from placing a marker on an already taken location
         }

         else{
        
         
         if(player1.Turn===player2.Turn){
            player1.IncreaseTurn()
            this.XTurn(player1,cell)
            GameBoard.playTurn.textContent=`${player2.Name.value} must select a cell!`
         }

         else{
            player2.IncreaseTurn()
            this.OTurn(player2,cell)
            GameBoard.playTurn.textContent=`${player1.Name.value} must select a cell!`
         }
        }
        
                   
    }


    XTurn(player1,cell){
        player1.Choices.push(cell.getAttribute("value"))
        this.gameRule.PlayerChoices.push(cell.getAttribute("value"))    
        cell.append(player1.Marker)

        this.CheckOWin()
        
    }


    OTurn(player2,cell){
        let x=player2.Marker
        player2.Choices.push(cell.getAttribute("value"))
        this.gameRule.PlayerChoices.push(cell.getAttribute("value"))
        cell.append(player2.Marker)
        this.CheckOWin()
        
    }


    CheckXWin(){
     
    }

    CheckOWin(){

    }

}

//end of gameboard class



//Inilizating the objects

const player1 = new Player(P1Name,document.createElement("img"),[],document.querySelector(".P1Score"))
    player1.Marker.src="symbol-x.svg"
    


const player2 = new Player(P2Name,document.createElement("img"),[],document.querySelector(".P2Score"))
    player2.Marker.src="symbol-o.svg"

const gameRule = new GameRule([[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]],[])


const gameBoard = new GameBoard(player1,player2,gameRule,document.querySelector(".playerTurn"))

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
         gameBoard.playTurn(cell)
    })
})


//


 

 


 
 
 

 

 

 

 


 



 
   

  


 





 

 

 