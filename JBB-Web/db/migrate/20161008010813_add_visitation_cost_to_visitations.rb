class AddVisitationCostToVisitations < ActiveRecord::Migration[5.0]
  def change
    add_column :visitations, :visitation_cost, :integer
  end
end
