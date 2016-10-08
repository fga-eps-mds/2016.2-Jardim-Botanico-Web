class Trails < ActiveRecord::Migration[5.0]
  def change
    create_table :trails do |t|
      t.string :trail_name
      t.float :length
      t.string :locomotion
      t.string :description

      t.timestamps
    end
  end
end
