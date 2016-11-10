Feature: user login
	In order to access some specific contents
	As a user
	I want to login with my account

Scenario: login with wrong email
	Given I have accessed the login page
	And I already have an account
	When I try to login with a wrong email
	Then I am redirected to the login page

Scenario: login with wrong password
	Given I have accessed the login page
	And I already have an account
	When I try to login with a wrong password
	Then I am redirected to the login page