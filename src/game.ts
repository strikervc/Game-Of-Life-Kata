export class Game {
    board: Array<Array<number>>
    
    constructor(board: Array<Array<number>>){
        this.board = board
    }

    step () {
       this.board = this.board.map((row, cellY) => {
           return row.map((cell, cellX) => {
               let NLN = 0
               for (let y = cellY - 1; y <= cellY + 1; y++) {
                   for (let x = cellX - 1; x <= cellX + 1; x++) {
                       if (y === cellY && x === cellX) continue
                       NLN += (this.board?.[y]?.[x] || 0)
                   }
               }
               if (cell && [2,3].includes(NLN)) return 1
               

               if (!cell && NLN ===3) return 1
               return 0
           })
       })
    }
}