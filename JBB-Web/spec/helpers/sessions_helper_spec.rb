require 'rails_helper'

include SessionsHelper

RSpec.describe SessionsHelper, :type => :helper do
  before do
    @user = FactoryGirl.create(:user)
  end

  it { expect(@user).to respond_to(:email, :name, :cpf, :is_employee,:gender,:birth,:password,:password_digest) }

  it { expect(@user).to be_valid }

  describe '#current_user?' do
    context 'compared with @user' do
      it 'must return true' do
        sign_in(@user)
        expect(current_user).to eq(@user)
      end
    end
  end

  describe '#sign_out' do
      it 'the user should logout with success' do
        sign_in(@user)
        sign_out
        expect(current_user).to be(nil)
    end
  end

  describe '#logged_in?' do
    it "expect signout to clear current_user" do
      sign_in(@user)
      sign_out
      expect(logged_in?).to be(false)
    end
  end

  # describe '#block_access' do
  #   it "expect to redirect to home page" do
  #     current = User.new
  #     current.current_user = nil
  #     expect(subject).to redirect_to(home_path)
  #   end
  # end

end
