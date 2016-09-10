class Visitation < ApplicationRecord
	
	# validation of date
	validates :date, presence: true
	
	# validation of CPF
	validates :cpf, presence: true
	
	# validation of time
	validates :time, presence: true
	
	# validation of visitants amount
	#validates :visitants_amount, presence: true

	validate :parse_to_int
	
	def parse_to_int 
  		self.visitants_amount = self.visitants_amount.to_i
  	  	#errors.add(:visitants_amount, "entrou aqui :)")
	end

	
	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }
end
