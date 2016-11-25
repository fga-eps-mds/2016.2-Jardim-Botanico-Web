Feature: create visit
	In order to create a visit
	As a user
	I want to create the visit in Jardim Botânico Web

Scenario: To create a sucessful visit
	Given I have accessed the login page
	And I already have an account 
	When I try to login with email and password
	And I am redirected to home page
	And I am on the create visit page
	#And I fill the new visit form
	#And I click in 'Cadastrar'
	#Then I should see "Solicitação de visita efetuada com sucesso!"

Scenario: To create a sucessful visit in text box
	Given I have accessed the login page
	And I already have an account 
	When I try to login with email and password
	And I am redirected to home page
	And I am on the create visit page in text box
	#And I fill the new visit form
	#And I click in 'Cadastrar'
	#Then I should see "Solicitação de visita efetuada com sucesso!"

