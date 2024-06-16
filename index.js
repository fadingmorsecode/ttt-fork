const cells = document.querySelectorAll(".Cell")

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        gameBoard.playTurn(cell)
    })
})



class Player{
    #score=0;
    Turn=0
    constructor(Name,Marker,Choices){
        this.Name=Name;
        this.Marker=Marker;
        this.Choices=Choices;
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

class GameRule{
      CellNumber=0
 
    constructor(WinningCondition,PlayerChoices){
        this.WinningCondition=WinningCondition;
        this.PlayerChoices=PlayerChoices;
    }
}


class GameBoard{
    constructor(player1,player2,gameRule){
        this.player1=player1;
        this.player2=player2;
        this.gameRule=gameRule
   
    }

    playTurn(cell){
         if(this.gameRule.PlayerChoices.includes(cell.getAttribute("value"))){
            //do nothing
            // here this code is just to preven the player from placing a marker on an already taken location
         }

         else{
        
         
         if(player1.Turn===player2.Turn){
            player1.IncreaseTurn()
            this.XTurn(player1,cell)
         }

         else{
            player2.IncreaseTurn()
            this.OTurn(player2,cell)
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
        for(let i=0;i<this.gameRule.WinningCondition.length;i++){
            
        }
    }

    CheckOWin(){

    }

}

 
 

const player1 = new Player("test",document.createElement("img"),[])
    player1.Marker.src="symbol-x.svg"
    


const player2 = new Player("test2",document.createElement("img"),[])
    player2.Marker.src="symbol-o.svg"

const gameRule = new GameRule([[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]],[])


const gameBoard = new GameBoard(player1,player2,gameRule)


 

 

 

 


 



 
   

  


 





 

 

 