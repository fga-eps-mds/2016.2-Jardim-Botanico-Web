class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :date_time
      t.string :name
      t.boolean :is_confirmed
      t.string :description
      t.integer :peaple_amount
      t.integer :cpf

      t.timestamps
    end
  end
end
