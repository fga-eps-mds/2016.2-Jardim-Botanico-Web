class Event < ApplicationRecord
	belongs_to :user

	# validation of dates
	validates :date_start, presence: true
	validates :date_end, presence: true

	# validation of times
	validates :time_start, presence: true
	validates :time_end, presence: true

	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 500 }

	# validation of estimated_public
	validates :estimated_public, presence: true, numericality: { greater_than: 0 }

	def set_status_default
		self.status = "Aguardando analise"
	end

	def self.total
		self.sum(:price_payment)
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
end
