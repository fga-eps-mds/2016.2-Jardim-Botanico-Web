class CreateJbbSpaces < ActiveRecord::Migration[5.0]
  def change
    create_table :jbb_spaces do |t|
      t.integer :id_jbb
      t.string :space_name
      t.string :description

      t.timestamps
    end
  end
end
