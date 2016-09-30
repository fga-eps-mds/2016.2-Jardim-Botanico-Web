module Modules
  def self.valid_cpf(cpf)

    self.cpf = @cpf[cpf]

    int_cpf = [1,2,3,4,5,6,7,8,9,0,0]
    count1 = 10
    count2 = 8
    digit = 0

    invalid_cpf = ['123.456.789-09', '111.111.111-11', '222.222.222-22', '333.333.333-33', '444.444.444-44',
      '555.555.555-55', '666.666.666-66', '777.777.777-77', '888.888.888-88', '999.999.999-99',
      '000.000.000-00']


      if cpf == nil
        errors.add(:cpf, "Preencha o CPF corretamente.")
        return
      end

      invalid_cpf.each do |invalid|
        if (invalid <=> cpf) == 0
          errors.add(:cpf, "Número de CPF errado.")
        end
      end

      cpf_splited = cpf.split(//)

      for count1 in 0..13
        unless cpf_splited[count1] == "." || cpf_splited[count1] == "-"
          int_cpf[digit] = cpf_splited[count1].to_i
          digit = digit + 1
        end
      end

      count1 = 0
      digit = 0

      puts int_cpf

      #calculating first digit
      for count1 in 2..10
        digit += int_cpf[count2]*count1
        count2 = count2-1
      end

      puts digit

      digit = ((digit*10)%11)

      if digit == 10
        digit = 0
      end

      #validating first digit
      unless digit == int_cpf[9]
        errors.add(:cpf, "CPF inválido.")
        return
      end

      digit = 0

      #calculating second digit
      count2 = 9
      for count1 in 2..11
        digit += int_cpf[count2]*count1
        count2 = count2-1
      end

      digit = ((digit*10)%11)
      if digit == 10
        digit = 0
      end

      #validating second digit
      unless digit == int_cpf[10]
        errors.add(:cpf, "CPF inválido.")
        return
      end

      return true
  end
end
