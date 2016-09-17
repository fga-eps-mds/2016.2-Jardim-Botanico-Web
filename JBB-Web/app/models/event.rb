class Event < ApplicationRecord

	#validate of name
	validates :name, presence: true

	# validation of date
	validates :date, presence: true

	#validation of time
	validates :time, presence: true	

	# status
	#validate :set_status_as_default
	#status
	def set_status_default
		self.status = "Aguardando confirmacao"
	end	

	def canceled_by_employee
		self.status = "Cancelado por funcionario"
	end

	def canceled_by_user
		self.status = "Cancelado pelo usuario"
	end

	def refused_by_employee
		self.status = "Recusado por funcionario"
	end

	def accepted_by_employee
		self.status = "Agendado"
	end

	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }

	# validation of people_amount
	validates :people_amount, presence: true, numericality: { greater_than: 0 }

end
