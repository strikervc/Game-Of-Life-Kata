export class Game {
    board: Array<Array<number>>

    constructor(board: Array<Array<number>>){
        this.board = board
    }

    step () {
        this.board = this.board.map(row =>{
            return row = 1
        })
    }
}