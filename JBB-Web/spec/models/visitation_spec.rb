require 'rails_helper'

RSpec.describe Visitation, :type => :model do
  before do
    @visitation = FactoryGirl.create(:visitation)
  end

  it{expect(@visitation).to respond_to(:date,:time,:status,:visitants_amount,:description)}

  it{ expect(@visitation).to be_valid }

  
end
