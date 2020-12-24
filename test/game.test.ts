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