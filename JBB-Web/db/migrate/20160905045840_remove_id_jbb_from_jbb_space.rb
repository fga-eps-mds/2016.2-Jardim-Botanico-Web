class RemoveIdJbbFromJbbSpace < ActiveRecord::Migration[5.0]
  def change
      remove_column :jbb_spaces, :id_jbb
  end
end
