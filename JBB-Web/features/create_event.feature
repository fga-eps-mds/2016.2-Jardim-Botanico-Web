Feature: create event
	In order to create a event
	As a user
	I want to create the event in Jardim Botânico Web

Scenario: To create a sucessful event
	Given I have accessed the login page
	And I already have an account 
	When I try to login with email and password
	And I am redirected to home page
	And I am on the create event page
	#And I fill the new event form
	#And I click in 'Cadastrar'
	#Then I should see "Solicitação de evento efetuada com sucesso!"

Scenario: To create a sucessful event in text box
	Given I have accessed the login page
	And I already have an account 
	When I try to login with email and password
	And I am redirected to home page
	And I am on the create event page in text box
	#And I fill the new event form
	#And I click in 'Cadastrar'
	#Then I should see "Solicitação de evento efetuada com sucesso!"
