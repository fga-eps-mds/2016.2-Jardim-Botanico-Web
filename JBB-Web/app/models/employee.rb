class Employee < ApplicationRecord

  #name
  validates :employee_name, presence:true

  #email
  #validates  :cpf  usar_como_cpf
  usar_como_cpf :cpf

  #birth



  #phone


  #gender


  #password_sieger


end
