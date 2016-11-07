class User < ApplicationRecord

  require "cpf_cnpj"

  has_secure_password
  has_many :events
  has_many :visitations
  has_many :phones, :inverse_of => :user

  accepts_nested_attributes_for :phones

  attr_accessor :remember_token

  validates :password_digest, presence: true, length: {
    minimum: 6
  }

  validate :valid_name, :valid_gender, :valid_email, :valid_cpf

  $SPECIAL_CARACTERS = ['!', '@', '#', '$', '%', '¨', '*', '(', ')', '-', '+',
    '=', '§', '_', '²', '¹', '³', '¢', '¬', '{', '[', ']', '}' '?', ':', ';',
    '.', ',', '°', 'º', '|', '\\', '/', '^', '~', '´', '`', '"', '\'', '<', '>']
  $NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  #is employee
  def set_as_not_employee
    self.is_employee = false
  end

  #user_name
  def valid_name
    if (self.name == nil)
      errors.add(:name, "Preencha o nome corretamente.")
    end

    #puts "nome avaliado: #{name}\n\n\n"
    $SPECIAL_CARACTERS.each do |caracter|
      if (self.name.include? caracter)
        errors.add(:name, "Nome do usuário possui caracteres inválidos.")
      end
    end

    $NUMBERS.each do |number|
      if (self.name.include? number)
        errors.add(:name, "Usuário possui números errados de caracteres.")
      end
    end

    if (self.name.length < 3)
      errors.add(:name, "Usuário possui nome muito curto.")
    end

    unless (self.name.include? ' ')
      errors.add(:name, "Usuário não possui último nome.")
    end
  end

  #cpf validates
  validates :cpf, uniqueness: {
    message: "CPF já cadastrado e não pode ser usado novamente."
  }

  def valid_cpf
    if (self.cpf == nil)
      errors.add(:cpf, "Campo CPF não pode ficar em branco.")
    elsif ((CPF.valid?(self.cpf)) == false)
      errors.add(:cpf, "Número de CPF inválido.")
    end
  end

  #email validates
  validates :email, uniqueness: {
    message: "Email já cadastrado e não pode ser usado novamente."
  }

  def valid_email
    if (self.email == nil)
      errors.add(:email, "Campo email não pode ficar em branco.")
    end

    unless (validates_format_of :email,:with =>
      /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i)
      errors.add(:email, "Formato de email inválido.")
    end

    if (self.email.length < 10 || self.email.length > 255)
      errors.add(:email, "Email inválido.")
    end
  end

  #gender
  def valid_gender
    if (self.gender == nil)
      errors.add(:gender, "Campo gênero não pode ficar em branco.")
    end

    unless ((gender.capitalize <=> 'Masculino') == 0 ||
      (gender.capitalize <=> 'Feminino') == 0 ||
      (gender.capitalize <=> 'Outro') == 0 )
      errors.add(:gender, "Gênero inválido")
    end
  end

  def User.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
    BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def User.new_token
    SecureRandom.urlsafe_base64
  end

  def remember
    self.remember_token = User.new_token
    update_attribute(:remember_digest, User.digest(remember_token))
  end

  def authenticate?(remember_token)
    return false if remember_digest.nil?
    BCrypt::Password.new(remember_digest).is_password?
  end

  def forget
    update_attribute(:remember_digest, nil)
  end
end
