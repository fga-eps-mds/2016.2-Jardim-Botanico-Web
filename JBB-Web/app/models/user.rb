class User < ApplicationRecord

  #include Modules
  require 'modules'

  has_secure_password
  has_many :events
  has_many :visitations
  has_many :phones, :inverse_of => :user

  accepts_nested_attributes_for :phones

  validates :password_digest, presence: true, length: {minimum: 6}
  #default_values
  def set_default
    self.name = 'no_name'
    self.cpf = '01234567890'
    self.email = 'empty@empty.empty'
    self.birth = '01/01/01'
    self.gender = 'Prefer to not declare'
    self.password_digest = 'no_pass'
    self.is_employee = false
  end


  validate :valid_name, :valid_birth, :valid_gender, :valid_email, :valid_cpf_verification

  $SPECIAL_CARACTERS = ['!', '@', '#', '$', '%', '¨', '*', '(', ')', '-', '+', '=', '§', '_',
    '²', '¹', '³', '¢', '¬', '{', '[', ']', '}' '?', ':', ';', '.', ',',
    '°', 'º', '|', '\\', '/', '^', '~', '´', '`', '"', '\'', '<', '>']


    $NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


    #is employee
    def set_as_not_emplyee
      self.is_employee = false
    end

    #user_name
    def valid_name
      if self.name == nil
        errors.add(:name, "Preencha o nome corretamente.")
        return
      end


      #puts "nome avaliado: #{name}\n\n\n"
      $SPECIAL_CARACTERS.each do |caracter|
        if self.name.include? caracter
          errors.add(:name, "Nome do usuário possui caracteres inválidos.")
        end
      end

      $NUMBERS.each do |number|
        if self.name.include? number
          errors.add(:name, "Usuário possui números errados de caracteres.")
        end
      end

      if self.name.length < 3
        errors.add(:name, "Usuário possui nome muito curto.")
      end

      unless self.name.include? ' '
        errors.add(:name, "Usuário não possui último nome.")
      end
    end




    #cpf
    validates :cpf, uniqueness: { message: "CPF já cadastrado e não pode ser usado novamente." }

    def valid_cpf_verification
      Modules.valid_cpf(:cpf)
    end


    #email
    validates :email, uniqueness: { message: "Email já cadastrado e não pode ser usado novamente." }

    def valid_email

      if self.email == nil
        errors.add(:email, "Preencha o email corretamente.")
        return
      end

      unless validates_format_of :email, :with => /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i
        errors.add(:email, "Formatatação de email errada")
      end
      if self.email.length < 10 || self.email.length > 255
        errors.add(:email, "Email inválido")
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


    #gender
    def valid_gender

      if self.gender == nil
        errors.add(:gender, "Preencha o gênero corretamente.")
        return
      end

      unless (gender.capitalize <=> 'Masculino') == 0 || (gender.capitalize <=> 'Feminino') == 0 ||
        (gender.capitalize <=> 'Outro') == 0
        errors.add(:gender, "Gênero inválido")
      end
    end
end
