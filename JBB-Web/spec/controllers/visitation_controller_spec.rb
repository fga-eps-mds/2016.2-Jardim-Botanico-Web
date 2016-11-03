require "rails_helper"

RSpec.describe VisitationsController, type: :controller do
  before do
    @user = FactoryGirl.create(:user)
    sign_in(@user)
    @visitation = FactoryGirl.create(:visitation, user_id: @user.id, id: 5)
  end

  describe "GET new" do
    it "should GET a new visitation" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST create" do
  	it "should successfull create a visitation" do
  		post :create, :visitation => {  #PRECISO SABER O PORQUE ISSO ACONTECE
        :visitants_paying => 200
			}
      expect(response).to have_http_status(:success)
      end
  end

  describe "Get cancel visitation user" do
  	it "should successfull cancel a visitation" do
  		get :cancel_visitation_user, :id => 5
      @visitation.reload

      expect(@visitation.status).to eq("Cancelado pelo usuario")
    end
  end

  # 100% COVERAGE
  describe "Show visits" do
    it "should display all visits" do
      get :show
      expect(response).to have_http_status(:success)
    end
  end

  describe "Show visits to users" do
    it "should display all user's visitation" do
      get :show_user
      expect(response).to have_http_status(:success)
    end
  end

  describe "Index calendar month" do
    it "should set visitations with status agendado and has guide true at the calendar" do
      get :index_calendar_month
      expect(response).to have_http_status(:success)
    end
  end
end
