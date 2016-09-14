class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.date :date
      t.time :time
      t.string :name
      t.string :status
      t.string :description
      t.integer :people_amount
      t.integer :id_user
    end
  end
end
