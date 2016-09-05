class JbbSpace < ApplicationRecord

#validating jbb space name
#required field, maximum size 50 characters , minimum size 3 characters
validates :space_name, presence: true, length: { minimum: 3, maximum: 50 }

#validating
#required field, maximum size 300 characters , minimum size 5 characters
validates :description, presence: true, length: { minimum: 5, maximum: 300 }

end
