class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :cpf
      t.boolean :is_employee
      t.string :gender
      t.date :birth
      t.string :password_digest

      t.timestamps
    end
    add_index :users, :email
    add_index :users, :name
    add_index :users, :cpf
  end
end
