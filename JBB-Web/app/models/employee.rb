class Employee < ApplicationRecord

  #name
  special_caracter = {'!', '@', '#', '$', '%', '¨', '*', '(', ')', '-', '+', '=', '§', '_',
  					  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '²', '¹', '³', '¢',
  					   '¬', '{', '[', ']', '}' '?', ':', ';', '.', ',', '°', 'º', '|', '\\'
  					   '/', '^', '~', '´', '`', '"', '\'', '<', '>'}

  def validate_name (name)
  	if name.bytesize < 3
  		return false
  	elsif
  		special_caracter.each do |x|


  validates :employee_name, presence:true
  

  #email
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { minimum:10 , maximum: 255 },
  format: { with: VALID_EMAIL_REGEX }
  

  #birth


  #phone


  #gender


  #password_sieger


end
