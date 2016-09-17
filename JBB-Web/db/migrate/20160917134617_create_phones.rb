class CreatePhones < ActiveRecord::Migration[5.0]
  def change
    create_table :phones do |t|
	    t.belongs_to :user
      t.string :phone

      t.timestamps
    end
  end
end
