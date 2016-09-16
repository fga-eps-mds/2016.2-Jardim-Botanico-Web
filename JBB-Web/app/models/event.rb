class Event < ApplicationRecord

	#validate of name
	validates :name, presence: true

	# validation of date
	validates :date, presence: true

	#validation of time
	validates :time, presence: true	

	# status
	def set_status_as_default 		
		self.status = "Aguardando confirmacao"

	end
	validate :set_status_as_default

	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }

	# validation of people_amount
	validates :people_amount, presence: true, numericality: { greater_than: 0 }

end
