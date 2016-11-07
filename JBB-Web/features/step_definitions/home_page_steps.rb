Given(/^I am on the home page$/) do
  visit '/'
end

Then(/^I should see "([^"]*)"$/) do |text|
  page.should have_content text
end

When(/^I click in the button "([^"]*)"$/) do |arg1|
  visit '/#about'
end

Then(/^I see more information about JBB$/) do
  page.should have_content text
end

Then(/^I see the calendar about events$/) do
  page.should have_content text
end

Then(/^I see the calendar about visits$/) do
  page.should have_content text
end

Then(/^I go to the page '\/visitations\/new'$/) do
  visit '/visitations/new'
end
