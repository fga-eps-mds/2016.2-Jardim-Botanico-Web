require "rails_helper"

RSpec.describe EventsController, type: :controller do
  before do
    @user = FactoryGirl.create(:user)
    sign_in(@user)
    @event = FactoryGirl.create(:event, user_id: @user.id, id: 5)
  end

  # #CREATE
  # describe "POST create" do  #Still dont test Mailer
  # 	it "should fail to create a event" do
  #
  # 		post :create, :event => {
  #       :status => "Agendado",
  #       :events_amount => "50",
  #       :groups_age => "20",
  #       :description => "Descrição da visitação",
  #       :jbb_space_requested => Array.new()
	# 		}
  #     expect(response).to have_http_status(:success)
  #   end
  #
  #   it "should sucessfully to create a event" do
  #     post :create, :event => {
  #       :user_id => @user.id,
  #       :date_start => "15/12/2016",
  #       :date_end => "15/12/2017",
  #       :time_start => "15:30",
  #       :time_end => "18:14",
  #       :status => "Agendado",
  #       :jbb_space_requested => ["Biblioteca da Natureza", "Casa de Chá", "Centro de Excelência do Cerrado", "Unidade de Permacultura"],
  #       :estimated_public => 100,
  #       :need_eletricity => true,
  #       :need_water => true,
  #       :description => "Parabéns pelo seu evento! ",
  #       :other_informations => "Outras informações",
  #       :jbb_response_to_request => "Sim",
  #       :price_payment => 2000,
  #       :name_institute => "Instituto aqui",
  #       :institute_address => "Lugar do instituto"
	# 		}
  #     end
  #
  # end


  #EMPLOYEE CHANGE STATUS
  describe "Employee change event status" do #Dont test if doesn't work
    it "should successfull refuse a event" do
      get :refuse_event_employee, :id => @event.id
      @event.reload
      expect(@event.status).to eq("Recusado por funcionario")
    end


    it "should successfull cancel a event" do
      get :cancel_event_employee, :id => @event.id
      @event.reload
      expect(@event.status).to eq("Cancelado por funcionario")
    end

    it "should successfull accept a event" do
      get :accept_event_employee, :id => @event.id
      @event.reload
      expect(@event.status).to eq("Agendado")
    end

    it "should fail to accept a event" do
      @event.estimated_public = -1
      @event.reload
      get :accept_event_employee, :id => @event.id
      # assert_equal 'Visitação não pode ser confirmada', flash[:warning]
    end
  end


  #DELETE
  describe "Destroy event" do #Dont test if doesn't work
    it "should delete a event" do
      expect{
          get :delete_event_employee, :id  => @event.id
      }.to change(Event,:count).by(-1)
    end
  end


  #INDEX EMPLOYEE
  describe "Index event employee" do  #Dont test PDF
    it "should show each event" do
      get :index_employee, :id => @event.id
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/index_employee")
    end
  end

  #INDEX USER
  describe "Index event user" do  #Dont test PDF
    it "should show each event" do
      get :index_user, :id => @event.id
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/index_user")
    end
  end

                                                            # 100% COVERAGE
    #USER CHANGE STATUS
    describe "User change event status" do
    	it "should successfull cancel a event" do
    		get :cancel_event_user, :id => @event.id
        @event.reload
        expect(@event.status).to eq("Cancelado pelo usuario")
      end
    end


  #NEW
  describe "New event" do
    it "should GET a new event" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end


  #SHOW VISITS
  describe "Show visits" do
    it "should display all user's visits" do
      get :show_employee
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/show_employee")
    end

    it "should display just user's event" do
      get :show_user
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/show_user")
    end
  end


  #CALENDAR
  describe "Index calendar month" do
    it "should set events with status agendado and has guide true at the calendar" do
      get :index_calendar_month
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/index_calendar_month")
    end
  end
end
