require "rails_helper"

RSpec.describe ApplicationController, type: :controller do

  before do
    @user = FactoryGirl.create(:user)
    @visitation = FactoryGirl.create(:visitation,user_id:@user.id)
  end

  it { expect(@visitation).to respond_to(:status, :date, :time, :visitants_amount, :description) }

  it { expect(@visitation).to be_valid }

  describe "#current_visitation" do
    it "should return current visitation" do
      visitation = Visitation.new
      expect(response).to have_http_status(:success)
    end
  end

end
