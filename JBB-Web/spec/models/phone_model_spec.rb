require 'rails_helper'

RSpec.describe Phone, :type => :model do

  before do
    @user = FactoryGirl.create(:user)
    @phone = FactoryGirl.create(:phone,user_id:@user.id)
  end

   it { expect(@phone).to respond_to(:phone) }

   it { expect(@phone).to be_valid }


   describe "attribute" do
     subject {FactoryGirl.attributes_for(:phone) }
       describe "phone" do
         it "must be given" do
           subject["phone"] = nil
           expect(Phone.new(subject)).not_to be_valid
           subject["phone"] = "1234567891011"
           expect(Phone.new(subject)).not_to be_valid
           subject["phone"] = ""
           expect(Phone.new(subject)).not_to be_valid
         end
       end
   end

end
