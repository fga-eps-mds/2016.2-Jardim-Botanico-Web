class CreateTrails < ActiveRecord::Migration[5.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.float :length
      t.string :locomotion
      t.string :description

      t.timestamps
    end
  end
end
