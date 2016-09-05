class Event < ApplicationRecord

	# validation of date_time
	validates :date_time, presence: true

	# validation of name
	validates :name, presence: true	

	# is_confirmed
	#validates :is_confirmed, presence: true

	# validation of description
	validates :description, presence: true, length: { maximum: 300}

	# validation of people_amount
	validates :is_confirmed, presence: true

	# validation of cpf
	validates :is_confirmed, presence: true
end
