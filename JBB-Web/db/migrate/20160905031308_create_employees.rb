class CreateEmployees < ActiveRecord::Migration[5.0]
  def change
    create_table :employees do |t|
      t.string :cpf
      t.string :employee_name
      t.string :emai
      t.string :birth
      t.string :phone
      t.string :gender
      t.string :password_sieger

      t.timestamps
    end
  end
end
