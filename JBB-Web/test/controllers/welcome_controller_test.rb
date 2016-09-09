require 'test_helper'

class WelcomeControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get welcome_new_url
    assert_response :success
  end

end
