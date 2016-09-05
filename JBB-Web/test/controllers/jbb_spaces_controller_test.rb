require 'test_helper'

class JbbSpacesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get jbb_spaces_new_url
    assert_response :success
  end

end
