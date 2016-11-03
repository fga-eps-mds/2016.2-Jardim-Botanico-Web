Feature: create user
  In order to crate a user
  As a user
  I want to registration on this website
  
  Scenario: Create a new user
  	Given I am on the home page
  	When I click on the 'Cadastre-se'
  	And I fill the new user form
  	And click on the 'Cadastrar' button 
  	Then it should create a user