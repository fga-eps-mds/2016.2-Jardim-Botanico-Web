class RemoveIsConfirmedColumnFromEventsAndVisitations < ActiveRecord::Migration[5.0]
  def change
		remove_column :visitations, :isConfirmed
		remove_column :events, :is_confirmed
  end
end
