class User < ApplicationRecord

  #validation of name
  validates :name, :presence => { :message => 'Insira um nome'},
  					length: {maximum: 50}, 
  					uniqueness: true


  #validation of cpf
  #validates_cpf_format_of :cpf
	def check_cpf(cpf=nil)
  return false if cpf.nil?

  winvalidos = %w{12345678909 11111111111 22222222222 33333333333 44444444444 55555555555 66666666666 77777777777 88888888888 99999999999 00000000000}
  wvalor = cpf.scan /[0-9]/
  if wvalor.length == 11
    unless winvalidos.member?(wvalor.join)
      wvalor = wvalor.collect{|x| x.to_i}
      wsoma = 10*wvalor[0]+9*wvalor[1]+8*wvalor[2]+7*wvalor[3]+6*wvalor[4]+5*wvalor[5]+4*wvalor[6]+3*wvalor[7]+2*wvalor[8]
      wsoma = wsoma - (11 * (wsoma/11))
      wresult1 = (wsoma == 0 or wsoma == 1) ? 0 : 11 - wsoma
      if wresult1 == wvalor[9]
        wsoma = wvalor[0]*11+wvalor[1]*10+wvalor[2]*9+wvalor[3]*8+wvalor[4]*7+wvalor[5]*6+wvalor[6]*5+wvalor[7]*4+wvalor[8]*3+wvalor[9]*2
        wsoma = wsoma - (11 * (wsoma/11))
        wresult2 = (wsoma == 0 or wsoma == 1) ? 0 : 11 - wsoma
        return true if wresult2 == wvalor[10] # CPF validado
      end
    end
  end
  return false # CPF invalidado
end
	

  #validation of gender
  validates :gender, :presence => { :message => 'Selecione o seu gênero'}

  #validation of birth
  validates :birth, :presence => { :message => 'Insira a data de nascimento'},
  									length: {maximum: 8}

  #validation of phone
  validates :phone, :presence  => { :message => 'Insira um número de telefone válido'},
  									length: { minimum: 14, maximum: 15 }

	#validation of email
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, length: { maximum: 255 },
										format: { with: VALID_EMAIL_REGEX },
										uniqueness: true
	has_secure_password
	validates :password, length: { minimum: 6, maximum: 100 }
end
