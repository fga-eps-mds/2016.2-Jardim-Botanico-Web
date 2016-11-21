require 'rails_helper'

RSpec.describe Visitation, :type => :model do

  before do
    @user = FactoryGirl.create(:user)
    @visitation = FactoryGirl.create(:visitation,user_id:@user.id)
  end

  it { expect(@visitation).to respond_to(:status, :date, :period, :visitants_amount, :description) }

  it { expect(@visitation).to be_valid }

  describe "set_status_default" do

  it{ expect("Aguardando confirmacao") }

  end

  describe "canceled_by_employee" do

  it{ expect("Cancelado por funcionario") }

  end

  describe "canceled_by_user" do

  it{ expect("Cancelado pelo usuario") }

  end

  describe "refused_by_employee" do

  it{ expect("Recusado por funcionario") }

  end

  describe "accepted_by_employee" do

  it{ expect("Agendado") }

  end


  describe "attribute" do

    subject {FactoryGirl.attributes_for(:visitation) }

    describe "status" do
      it "must be given" do
        subject["status"] = ""
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "period" do
      it "must be given" do
        subject["period"] = ""
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "time" do
      it "must be given" do
        subject["time"] = ""
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "visitants_amount" do
      it "must be given" do
        subject["visitants_amount"] = "200"
        expect(Visitation.new(subject)).not_to be_valid
        subject["visitants_amount"] = "-1"
        expect(Visitation.new(subject)).not_to be_valid
        subject["visitants_amount"] = "A"
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "description" do
      it "must be given" do
        subject["description"] = ""
        expect(Visitation.new(subject)).not_to be_valid
        subject["description"] = "ABC"
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "set_status_default" do
      it "must return the default status" do
        visitation = Visitation.new
        visitation.set_status_default == "Aguardando analise"
      end
    end

    describe "canceled_by_employee" do
      it "must return the canceled by employee status" do
        visitation = Visitation.new
        visitation.canceled_by_employee == "Cancelado por funcionario"
      end
    end

    describe "canceled_by_user" do
      it "must return the canceled by user status" do
        visitation = Visitation.new
        visitation.canceled_by_user == "Cancelado pelo usuario"
      end
    end

    describe "refused_by_employee" do
      it "must return the refused by employee status" do
        visitation = Visitation.new
        visitation.refused_by_employee == "Recusado por funcionario"
      end
    end

    describe "accepted_by_employee" do
      it "must return the accepted by employee status" do
        visitation = Visitation.new
        visitation.accepted_by_employee == "Agendado"
      end
    end

    describe "set visitation cost" do
      it "must retun 0 to public schools" do
        visitation = Visitation.new
        visitation.visitation_type <=> "Escola publica"
        expect(visitation.visitation_cost).to be_nil
      end
    end

  end
end
