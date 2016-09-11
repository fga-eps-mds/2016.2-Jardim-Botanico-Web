class User < ApplicationRecord
  
has_secure_password
validates :password, presence: true, length: {minimum: 6}

  #default_values
  def set_default
    self.name = 'no_name'
    self.cpf = '01234567890'
    self.email = 'empty@empty.empty'
    self.birth = '01/01/01'
    self.phone = '52998224725'
    self.gender = 'Prefer to not declare'
    self.password = 'no_pass'
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
  def valid_cpf

    count1 = 10
    count2 = 8
    digit = 0
    invalid_cpf = ['12345678909', '11111111111', '22222222222', '33333333333', '44444444444',
      '55555555555', '66666666666', '77777777777', '88888888888', '99999999999',
      '00000000000']

    if self.cpf == nil
      errors.add(:cpf, "User's cpf is null.")
      return
    end

    unless self.cpf.length == 11
      errors.add(:cpf, "CPF missmatch length.")
      return
    end

    invalid_cpf.each do |invalid|
      if (invalid <=> self.cpf) == 0
        errors.add(:cpf, "Invalid sequerence of numbers.")
      end
    end

    cpf_splited = self.cpf.split(//)
    int_cpf = cpf_splited.map(&:to_i)

    #calculating first digit
    for count1 in 2..10
    digit += int_cpf[count2]*count1
    count2 = count2-1
    end

    digit = ((digit*10)%11)
      if digit == 10
        digit = 0
      end

    #validating first digit
    unless digit == int_cpf[9]
      errors.add(:cpf, "Invalid CPF.")
      return
    end

    #calculating second digit
    count2 = 9
    for count1 in 2..11
      digit += int_cpf[count2]*count1
      count2 = count2-1
    end

    digit = ((digit*10)%11)
    if digit == 10
      digit = 0
    end

    #validating second digit
    unless digit == int_cpf[10]
      errors.add(:cpf, "Invalid CPF.")
      return
    end
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

    cont=0
    splited_birth = ['', '', '']
    splited_int_birth = [0, 0, 0]

    if self.birth == nil
      errors.add(:birth, "User's birth is null.")
      return
    end

    unless validates_format_of :birth, :with => /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/i
      errors.add(:birth, "Birth missformated")
    else
      splited_birth = self.birth.split('/')
      for cont in 0..2
        splited_int_birth[cont] = splited_birth[cont].to_i
      end

      if splited_int_birth[2] < 1900 || splited_int_birth[2] > 2016
        errors.add(:birth, "Invalid Year")
      end
      if splited_int_birth[1] <= 0 || splited_int_birth[1] >= 12
        errors.add(:birth, "Invalid Month")
      end
      if splited_int_birth[0] <= 0 || splited_int_birth[0] >= 31
        errors.add(:birth, "Invalid Day")
      end
    end
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
