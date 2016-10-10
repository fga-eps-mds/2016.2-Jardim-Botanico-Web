class UserMailer < ApplicationMailer 
  default from: 'jbb.teste@gmail.com'

  def welcome(user)
    @user = user
    @url  = 'http://localhost:3000/sign_in'
    mail(to: @user.email, subject: "Bem Vindo ao Jardim Botânico de Brasília")
  end

  def change_status(visitation)
    @user = User.find(visitation.user_id)
    @visitation = visitation
    @url  = 'http://localhost:3000/visitations/show'
  	mail(to: @user.email, subject: "Seu status de agendamento foi alterado")
  end

  def change_status_event(event)
    @user = User.find(event.user_id)
    @event = event
    @url  = 'http://localhost:3000/event/show_user'
    mail(to: @user.email, subject: "Seu status de agendamento foi alterado")
  end

end
