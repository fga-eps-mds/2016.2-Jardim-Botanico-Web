When(/^I fill the new user form$/) do
   fill_in 'user_name', :with => "Nome Sobrenome"
   fill_in 'user_email', :with => "email@email.com"
   fill_in 'user_password', :with => "12345"
   fill_in 'cpf', :with => "04048543113"
   fill_in 'phone', :with => "6199999999"
   select('Masculino', from: 'user_gender')
   fill_in 'date', :with => "01011991"
end

When(/^click on the 'Cadastrar' button$/) do
    click_button('registration')
end

Then(/^it should create a user$/) do
    page.should have_content ('Nome Sobrenome')
end
