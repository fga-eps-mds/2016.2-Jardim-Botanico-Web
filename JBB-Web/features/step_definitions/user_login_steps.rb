Given(/^I have accessed the login page$/) do
  visit '/sign_in'
end

Given(/^I already have an account$/) do
  @user = User.new
  @user.name = 'Nome Sobrenome'
  @user.email = 'gustavo@gmail.com'
  @user.password = '123456'
  @user.cpf = '02954492171'
  @user.gender = 'Masculino'
  @user.birth = '01011991'
  @user.save
end

When(/^I try to login with a wrong email$/) do
  @user = User.new
  @user.name = 'Nome Sobrenome'
  @user.email = 'gustavo'
  @user.password = '123456'
  @user.cpf = '02954492171'
  @user.gender = 'Masculino'
  @user.birth = '01011991'
  @user.save
end

When(/^I try to login with a wrong password$/) do
  @user = User.new
  @user.name = 'Nome Sobrenome'
  @user.email = 'gustavo@gmail.com'
  @user.password = '123'
  @user.cpf = '02954492171'
  @user.gender = 'Masculino'
  @user.birth = '01011991'
  @user.save
end


Then(/^I am redirected to the login page$/) do
  visit '/sign_in'
end
