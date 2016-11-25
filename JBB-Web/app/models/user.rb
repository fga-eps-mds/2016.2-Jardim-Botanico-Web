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
      errors.add(:name, I18n.t(:fill_correct_name))
    end

    #puts "nome avaliado: #{name}\n\n\n"
    $SPECIAL_CARACTERS.each do |caracter|
      if (self.name.include? caracter)
        errors.add(:name, I18n.t(:invalid_characters_in_name))
      end
    end

    $NUMBERS.each do |number|
      if (self.name.include? number)
        errors.add(:name, I18n.t(:numbers_in_name))
      end
    end

    if (self.name.length < 3)
      errors.add(:name, I18n.t(:short_name))
    end

    unless (self.name.include? ' ')
      errors.add(:name, I18n.t(:missing_surname))
    end
  end


  #cpf
  validates :cpf, uniqueness: {
    message: I18n.t(:already_used_cpf)
  }

  def valid_cpf
    if (self.cpf == nil)
      errors.add(:cpf, I18n.t(:blank_cpf_field))
    elsif ((CPF.valid?(self.cpf)) == false)
      errors.add(:cpf, I18n.t(:invalid_cpf_number))
    end
  end

  #email
  validates :email, uniqueness: {
    message: I18n.t(:already_used_email)
  }


  def valid_cpf
    if ((self.cpf <=> '111.111.111-11') == 0 ||
      (self.cpf <=> '222.222.222-22') == 0 ||
      (self.cpf <=> '333.333.333-33') == 0 ||
      (self.cpf <=> '444.444.444-44') == 0 ||
      (self.cpf <=> '555.555.555-55') == 0 ||
      (self.cpf <=> '666.666.666-66') == 0 ||
      (self.cpf <=> '777.777.777-77') == 0 ||
      (self.cpf <=> '888.888.888-88') == 0 ||
      (self.cpf <=> '999.999.999-99') == 0 ||
      (self.cpf <=> '000.000.000-00') == 0 )
      errors.add(:cpf, I18n.t(:invalid_cpf_number))
    end

    if (self.cpf == nil)
      errors.add(:cpf, I18n.t(:blank_cpf_field))
    elsif ((CPF.valid?(self.cpf)) == false)
      errors.add(:cpf, I18n.t(:invalid_cpf_number))
    end
  end


  #email validates
  validates :email, uniqueness: {
    message: I18n.t(:already_used_email)
  }


  def valid_email
    if (self.email == nil)
      errors.add(:email, I18n.t(:blank_email_field))
    elsif (self.email.length < 10 || self.email.length > 255)
      errors.add(:email, I18n.t(:invalid_email))
    end

    unless (validates_format_of :email,:with =>
      /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i)
      errors.add(:email, I18n.t(:invalid_email_format))
    end
  end



  #gender
  def valid_gender
    if (self.gender == nil)
      errors.add(:gender, I18n.t(:blank_gender_field))
    end

    unless ((gender.capitalize <=> 'Masculino') == 0 ||
      (gender.capitalize <=> 'Feminino') == 0 ||
      (gender.capitalize <=> 'Outro') == 0
      )

      errors.add(:gender, I18n.t(:invalid_gender))
    end
  end

  #Password
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
