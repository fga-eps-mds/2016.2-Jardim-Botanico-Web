FactoryGirl.define do

  factory :user do
      email "testuser@email.com"
      name "Test User"
      cpf "041.861.791.07"
      is_employee true
      gender "Masculino"
      birth "16/11/1994"
      password "nomatch"
      password_digest "mUc3m00RsqyRe"
   end

  factory :visitation do
    date "16/11/2016"
    period "Matutino"
    status "Aguardando confirmacao"
    visitants_amount 10
    description "Visita marcada ao JBB sábado"
    visitants_paying 10
  end

  factory :event do
    jbb_space_requested ["Biblioteca da Natureza", "Casa de Chá"]
    status "Confirmado"
    date_start "16/11/2016"
    date_end "16/11/2016"
    time_start "12:50"
    time_end "18:50"
    description "Passeio escolar"
    estimated_public 50
   end

    factory :phone do
      phone "6181380209"
    end

end
