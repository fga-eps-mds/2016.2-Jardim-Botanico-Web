class UserMailer < ActionMailer::Base
  default from: 'jbb.teste@gmail.com'

  def welcome(user_email)
    #@user = User.find(params[user_id])
    mail(to: user_email, subject: "Bem Vindo ao Jardim Botânico de Brasília")
  end
end