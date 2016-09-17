class Visitation < ApplicationRecord
	
	# validation of date
	validates :date, presence: true
	
	# validation of time
	validates :time, presence: true
	
	#validation of visitants_amout
	validates :visitants_amount, presence: true

	validate :validate_visitants_amount

	def validate_visitants_amount
		if (self.visitants_amount > 100)
			errors.add(:visitants_amount, "A quantidade máxima por visitação é de 100 pessoas")
		elsif (self.visitants_amount < 1)
			errors.add(:visitants_amount, "A quantidade de pessoas não pode ser negativa")
		end
	end


	def user_cancel_visitation_user
		self.status = "Cancelado pelo Usuario"
	end

	#status
	
	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }
end
