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


   end

  describe User do
    describe "validate name" do
      describe "name" do

        context "when blank" do
          before { @user.name = "" }

          it "is invalid" do
            @user.should_not be_valid
          end

          it "adds the correct error message" do
            @user.valid?
            @user.errors.messages[:name].should include("Usuário possui nome muito curto.", "Usuário não possui último nome.")
          end
        end
      end
    end
  end

  describe User do
    describe "validate email" do
      describe "email" do

        context "when blank" do
          before { @user.email = "" }

          it "is invalid" do
            @user.should_not be_valid
          end

          it "adds the correct error message" do
            @user.valid?
            @user.errors.messages[:email].should include("is invalid", "Email inválido.")
          end
        end
      end
    end
  end

end
