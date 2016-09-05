require 'test_helper'

class VisitationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get visitations_new_url
    assert_response :success
  end

end
