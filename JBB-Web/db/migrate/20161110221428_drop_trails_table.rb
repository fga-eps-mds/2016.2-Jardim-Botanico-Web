class DropTrailsTable < ActiveRecord::Migration[5.0]
 def up
    drop_table :trails
  end

  def down
    create_table :trails
  end
end
