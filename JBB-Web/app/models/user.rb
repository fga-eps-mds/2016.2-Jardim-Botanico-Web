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


  validate :valid_name, :valid_birth, :valid_gender, :valid_email, :valid_cpf

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
        errors.add(:name, t(:fill_correct_name))
      end

      #puts "nome avaliado: #{name}\n\n\n"
      $SPECIAL_CARACTERS.each do |caracter|
        if (self.name.include? caracter)
          errors.add(:name, t(:invalid_characters_in_name))
        end
      end

      $NUMBERS.each do |number|
        if (self.name.include? number)
          errors.add(:name, t(:numbers_in_name))
        end
      end

      if (self.name.length < 3)
        errors.add(:name, t(:short_name))
      end

      unless (self.name.include? ' ')
        errors.add(:name, t(:missing_surname))
      end

    end

    #cpf
    validates :cpf, uniqueness: {
      message: t(:already_used_cpf)
    }

    def valid_cpf
      if (self.cpf == nil)
        errors.add(:cpf, t(:blank_cpf_field))
      elsif ((CPF.valid?(self.cpf)) == false)
        errors.add(:cpf, t(:invalid_cpf_number))
      end
    end

    #email
    validates :email, uniqueness: {
      message: t(:already_used_email)
    }

    def valid_email
      if (self.email == nil)
        errors.add(:email, t(:blank_email))
      end

      unless (validates_format_of :email,:with =>
        /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i)

        errors.add(:email, t(:invalid_email_format))
      end

      if (self.email.length < 10 || self.email.length > 255)
        errors.add(:email, t(:invalid_email))
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
      if (self.gender == nil)
        errors.add(:gender, t(:blank_gender_field))
      end

      unless ((gender.capitalize <=> 'Masculino') == 0 ||
              (gender.capitalize <=> 'Feminino') == 0 ||
              (gender.capitalize <=> 'Outro') == 0
              )

        errors.add(:gender, t(:invalid_gender))
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
