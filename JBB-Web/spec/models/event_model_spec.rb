require 'rails_helper'

RSpec.describe Event, :type => :model do
  before do
    @user = FactoryGirl.create(:user, :cpf => "042.828.201.60", :email => "nicacio@gmail.com")
    @event = FactoryGirl.create(:event,user_id:@user.id)
  end

  it { expect(@event).to respond_to(:status, :date_start, :date_end, :time_start, :time_end, :description,
                                    :estimated_public) }

  it { expect(@event).to be_valid }


  describe "instantiation" do
   it "should create new event and status" do
      @user = FactoryGirl.create(:user)
      attrs = FactoryGirl.attributes_for(:event,user_id:@user.id)
      event = Event.new(attrs)
      event.save
      expect(event).to eq(Event.last)
      expect(event.status).not_to eq(nil)
    end
  end

  describe "attribute" do

    subject {FactoryGirl.attributes_for(:event) }

    describe "date" do
      it "must be given" do
        subject["date_start"] = ""
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "time" do
      it "must be given" do
        subject["time_start"] = ""
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "description" do
      it "must be given" do
        subject["description"] = "66406404764113331553
                                  32159016066543161378
                                  30030389566289064044
                                  74703645527509432227
                                  67810272783142154977
                                  01868449675597366151
                                  81551067943534037425
                                  72413775400607149586
                                  25559395610133714920
                                  81044681404485571752
                                  80062234800292915425
                                  79244100713331152084
                                  07633070688099710957
                                  96375943499246973362
                                  22263017942140517121
                                  05034918225278102156
                                  60773617043231641545
                                  65299191285312412150
                                  91983820196109052254
                                  02115114447397831736"
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "people_amount" do
      it "must be given" do
        subject["estimated_public"] = 10
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "set_status_default" do
      it "must return the default status" do
        event = Event.new
        event.set_status_default == "Aguardando analise"
      end
    end

    describe "canceled_by_employee" do
      it "must return the canceled by employee status" do
        event = Event.new
        event.canceled_by_employee == "Cancelado por funcionario"
      end
    end

    describe "canceled_by_user" do
      it "must return the canceled by user status" do
        event = Event.new
        event.canceled_by_user == "Cancelado pelo usuario"
      end
    end

    describe "refused_by_employee" do
      it "must return the refused by employee status" do
        event = Event.new
        event.refused_by_employee == "Recusado por funcionario"
      end
    end

    describe "accepted_by_employee" do
      it "must return the accepted by employee status" do
        event = Event.new
        event.accepted_by_employee == "Agendado"
      end
    end

    describe "start_time" do
      it "must return the initial time" do
        event = Event.new
        event.date_start
      end
    end

    describe "end_time" do
      it "must return the final time" do
        event = Event.new
        event.date_end
      end
    end
  end
end
