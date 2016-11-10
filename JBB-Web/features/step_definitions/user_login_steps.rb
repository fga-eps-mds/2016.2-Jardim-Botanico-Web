Given(/^I have accessed the login page$/) do
  visit '/sign_in'
end

Given(/^I already have an account$/) do
  @user = User.create!
    {
  :name => "Nome Sobrenome", 
  :email => "email@email.com", 
  :password => "12345", 
  :cpf => "0404854113", 
  :phone => "6199999999",
  :gender => "Masculino",
  :birth => "01011991"
  }
end

When(/^I try to login with a wrong email$/) do
  pending # Write code here that turns the phrase above into concrete actions
end

Then(/^I am redirected to the login page$/) do
  pending # Write code here that turns the phrase above into concrete actions
end

When(/^I try to login with a wrong password$/) do
  pending # Write code here that turns the phrase above into concrete actions
end
