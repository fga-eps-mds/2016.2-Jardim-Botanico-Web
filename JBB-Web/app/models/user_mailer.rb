class UserMailer < ActionMailer::Base
	default from: 'jbb.teste@gmail.com'

	def welcome(user_email)
		mail(to: user_email, subject: "Bem Vindo ao Jardim Botânico de Brasília")
	end
end