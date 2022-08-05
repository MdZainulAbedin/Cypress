 
describe('My sixth Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab').then(function(el)
    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)
    //rahulshettyacademy.com/seleniumpractise

})
 
 
})