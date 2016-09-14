class CreateVisitations < ActiveRecord::Migration[5.0]
  def change
    create_table :visitations do |t|
      t.date :date
      t.time :time
      t.string :status
      t.integer :visitants_amount
      t.string :description

      t.timestamps
    end
  end
end
