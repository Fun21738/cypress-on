const cypress = require("cypress");
const { describe } = require("mocha");

describe('verify title-positive',()=>{
  it('test1',() => {
    //steps
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.title().should('eq','OrangeHRM')
  })
  it('verify title-negative test',()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM123')
  })




})





// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })