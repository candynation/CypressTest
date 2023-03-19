import TicTacToePage from "../pages/TicTacToePage.cy"
const ticTacToe = new TicTacToePage();
describe ('TicTacToe page', ()=>{

    beforeEach(()=>{
        //cy.log("config:" + JSON.stringify(Cypress.config()));
        //alert("this_variable");
        //cy.log("baseURL:" + Cypress.config('baseURL')); 
       // cy.visit(Cypress.config('baseURL'));
         cy.visit('http://tic-tac-toe.candychansgames.com/');
      });
    

    it('displays the  title', ()=>{
       ticTacToe.getPageTitle()
       .should("have.text", "Tic Tac Toe");   
    })

    it('displays player X text', ()=>{
        ticTacToe.getPlayerXText()
        .should("have.text", "Player X");   
     })
 
    it('displays player O text', ()=>{
        ticTacToe.getPlayerOText()
        .should("have.text", "Player O");   
     })

     it('displays player X score', ()=>{
        ticTacToe.getPlayerXScoreText()
        .should("have.text", "0");   
     })

     it('displays player O score', ()=>{
        ticTacToe.getPlayerOScoreText()
        .should("have.text", "0");   
     })

     it('displays Play with Friend button', ()=>{
        ticTacToe.getPlayWithFriendComputerButton()
        .should("have.text", "Play with Friend");   
     })

     it('displays Restart button', ()=>{
        ticTacToe.getRestartButton()
        .should("have.text", "Restart");   
     })

     it('displays Reset button', ()=>{
        ticTacToe.getResetButton()
        .should("have.text", "Reset");   
     })

     it('displays 9 tiles for tic tac toe', ()=>{
       ticTacToe.getAllXOTiles().should("have.length",9);
     })

     it('displays X on the board when tappig on a tile', ()=>{
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains', 'X');
      })
      /*
      it('Game restart after tapping on Restart button', ()=>{
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.getBlankXOTile().should("have.length",3);
         ticTacToe.getRestartButton().click();
         ticTacToe.getBlankXOTile().should("have.length",9);
      })*/

      it('Game restart after tapping on Restart button', ()=>{
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.getBlankXOTile().should("have.length",3);
         ticTacToe.getRestartButton().click();
         ticTacToe.getBlankXOTile().should("have.length",9);
      })
      
      it('Game with friend mode tapping Play With Friend button', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','X');
         ticTacToe.getBlankXOTile().should("have.length",8);
         ticTacToe.findXOTile(2).click();
         ticTacToe.findXOTile(2).invoke('text').should('contains','O');
         ticTacToe.getBlankXOTile().should("have.length",7);
      })
      
      it('Play with computer mode tapping Play With computer button', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.getPlayWithFriendComputerButton().invoke('text').should('contains', 'Play with Computer');
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.getPlayWithFriendComputerButton().invoke('text').should('contains', 'Play with Friend');
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','X');
         ticTacToe.getAllXOTiles().filter(':contains("X")').should('have.length', 1);
         ticTacToe.findFirstBlankXOTileToClick().click();
         ticTacToe.getAllXOTiles().filter(':contains("X")').should('have.length', 2);
         
      })

      it('Game with friend player X win', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','X');
         ticTacToe.findXOTile(5).click();
         ticTacToe.findXOTile(5).invoke('text').should('contains','O');
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains','X');
         ticTacToe.findXOTile(6).click();
         ticTacToe.findXOTile(6).invoke('text').should('contains','O');
         ticTacToe.findXOTile(8).click();
         ticTacToe.findXOTile(8).invoke('text').should('contains','X');
         ticTacToe.getPlayerXScoreText().should('have.text','1');
         ticTacToe.getPlayerOScoreText().should('have.text','0');
         ticTacToe.getLoseWinTxt().should('have.text', 'Player X Win');
         ticTacToe.getAllXOTiles().invoke('attr', 'aria-disabled','true').should('have.length',9);
      })

      it('Game with friend player O win', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains','X');
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','O');
         ticTacToe.findXOTile(1).click();
         ticTacToe.findXOTile(1).invoke('text').should('contains','X');
         ticTacToe.findXOTile(2).click();
         ticTacToe.findXOTile(2).invoke('text').should('contains','O');
         ticTacToe.findXOTile(3).click();
         ticTacToe.findXOTile(3).invoke('text').should('contains','X');
         ticTacToe.findXOTile(6).click();
         ticTacToe.findXOTile(6).invoke('text').should('contains','O');
         ticTacToe.getPlayerOScoreText().should('have.text','1');
         ticTacToe.getPlayerXScoreText().should('have.text','0');
         ticTacToe.getLoseWinTxt().should('have.text', 'Player O Win');
         ticTacToe.getAllXOTiles().invoke('attr', 'aria-disabled','true').should('have.length',9);
      })

      it('Game with friend Tie game', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(2).click();
         ticTacToe.findXOTile(2).invoke('text').should('contains','X');
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains','O');
         ticTacToe.findXOTile(1).click();
         ticTacToe.findXOTile(1).invoke('text').should('contains','X');
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','O');
         ticTacToe.findXOTile(3).click();
         ticTacToe.findXOTile(3).invoke('text').should('contains','X');
         ticTacToe.findXOTile(5).click();
         ticTacToe.findXOTile(5).invoke('text').should('contains','O');
         ticTacToe.findXOTile(8).click();
         ticTacToe.findXOTile(8).invoke('text').should('contains','X');
         ticTacToe.findXOTile(7).click();
         ticTacToe.findXOTile(7).invoke('text').should('contains','O');
         ticTacToe.findXOTile(6).click();
         ticTacToe.findXOTile(6).invoke('text').should('contains','X');
         ticTacToe.getPlayerOScoreText().should('have.text','0');
         ticTacToe.getPlayerXScoreText().should('have.text','0');
         ticTacToe.getLoseWinTxt().should('have.text', 'Tie');
         ticTacToe.getAllXOTiles().invoke('attr', 'aria-disabled','true').should('have.length',9);
      })

      it('Reset button will reset the game', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains','X');
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','O');
         ticTacToe.findXOTile(1).click();
         ticTacToe.findXOTile(1).invoke('text').should('contains','X');
         ticTacToe.findXOTile(2).click();
         ticTacToe.findXOTile(2).invoke('text').should('contains','O');
         ticTacToe.findXOTile(3).click();
         ticTacToe.findXOTile(3).invoke('text').should('contains','X');
         ticTacToe.findXOTile(6).click();
         ticTacToe.findXOTile(6).invoke('text').should('contains','O');
         ticTacToe.getPlayerOScoreText().should('have.text','1');
         ticTacToe.getPlayerXScoreText().should('have.text','0');
         ticTacToe.getResetButton().click();
         ticTacToe.getPlayerOScoreText().should('have.text','0');
         ticTacToe.getPlayerXScoreText().should('have.text','0');
         ticTacToe.getBlankXOTile().should('have.length',9);
      })

      it('Game with friend Tie game', ()=>{
         ticTacToe.getPlayWithFriendComputerButton().click();
         ticTacToe.findXOTile(2).click();
         ticTacToe.findXOTile(2).invoke('text').should('contains','X');
         ticTacToe.findXOTile(0).click();
         ticTacToe.findXOTile(0).invoke('text').should('contains','O');
         ticTacToe.findXOTile(1).click();
         ticTacToe.findXOTile(1).invoke('text').should('contains','X');
         ticTacToe.findXOTile(4).click();
         ticTacToe.findXOTile(4).invoke('text').should('contains','O');
         ticTacToe.findXOTile(3).click();
         ticTacToe.findXOTile(3).invoke('text').should('contains','X');
         ticTacToe.findXOTile(5).click();
         ticTacToe.findXOTile(5).invoke('text').should('contains','O');
         ticTacToe.findXOTile(8).click();
         ticTacToe.findXOTile(8).invoke('text').should('contains','X');
         ticTacToe.findXOTile(7).click();
         ticTacToe.findXOTile(7).invoke('text').should('contains','O');
         ticTacToe.findXOTile(6).click();
         ticTacToe.findXOTile(6).invoke('text').should('contains','X');
         ticTacToe.getPlayerOScoreText().should('have.text','0');
         ticTacToe.getPlayerXScoreText().should('have.text','0');
         ticTacToe.getRestartButton().should('have.text', 'Play Again');
         ticTacToe.getRestartButton().click();
         ticTacToe.getBlankXOTile().should('have.length',9);

      })





})