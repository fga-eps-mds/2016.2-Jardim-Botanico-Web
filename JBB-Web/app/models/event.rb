class Event < ApplicationRecord
	belongs_to :user

	# validation of date
	validates :date, presence: true

	# validation of times
	validates :time, presence: true

	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 500 }

	# validation of estimated_public
	validates :estimated_public, presence: true, numericality: { greater_than: 0 }

	# validation of other_informations
	validates :other_informations, length: { minimum: 5, maximum: 500 }

	# validation of JBB_response_to_request
	validates :JBB_response_to_request, length: { minimum: 5, maximum: 500 }


	def set_status_default
    self.status = "Aguardando analise"
	end
	def canceled_by_employee
		self.status = "Cancelado por funcionario"
	end
	def awaiting_user_confirmation
    self.status = "Aguardando confirmacao do usuario"
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

end
