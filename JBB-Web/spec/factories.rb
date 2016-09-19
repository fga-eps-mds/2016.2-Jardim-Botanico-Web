FactoryGirl.define do

  factory :user do
      email "testuser@email.com"
      name "Test User"
      cpf "065.693.025.42"
      is_employee true
      gender "Masculino"
      birth "16/11/1994"
      password "nomatch"
      password_digest "mUc3m00RsqyRe"
      association :phone, factory: :phone
   end

  factory :visitation do
    date "16/11/2016"
    time "12:50"
    status "Aguardando confirmacao"
    visitants_amount 10
    description "Visita marcada ao JBB sábado"
  end

  factory :event do
    status "Confirmado"
    date "16/11/2016"
    time "12:50"
    name "Federal"
    description "Passeio escolar"
    people_amount 50
   end

   factory :trail do
     name "Trilha da Mata"
     length "10km"
     description "Trilha a pé de mata fechada e habitat típico do cerrado"
    end

    factory :phone do
      user_id 10
      phone "6181380209"
    end

end
