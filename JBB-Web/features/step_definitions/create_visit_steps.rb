Given(/^I am on the create visit page$/) do
  visit('/visitations/new')
end

When(/^I fill the new visit form$/) do
   

   select('2018', from: 'visitation_date_1i')
   select('2018', from: 'visitation_date_1i')
   select('Novembro', from: 'visitation_date_2i')
   select('11', from: 'visitation_date_3i')
   select('Educação', from: 'visitation_objective')
   select('Trilhas', from: 'visitation_spaces')
   fill_in 'visitation_visitants_amount', :with => "30"
   fill_in 'visitation_groups_age', :with => "15"
   fill_in 'visitation_visitants_paying', :with => "5"
   choose('visitation_visitation_type_pessoa_fisica')
   choose('visitation_has_guide_true')
   fill_in 'visitation_description', :with => "Teste descrição"
  
end

When(/^I click in 'Cadastrar'$/) do
   click_button('registration')
end

When(/^I am on the create visit page in text box$/) do
  click_on('Agende uma educação ambiental')
end

When(/^I press 'Educação Ambiental'$/) do
  page.find('.education').click
end
