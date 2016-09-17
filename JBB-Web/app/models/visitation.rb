class Visitation < ApplicationRecord
	belongs_to :user
	
	# validation of date
	validates :date, presence: true
	
	# validation of CPF
	validates :cpf, presence: true
	
	# validation of time
	validates :time, presence: true
	
	# validation of visitants amount
	validates :visitants_amount, presence: true
	
	# validation of description
	validates :description, presence: true, length: { minimum: 5, maximum: 300 }
end
