require "rails_helper"

RSpec.describe UsersController, type: :controller do

  before do
    @user = FactoryGirl.create(:user)
  end

  describe "GET new" do
    it "should GET a new user" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST create" do
  	it "should successfull create a user" do
  		post :create, :user => {
        :email=>"testuser@email.com",
        :name=>"Test User",
        :cpf=>"041.861.791.07",
        :is_employee=>true,
        :gender=>"Masculino",
        :birth=>"16/11/1994",
        :password=>"nomatch",
        :password_digest=>"mUc3m00RsqyRe"
			}
      expect(response).to have_http_status(:success)

      end
  end
end
