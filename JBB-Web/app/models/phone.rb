class Phone < ApplicationRecord
	belongs_to :user

	validate :valid_phone

	
	#phone
  def valid_phone

    if self.phone == nil
      errors.add(:phone, "z's phone is null.")
      return
    end

    if self.phone.length < 8  || self.phone.length > 15
      errors.add(:phone, "Telefone inválido")
    end
  end

end
