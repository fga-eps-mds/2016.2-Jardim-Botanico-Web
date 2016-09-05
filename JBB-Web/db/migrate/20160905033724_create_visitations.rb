class CreateVisitations < ActiveRecord::Migration[5.0]
  def change
    create_table :visitations do |t|
      t.string :date
      t.string :cpf
      t.string :time
      t.boolean :isConfirmed
      t.integer :visitants_amount
      t.string :description

      t.timestamps
    end
  end
end
