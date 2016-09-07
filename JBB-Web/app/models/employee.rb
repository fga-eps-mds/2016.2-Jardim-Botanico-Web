class Employee < ApplicationRecord

	#default_values
	def set_default
		self.employee_name = 'no_name'
		self.cpf = '01234567890'
		self.email = 'empty@empty.empty'
		self.birth = '01/01/01'
		self.phone = '00000000000'
		self.gender = 'Prefer not to declare'
		self.password_sieger = 'no_pass'
	end



	validate :valid_name, :valid_birth, :valid_phone, :valid_gender, :valid_password, :valid_email

	#name
  	$SPECIAL_CARACTERS = ['!', '@', '#', '$', '%', '¨', '*', '(', ')', '-', '+', '=', '§', '_',
  					  	  '²', '¹', '³', '¢', '¬', '{', '[', ']', '}' '?', ':', ';', '.', ',',
  					  	   '°', 'º', '|', '\\', '/', '^', '~', '´', '`', '"', '\'', '<', '>']
  	
  	$NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	def valid_name
  		#puts "nome avaliado: #{employee_name}\n\n\n"
  		$SPECIAL_CARACTERS.each do |caracter|
  			if self.employee_name.include? caracter
  				errors.add(:employee_name, "Employee's name has invalid caracters.")
  			end
  		end

  		$NUMBERS.each do |number|
  			if self.employee_name.include? number
  				errors.add(:employee_name, "Employee's name has invalid number caracters.")
  			end
  		end

  		if self.employee_name.length < 3
  			errors.add(:employee_name, "Employee's name is too short.")
  		end 	

  		unless self.employee_name.include? ' '
  			errors.add(:employee_name, "Employee's don't have last name.")
  		end
 	end

 	#cpf


	#email
	def valid_email
		unless validates_format_of :email, :with => /[0-9a-z][0-9a-z.]+[0-9a-z]@[0-9a-z][0-9a-z.-]+[0-9a-z]/i   
			errors.add(:email, "Email missformated")
		end
    	if self.email.length < 10 || self.email.length > 255
    		errors.add(:email, "Email invalid")
    	end
    end	

	#birth
	def valid_birth
		cont=0
		splited_birth = ['', '', '']
		splited_int_birth = [0, 0, 0]

		unless validates_format_of :birth, :with => /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]/i   
			errors.add(:birth, "Birth missformated")
		else
			splited_birth = self.birth.split('/')
			for cont in 0..2
				splited_int_birth[cont] = splited_birth[cont].to_i
			end
			
			if splited_int_birth[2] < 1900 || splited_int_birth[2] > 2016
				errors.add(:birth, "Invalid Year")
			end
			if splited_int_birth[1] <= 0 || splited_int_birth[1] >= 12
				errors.add(:birth, "Invalid Month")
			end
			if splited_int_birth[0] <= 0 || splited_int_birth[0] >= 31
				errors.add(:birth, "Invalid Day")
			end
		end
	end	


	#phone
	def valid_phone
		if self.phone.length < 8  || self.phone.length > 15
			errors.add(:phone, "Invalid Phone")
		end
	end


	#gender
	def valid_gender
		unless (gender.capitalize <=> 'Masculin') == 0 || (gender.capitalize <=> 'Feminin') == 0 || 
			   (gender.capitalize <=> 'Prefer not to declare') == 0
			errors.add(:gender, "Invalid Gender")
		end
	end

	#password_sieger
	def valid_password
		if self.password_sieger.length < 8  || self.password_sieger.length > 35
			errors.add(:password_sieger, "Invalid Password")
		end
		$SPECIAL_CARACTERS.each do |caracter|
  			if self.password_sieger.include? caracter
  				errors.add(:password_sieger, "Employee's password has invalid caracters.")
  			end
  		end
  		if self.password_sieger.include? ' '
  			errors.add(:password_sieger, "Employee's password can't have spaces.")
		end
	end

end

