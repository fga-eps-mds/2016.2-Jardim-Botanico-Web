class CreateVisitations < ActiveRecord::Migration[5.0]
  def change
    create_table :visitations do |t|
	    t.belongs_to :user
      t.string :status
      t.date :date
      t.string :period
      t.integer :visitants_amount
      t.string :description

      t.timestamps
    end
    add_index :visitations, :status
  end
end
