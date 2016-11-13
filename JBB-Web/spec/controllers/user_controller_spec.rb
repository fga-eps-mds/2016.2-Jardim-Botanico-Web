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

  describe "destroy" do
    it "deletes users" do
      sign_in(@user)
      get :destroy
      expect(session[:user_id]).to be(nil)
      expect(response).to redirect_to("/#{I18n.locale}/")
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

  describe "GET edit" do
    it "should GET a edit user profile" do
      get :edit, :id => @user.id
      expect(response).to redirect_to("/#{I18n.locale}/")
    end
  end

  #INDEX
  describe "Get show" do  #Dont test PDF
    it "should show user" do
      get :show, :id => @user.id
    end
  end

  describe "PUT update/:id" do
  let(:attr) do
    {
      :email=>"nicacionetobsb@gmail.com",
      :name=>"Second User",
      :cpf=>"041.861.791.07",
      :is_employee=>true,
      :gender=>"Masculino",
      :birth=>"16/11/1994",
      :password=>"nomatch",
      :password_digest=>"mUc3m00RsqyRe"
    }
  end

  before(:each) do
    put :update, :id => @user.id, :user => attr
    @user.reload
  end

  it { expect(response).to redirect_to(@user) }
  it { expect(@user.email).to eql attr[:email] }
  it { expect(@user.name).to eql attr[:name] }
  it { expect(@user.cpf).to eql attr[:cpf] }
  it { expect(@user.is_employee).to eql attr[:is_employee] }
  it { expect(@user.gender).to eql attr[:gender] }
  it { expect(@user.password).to eql attr[:password] }

end

  describe "my_request" do
    it "current user" do
      sign_in(@user)
      @user = current_user
    end
  end



end
