import { Game } from '../src/game';
import { expect } from 'chai';

describe ('test 01', () => {
    it('should return correctly the initial cell configuration', function(){
        const startingBoard = [
            [0, 0, 0],
            [1, 0, 0],
        ]
        expect(new Game(startingBoard).board).to.equal(startingBoard);
    })
})

describe ('test 02', () => {
    it('an alive cell living in the middle should die if it have less than two live neighbours', function(){
        const startingBoard = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]
        const game = new Game(startingBoard)
        game.step()
        expect(game.board).to.equal([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    })
})

describe ('test 03', () => {
    it('an alive cell living in the top-middle should still alive to the next generation if it have two live neighbours.', function(){
        const startingBoard = [
            [1, 1, 1],
            [0, 0, 0]
        ]
        const game = new Game(startingBoard)
        game.step()
        expect(game.board).to.equal([[0, 1, 0], [0, 0, 0]]);
    })
})

describe ('test 04', () => {
    it('an alive cell living in the middle should die if it have four or more live neighbours.', function(){
        const startingBoard = [
            [1, 0, 1],
            [1, 1, 1],
            [0, 0, 0],
        ]
        const game = new Game(startingBoard)
        game.step()
        expect(game.board).to.equal([[1, 0, 1], [1, 0, 1], [0, 0, 0]]);
    })
})

describe ('test 05', () => {
    it('a dead cell in the middle should becomes alive if it have three live neighbours.', function(){
        const startingBoard = [
            [1, 0, 1],
            [0, 0, 0],
            [0, 0, 1],
        ]
        const game = new Game(startingBoard)
        game.step()
        expect(game.board).to.equal([[0, 0, 0], [0, 1, 0], [0, 0, 0]]);
    })
})


