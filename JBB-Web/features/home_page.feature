Feature: home page
	In order to read the page
	As a user
	I want to see the home page of Jardim Botanico Web

Scenario: View home page
	Given I am on the home page
	Then I should see "Bem vindos ao Jardim Botânico"

Scenario: Click on the button the know more about us
	Given I am on the home page
	When I click in the button "saiba mais sobre nós!"
	Then I see more information about JBB

Scenario: Click on the button Event
	Given I am on the home page
	When I click in the button "Evento"
	Then I see the calendar about events

Scenario: Click on the button Visit
	Given I am on the home page
	When I click in the button "Visita"
	Then I see the calendar about visits

Scenario: Click on the link for schedule a Visit
	Given I am on the home page
	When I click in the button "Agende uma visita"
	Then I go to the page '/visitations/new'
