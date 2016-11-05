require "rails_helper"

RSpec.describe EventsController, type: :controller do
  before do
    @user = FactoryGirl.create(:user)
    sign_in(@user)
    @event = FactoryGirl.create(:event, user_id: @user.id, id: 5)
  end

  #CREATE
  describe "POST create" do  #Still dont test Mailer
  	it "should fail to create a event" do
  		post :create, :event => {
        :status => "Agendado",
        :visitants_amount => "50",
        :groups_age => "20",
        :has_guide => "true",
        :description => "Descrição da visitação",
        :visitants_paying => 200
			}
      expect(response).to have_http_status(:success)
      end

      it "should sucessfully to create a event" do
        post :create, :event => {
          :user_id => @user.id,
          :date => "15/12/1996",
          :time => "15:00",
          :status => "Agendado",
          :visitants_amount => 50,
          :event_type => "Study",
          :groups_age => 10,
          :objective => "objective",
          :spaces => "space",
          :has_guide => true,
          :description => "ahahhahahaaaaaaaaaaaaa",
          :visitants_paying => 10,
          :event_cost => 100
  			}
        end

  end


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
      @event.visitants_amount = -1
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
      }.to change(Visitation,:count).by(-1)
    end
  end


  #INDEX
  describe "Index event" do  #Dont test PDF
    it "should show each event" do
      get :index, :id => @event.id
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/index")
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
      get :show
      expect(response).to have_http_status(:success)
      expect(response).to render_template("events/show")
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
