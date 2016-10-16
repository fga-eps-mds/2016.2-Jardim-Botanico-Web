module Features
  module SessionHelpers

    def sign_up
      expect {
        post :create, user: FactoryGirl.attributes_for(:user)
        response.should be_redirect
      }.should change(User, :count).by(1)
    end

    def sign_in(user)
      visit sign_in_path
      fill_in 'user_email', with: user.email
      fill_in 'user_password', with: user.password
      click_button 'Sign in'
    end
  end
end
