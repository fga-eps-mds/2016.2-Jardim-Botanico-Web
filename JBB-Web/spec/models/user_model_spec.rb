require 'rails_helper'

RSpec.describe User, :type => :model do
  before do
    @user = FactoryGirl.create(:user)
  end

  it { expect(@user).to respond_to(:email, :name, :cpf, :is_employee,:gender,:birth,:password,:password_digest) }

  it { expect(@user).to be_valid }

  describe "attribute" do

    subject {FactoryGirl.attributes_for(:user) }

    describe "email" do
      it "must be given" do
        subject["email"] = "nil"
        expect(User.new(subject)).not_to be_valid
        subject["email"] = "meuemail"
        expect(User.new(subject)).not_to be_valid
      end
    end

    describe "name" do
      it "must be given" do
        subject["name"] = ""
        expect(User.new(subject)).not_to be_valid
        subject["name"] = "+-/*&%$#@}|:;"
        expect(User.new(subject)).not_to be_valid
        subject["name"] = "123456"
        expect(User.new(subject)).not_to be_valid
        subject["name"] = "ab"
        expect(User.new(subject)).not_to be_valid

      end
    end


    describe "gender" do
      it "must be given" do
        subject["gender"] = 'nil'
        expect(User.new(subject)).not_to be_valid
      end
    end

    # describe "birth" do
    #   it "must be given" do
    #     subject["birth"] = ""
    #     expect(User.new(subject)).not_to be_valid
    #   end
    # end

  end

end
