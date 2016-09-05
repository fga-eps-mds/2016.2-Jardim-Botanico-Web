require 'test_helper'

class EmployeesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get employees_new_url
    assert_response :success
  end

end
