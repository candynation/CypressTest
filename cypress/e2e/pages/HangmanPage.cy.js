
class HangmanPage {
 
    getPageTitle() {
        return cy.get('[data-testID="txtTitle"]');
    }
   
    getLetter(text){
       
        return cy.get('[data-testID=letter'+text+']');
    }
    getImages(number){
       
        return cy.get('[data-testID=hangmanImages'+number+']');
    }
  
    getRestartButton(){
        return cy.get('[data-testID="btnRestart"');
    }

    clickRestartButton(){
        this.getRestartButton.click();
    }

    getShowAnswerButton(){
       
        return cy.get('[data-testID="btnShowAnswer"');
    }

    getNextWordButton(){
       
       return cy.get('[data-testID="btnNextWord"');
    }
    getWord(){
       
        return cy.get('[data-testID="txtWord"');
    }
    getGameOverWinText(){
       
       return cy.get('[data-testID="txtGameOver"');
    }
}
    export default HangmanPage