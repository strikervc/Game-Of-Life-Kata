export class Game {
    board: Array<Array<number>>

    step() {
        this.board = this.board.map(row => {
            return row.map(c => 0)
            
        })

    }
    
    constructor (board: Array<Array<number>>){
        this.board = board        
    }

   

}