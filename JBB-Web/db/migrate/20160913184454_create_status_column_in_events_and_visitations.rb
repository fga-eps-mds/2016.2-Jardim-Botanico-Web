class CreateStatusColumnInEventsAndVisitations < ActiveRecord::Migration[5.0]
  def change
		add_column :visitations, :status, :string
		add_column :events, :status, :string
  end
end
