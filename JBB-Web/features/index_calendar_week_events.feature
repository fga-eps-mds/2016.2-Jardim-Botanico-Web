Feature: viewer calendar week event index
  In order to view the week calendar event 
  As a user
  I want to see the week calendar event
  
  Scenario: To view the week calendar event page
  	Given I am on the home page
  	When I press 'Evento'
  	And I press 'Pesquisar por semana'
  	Then I should see "Calendário de Eventos"	