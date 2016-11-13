Given(/^I am on the home page$/) do
  visit '/pt/'
end

Then(/^I should see "([^"]*)"$/) do |text|
  page.should have_content text
end

When(/^I click in the button "([^"]*)"$/) do |arg1|
  visit '/pt/#about'
end

Then(/^I see more information about JBB$/) do
  page.should have_content text
end

Then(/^I see the calendar about events$/) do
  page.should have_content text
end

Then(/^I see the calendar about environmental educations$/) do
  page.should have_content text
end

Then(/^I go to the page '\/visitations\/new'$/) do
  visit '/pt/visitations/new'
end
