class User < ApplicationRecord

  #validating name
  validates :name, :presence => { :message => 'Insira um nome'},
  					length: {maximum: 50}, 
  					uniqueness: true


  #validating cpf
  #validates_cpf_format_of :cpf

  #validating gender
  validates :gender, :presence => { :message => 'Selecione o seu gênero'}

  #validating birth
  validates :birth, :presence => { :message => 'Insira a data de nascimento'},
  									length: {maximum: 8}

  #validating phone
  validates :phone, :presence  => { :message => 'Insira um número de telefone válido'},
  									length: {maximum: 15}
end
