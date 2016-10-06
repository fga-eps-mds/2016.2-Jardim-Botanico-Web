class UserMailer < ApplicationMailer 
  default from: 'jbb.teste@gmail.com'

  def welcome(user)
    @user = user
    @url  = 'http://localhost:3000/sign_in'
    mail(to: @user.email, subject: "Bem Vindo ao Jardim Botânico de Brasília")
  end
end
