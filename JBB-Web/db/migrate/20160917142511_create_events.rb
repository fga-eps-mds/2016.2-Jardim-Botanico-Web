class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
	    t.belongs_to :user
      t.string :status
      t.date :date
      t.time :time
      t.string :name
      t.string :description
      t.integer :people_amount

      t.timestamps
    end
    add_index :events, :status
  end
end
