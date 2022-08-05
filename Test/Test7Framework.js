/// <reference types="Cypress" />
describe ('My test Suite', function()

{

    before(function() {
        // runs once before all test in the block
        cy.fixture('example').then(function(data)
    {
        this.data=data
})
})
 it('My Test case', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    cy.get('select').select(this.data.gender)

})

}) 