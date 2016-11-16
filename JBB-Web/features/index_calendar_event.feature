Feature: viewer calendar event index
  In order to view the calendar event 
  As a user
  I want to see the calendar event
  
  Scenario: To view the month calendar event page
  	Given I am on the home page
  	When I press 'Evento'
  	Then I should see "Calendário de Eventos"	
  
  Scenario: To view the week calendar event page
  	Given I am on the home page
  	When I press 'Evento'
  	And I press 'Pesquisar por semana'
  	Then I should see "Calendário de Eventos"	

  Scenario: To back for home page
  	Given I am on the home page
  	When I press 'Evento'
  	And I press 'Voltar'
  	Then I should see "Bem vindos ao Jardim Botânico"

  Scenario: To back for month calendar event page
  	Given I am on the home page
  	When I press 'Evento'
  	And I press 'Pesquisar por semana'
  	And I press 'Voltar'
  	Then I should see "Bem vindos ao Jardim Botânico" 