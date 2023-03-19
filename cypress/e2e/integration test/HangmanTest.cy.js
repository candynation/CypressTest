
import HangmanPage from "../pages/HangmanPage.cy"
const hangman = new HangmanPage();
describe ('Hangman page', ()=>{

   beforeEach(()=>{
    //cy.log("config:" + JSON.stringify(Cypress.config()));
    //alert("this_variable");
    //cy.log("baseURL:" + Cypress.config('baseURL')); 
   // cy.visit(Cypress.config('baseURL'));
   cy.visit("http://stickman.candychansgames.com/");
    });

    it('displays the  title', ()=>{
       hangman.getPageTitle()
       .should("have.text", "Stickman");   
    })

    it('letter is disable after click', () => {
        hangman.getLetter('a').click();
        hangman.getLetter('a').should('have.attr', 'aria-disabled', 'true');
        hangman.getLetter('b').click();
        hangman.getLetter('b').should('have.attr', 'aria-disabled', 'true');
    })

    // Check for hangman images 
    it('Check images appears correctly ', () => {
        hangman.getLetter('a').click();
        hangman.getImages(0).should('exist');
        hangman.getLetter('b').click();
        hangman.getImages(1).should('exist');
        hangman.getLetter('c').click();
        hangman.getImages(2).should('exist');
        hangman.getLetter('y').click();
        hangman.getImages(3).should('exist');
        hangman.getLetter('x').click();
        hangman.getImages(4).should('exist');
        hangman.getLetter('v').click();
        hangman.getImages(5).should('exist');
        hangman.getLetter('f').click();
        hangman.getImages(6).should('exist');
        hangman.getLetter('p').click();
        hangman.getImages(7).should('exist');
})

it('Check Next word button', () => {
       hangman.getNextWordButton().should('have.text', 'Next Word');

})

it('Click Next word button', () => {
    hangman.getWord()
            .invoke('text')
            .its('length')
            .should('be.gte', 5);
    hangman.getNextWordButton().click();
    hangman.getWord()
            .invoke('text')
            .its('length')
            .should('be.gte', 6);

})

it('Check Restart button', () => {
    hangman.getRestartButton().should('have.text', 'Restart');
})

it('Click Restart button', () => {
    hangman.getLetter('w').click();
    hangman.getLetter('a').click();
    hangman.getWord()
            .invoke('text')
            .should('contains', 'wa');
    hangman.getRestartButton().click();
    hangman.getWord()
            .invoke('text')
            .should('not.contains', 'wa');

})


it('Check for  letter is display after correct letter is guessed', () => {
    hangman.getLetter('w').click();
    hangman.getWord()
            .invoke('text')
            .should('contains','w');

    hangman.getLetter('a').click();
    hangman.getWord()
            .invoke('text')
            .should('contains','a');

    hangman.getLetter('e').click();
    hangman.getWord()
            .invoke('text')
            .should('not.contains','e');


})
it('Check for the Correct text after correct word is guessed', () => {
    hangman.getLetter('w').click();
    hangman.getLetter('a').click();
    hangman.getLetter('l').click();
    hangman.getLetter('t').click();
    hangman.getLetter('z').click();
    hangman.getGameOverWinText().should('have.text','Correct');

})

it('Check for  gameOver text after the game is lost', () => {
    hangman.getLetter('b').click();
    hangman.getLetter('c').click();
    hangman.getLetter('d').click();
    hangman.getLetter('e').click();
    hangman.getLetter('f').click();
    hangman.getLetter('g').click();
    hangman.getLetter('h').click();
    hangman.getGameOverWinText().should('have.text','Game Over');
})

it('Check for Show Answer button after the game is lost', () => {
    hangman.getLetter('b').click();
    hangman.getLetter('c').click();
    hangman.getLetter('d').click();
    hangman.getLetter('e').click();
    hangman.getLetter('f').click();
    hangman.getLetter('g').click();
    hangman.getLetter('h').click();
    hangman.getShowAnswerButton().should('have.text', 'Show Answer');
})

it('Click Show Answer button -> Answer is shown', () => {
    hangman.getLetter('b').click();
    hangman.getLetter('c').click();
    hangman.getLetter('d').click();
    hangman.getLetter('e').click();
    hangman.getLetter('f').click();
    hangman.getLetter('g').click();
    hangman.getLetter('h').click();
    hangman.getShowAnswerButton().click();
    hangman.getWord()
    .invoke('text')
    .should('not.contains', 'wazlt');

})

})

