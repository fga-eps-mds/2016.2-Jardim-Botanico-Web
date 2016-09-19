FactoryGirl.define do

  factory :user do
      email "walldisney@gmail.com"
      name "walldisney"
      cpf "065.693.025.42"
      is_employee true
      gender "Masculino"
      birth "16/11/1994"
      password "nomatch"
      password_digest "mUc3m00RsqyRe"
   end

  factory :visitation do
    date "16/11/2016"
    time "12:50"
    status "Inicial"
    visitants_amount 10
    description "Visita marcada ao JBB sábado"
  end

  factory :event do
    status "Agendado"
    date "16/11/2016"
    time "12:50"
    name "Federal"
    description "Federal Music Show"
    people_amount 50
   end
end
