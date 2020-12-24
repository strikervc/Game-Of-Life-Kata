import { Game } from '../src/game';
import { expect } from 'chai';

describe ('test 01', () => {
    it('should correctly return the initial cell configuration.', function(){
        const startingBoard = [
            [0, 0, 1, 0],
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
        ]
        expect(new Game(startingBoard).board).to.equal(startingBoard);

    })
})

describe ('test 02', () => {
    it('a cell alive should die as if by underpopulation if is in the middle and it have fewer than two live neighbours.', function(){
        const startingBoard = [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]

        const nextStepBoard = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
        const game = new Game(startingBoard)
        game.step()
        expect(game.board).to.equal(nextStepBoard);

    })
})