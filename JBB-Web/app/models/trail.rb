class Trail < ApplicationRecord

#validating name of trail
#required field, maximum size 50 characters , minimum size 3 characters
validates :trail_name, presence: true, length: { minimum: 3, maximum: 50 }

#validating length
#required field, number positive
#validates :length, presence: true, :numericality => { :greater_than_or_equal_to => 0 }

#validating locomotion
#required field, maximum size 10 characters
validates :length, presence: true, length: { maximum: 10 }

#validating description of trail
#required field, maximum size 300 characters , minimum size 5 characters
validates :description, presence: true, length: { minimum: 5, maximum: 300 }

end
