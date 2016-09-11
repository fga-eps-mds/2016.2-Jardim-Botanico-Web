class User < ApplicationRecord

has_secure_password
validates :password_digest, presence: true, length: {minimum: 6}

  #default_values
  def set_default
    self.name = 'no_name'
    self.cpf = '01234567890'
    self.email = 'empty@empty.empty'
    self.birth = '01/01/01'
    self.phone = '52998224725'
    self.gender = 'Prefer to not declare'
    self.password_digest = 'no_pass'
  end



  validate :valid_name, :valid_birth, :valid_phone, :valid_gender, :valid_email, :valid_cpf

  $SPECIAL_CARACTERS = ['!', '@', '#', '$', '%', '¨', '*', '(', ')', '-', '+', '=', '§', '_',
    '²', '¹', '³', '¢', '¬', '{', '[', ']', '}' '?', ':', ';', '.', ',',
    '°', 'º', '|', '\\', '/', '^', '~', '´', '`', '"', '\'', '<', '>']


  $NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    #user_name

  def valid_name
    if self.name == nil
      errors.add(:name, "User's name is null.")
      return
    end

  #puts "nome avaliado: #{name}\n\n\n"
    $SPECIAL_CARACTERS.each do |caracter|
      if self.name.include? caracter
        errors.add(:name, "User's name has invalid caracters.")
      end
    end

    $NUMBERS.each do |number|
      if self.name.include? number
        errors.add(:name, "User's name has invalid number caracters.")
      end
    end

    if self.name.length < 3
      errors.add(:name, "User's name is too short.")
    end

    unless self.name.include? ' '
      errors.add(:name, "User's don't have last name.")
    end
  end

  #cpf_validation
  #def self.valid_cpf(cpf = nil)

    def valid_cpf(cpf=nil)
    return false if cpf.nil?

    invalid_cpf = %w{12345678909 11111111111 22222222222 33333333333 44444444444 55555555555 66666666666 77777777777 88888888888 99999999999 00000000000}
    cpf_numbers = cpf.scan /[0-9]/
    if cpf_numbers.length == 11
      unless invalid_cpf.member?(cpf_numbers.join)
        cpf_numbers = cpf_numbers.collect{|x| x.to_i}
        sum = 10*cpf_numbers[0]+9*cpf_numbers[1]+8*cpf_numbers[2]+7*cpf_numbers[3]+6*cpf_numbers[4]+5*cpf_numbers[5]+4*cpf_numbers[6]+3*cpf_numbers[7]+2*cpf_numbers[8]
        sum = sum - (11 * (sum/11))
        wresult1 = (sum == 0 or sum == 1) ? 0 : 11 - sum
        if wresult1 == cpf_numbers[9]
          sum = cpf_numbers[0]*11+cpf_numbers[1]*10+cpf_numbers[2]*9+cpf_numbers[3]*8+cpf_numbers[4]*7+cpf_numbers[5]*6+cpf_numbers[6]*5+cpf_numbers[7]*4+cpf_numbers[8]*3+cpf_numbers[9]*2
          sum = sum - (11 * (sum/11))
          wresult2 = (sum == 0 or sum == 1) ? 0 : 11 - sum
          return true if wresult2 == cpf_numbers[10] # CPF validado
        end
      end
    end
    return false
  end

  #email
  def valid_email

    if self.email == nil
      errors.add(:email, "User's email is null.")
      return
    end

    unless validates_format_of :email, :with => /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i
      errors.add(:email, "Email missformated")
    end
    if self.email.length < 10 || self.email.length > 255
      errors.add(:email, "Email invalid")
    end
  end



  #birth
  def valid_birth
  #   cont=0
  #   splited_birth = ['', '', '']
  #   splited_int_birth = [0, 0, 0]

  #   if self.birth == nil
  #     errors.add(:birth, "User's birth is null.")
  #     return
  #   end

  #   unless validates_format_of :birth, :with => /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/i
  #     errors.add(:birth, "Birth missformated")
  #   else
  #     splited_birth = self.birth.split('/')
  #     for cont in 0..2
  #       splited_int_birth[cont] = splited_birth[cont].to_i
  #     end

  #     if splited_int_birth[2] < 1900 || splited_int_birth[2] > 2016
  #       errors.add(:birth, "Invalid Year")
  #     end
  #     if splited_int_birth[1] <= 0 || splited_int_birth[1] >= 12
  #       errors.add(:birth, "Invalid Month")
  #     end
  #     if splited_int_birth[0] <= 0 || splited_int_birth[0] >= 31
  #       errors.add(:birth, "Invalid Day")
  #     end
  #   end
  end

  #phone
  def valid_phone

    if self.phone == nil
      errors.add(:phone, "z's phone is null.")
      return
    end

    if self.phone.length < 8  || self.phone.length > 15
      errors.add(:phone, "Invalid Phone")
    end
  end

  #gender
  def valid_gender

    if self.gender == nil
      errors.add(:gender, "User's gender is null.")
      return
    end

    unless (gender.capitalize <=> 'Masculino') == 0 || (gender.capitalize <=> 'Feminino') == 0 ||
      (gender.capitalize <=> 'Prefer to not declare') == 0
      errors.add(:gender, "Invalid Gender")
    end
  end
end
