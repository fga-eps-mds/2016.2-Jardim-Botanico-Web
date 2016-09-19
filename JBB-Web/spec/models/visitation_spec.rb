require 'rails_helper'

RSpec.describe Visitation, :type => :model do

  before do
    @user = FactoryGirl.create(:user)
    @visitation = FactoryGirl.create(:visitation,user_id:@user.id)
  end

  it { expect(@visitation).to respond_to(:status, :date, :time, :visitants_amount, :description) }

  it { expect(@visitation).to be_valid }

  describe "attribute" do

    subject {FactoryGirl.attributes_for(:visitation) }

    describe "status" do
      it "must be given" do
        subject["status"] = ""
        expect(Visitation.new(subject)).not_to be_valid
      end
    end

    describe "date" do
      it "must be given" do
        subject["date"] = ""
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

  end

end
