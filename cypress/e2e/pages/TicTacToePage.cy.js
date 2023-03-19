class TicTacToePage {
    
    getPageTitle() {
        return cy.get('[data-testID="txtTitle"]');
    }

    getPlayerXText() {
        return cy.get('[data-testID="txtPlayerX"]');
    }

    getPlayerOText() {
        return cy.get('[data-testID="txtPlayerO"]');
    }
    getPlayerXScoreText() {
        return cy.get('[data-testID="txtPlayerXScore"]');
    }

    getPlayerOScoreText() {
        return cy.get('[data-testID="txtPlayerOScore"]');
    }

    getPlayWithFriendComputerButton() {
        return cy.get('[data-testID="btnComputerPlayer"]');
    }

    getRestartButton() {
        return cy.get('[data-testID="btnRestart"]');
    }

    getResetButton() {
        return cy.get('[data-testID="btnReset"]');
    }
    
    getAllXOTiles(){
        return cy.get('[data-testID*=btnXO]');

    }

    findXOTile(number){
        return cy.get('[data-testID=btnXO'+number+']');

    }

    getBlankXOTile(){
        return this.getAllXOTiles().find(':empty');
    }

    findFirstBlankXOTileToClick(){
        return this.getBlankXOTile().parent().first();
    }

    getLoseWinTxt(){
        return cy.get('[data-testID=txtWinLose]');
    }
}
export default TicTacToePage