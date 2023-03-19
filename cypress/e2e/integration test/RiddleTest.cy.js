import RiddlePage from "../pages/RiddlePage.cy"
const riddle = new RiddlePage();
describe ('Riddle page', ()=>{

   beforeEach(()=>{
    //cy.log("config:" + JSON.stringify(Cypress.config()));
    //alert("this_variable");
    //cy.log("baseURL:" + Cypress.config('baseURL')); 
   // cy.visit(Cypress.config('baseURL'));
   cy.visit("http://localhost:19006/");
    });

    it('displays the  title', ()=>{
        riddle.elements.titleName()
        .should("have.text", "Riddles");   
     })

    it("Next button should go to the next page" ,()=> {
        riddle.clickNextButton();
        riddle.elements.riddleText()
        .should("have.text", "What has keys but can't open locks?");
    })

    it("Previous button should go to the previous page" ,()=> {
        riddle.clickPreviousButton();
        riddle.elements.riddleText()
        .should("have.text", "What has four legs in the morning, two legs in the afternoon, and three legs in the evening?");
    })


    it("Tap to Answer " ,()=> {
        riddle.clickAnswerButton();
        riddle.elements.answerText()
        .should("have.text", "Charcoal");
    })

    it("Tap the Answer button again" ,()=> {
        riddle.clickAnswerButton();
        riddle.clickAnswerButton();
        riddle.elements.hideAnswerText()
        .should("have.text", "Tap for Answer");
    })
})