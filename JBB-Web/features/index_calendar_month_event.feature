Feature: viewer calendar month event index
  In order to view the month calendar event 
  As a user
  I want to see the month calendar event
  
  Scenario: To view the month calendar event page
  	Given I am on the home page
  	When I press 'Evento'
  	Then I should see "Calendário de Eventos"	