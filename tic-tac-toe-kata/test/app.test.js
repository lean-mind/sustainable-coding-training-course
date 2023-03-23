/**
 * @jest-environment jsdom
 */

const createGame = require("../src/app");

describe("the tic tac toe game", () =>{
    it("should find the winner", () => {
        const board = ["X","X","X","","","","","",""];
        const game = createGame(board);
        expect(game.check_line(0,1,2)).toBeTruthy();
    });
});
