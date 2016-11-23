When(/^I am on the create event page$/) do
  visit('/events/new')

end

When(/^I fill the new event form$/) do
   select('2018', from: 'event_date_start_1i')
   select('Novembro', from: 'event_date_start_2i')
   select('11', from: 'event_date_start_3i')
   select('2018', from: 'event_date_end_1i')
   select('Novembro', from: 'event_date_end_2i')
   select('30', from: 'event_date_end_3i')
   fill_in 'event_jbb_space_requested', :with => "Espaço Jardim Botânico Web"
   fill_in 'event_estimated_public', :with => "100"
   choose('event_need_eletricity_sim')
   choose('event_need_water_sim')
   choose('event_need_clean_service_sim')
   fill_in 'event_other_informations', :with => "Espaço Jardim Botânico Web"
   choose('event_commercial_use_photos_sim')
   fill_in 'event_description', :with => "Descrição do Evento"
   fill_in 'event_name_institute', :with => "Nome da Instituição"
   fill_in 'event_institute_address', :with => "Endereço da Instituição"
   fill_in 'event_institute_cnpj', :with => "62.212.097/0001-53"
end

When(/^I am on the create event page in text box$/) do
  click_on('Agende um evento')
end

