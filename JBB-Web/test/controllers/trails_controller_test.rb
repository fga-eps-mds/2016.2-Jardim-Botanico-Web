require 'test_helper'

class TrailsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get trails_new_url
    assert_response :success
  end

end
