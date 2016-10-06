module Features
  module SessionHelpers
    def sign_up (name, email, password, cpf, phone, gender, birth)
      visit create_user
      fill_in 'user_name', with: name
      fill_in 'user_email', with: email
      fill_in 'user_password', with: password
      fill_in 'user_cpf', with: cpf
      fill_in 'user_phone', with: phone
      fill_in 'user_gender', with: gender
      fill_in 'user_birth', with: birth
      click_button 'Sign up'
    end

    def sign_in(user)
      visit sign_in_path
      fill_in 'user_email', with: user.email
      fill_in 'user_password', with: user.password
      click_button 'Sign in'
    end
  end
end
