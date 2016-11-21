class Phone < ApplicationRecord
	belongs_to :user, inverse_of: :phones

	validate :valid_phone


	#phone
  def valid_phone

    if self.phone == nil
      errors.add(:phone, I18n.t(:null_phone))
      return
    end

    if self.phone.length < 8  || self.phone.length > 15
      errors.add(:phone, I18n.t(:invalid_phone))
    end
  end
end
