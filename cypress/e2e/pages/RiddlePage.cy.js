class RiddlePage {

elements = {
    titleName : () => cy.get('[data-testID="txtTitle"]'),
    nextButton:() => cy.get('[data-testID="btnNext"]'),
    previousButton:() => cy.get('[data-testID="btnPrevious"]'),
    answerButton:() => cy.get('[data-testID="btnAnswer"]'),
    riddleText : () => cy.get('[data-testID="txtQuestion"]'),
    answerText : () => cy.get('[data-testID="txtAnswer"]'),
    hideAnswerText:() => cy.get('[data-testID="txtTapForAnswer"]')
}

    clickNextButton() {
    this.elements.nextButton().click();
    }

    clickPreviousButton() {
    this.elements.previousButton().click();
    }

    clickAnswerButton(){
    this.elements.answerButton().click();
    }

    



}

export default RiddlePage