class Visitation < ApplicationRecord
	
	validate :set_status_as_default, :validate_visitants_amount

	# validation of date
	validates :date, presence: true
	
	# validation of time
	validates :time, presence: true
	
	#validation of visitants_amout
	validates :visitants_amount, presence: true

	def set_status_as_default
		self.status = "Aguardando confirmacao"
	end

	def validate_visitants_amount
		if self.visitants_amount.class == nil
			errors.add(:visitants_amount, "Insira valor entre 1 e 100 na quantidade de visitantes")
		elsif (self.visitants_amount > 100)
			errors.add(:visitants_amount, "A quantidade máxima por visitação é de 100 pessoas")
		else (self.visitants_amount < 1)
			errors.add(:visitants_amount, "A quantidade de pessoas não pode ser negativa")
		end
	end

	
	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }
end
