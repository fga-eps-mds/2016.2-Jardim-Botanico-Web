FactoryGirl.define do
  # factory :user do
  #     name:"walldisney"
  #     cpf:"065.693.025.42"
  #     birth:"16/11/1994"
  #     phone:"(61)8138-0922"
  #     gender:"Masculine"
  #     email:"walldisney@gmail.com"
  #     password:"nomatch"
  #     password_digest:"mUc3m00RsqyRe"
  # 
  # end

  factory :visitation do
    description:"Visita marcada ao JBB sábado"
    date "16/11/2016"
    time "12:50"
    visitants_amount 10

  end
end
