When(/^I try to login with email and password$/) do
  fill_in 'user_email', :with => @user.email
  fill_in 'user_password', :with => @user.password
  click_button('entrar')
end

Then(/^I am redirected to home page$/) do
  have_content(@user.name)
end

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
  fill_in 'user_email', :with => "adailson@gmail.com"
  fill_in 'user_password', :with => @user.password
  click_button('entrar')
end

When(/^I try to login with a wrong password$/) do
  fill_in 'user_email', :with => @user.email
  fill_in 'user_password', :with => "1234567"
  click_button('entrar')
end


Then(/^I get the error message$/) do
  page.should have_content ('Email ou senha inválidos')
end
