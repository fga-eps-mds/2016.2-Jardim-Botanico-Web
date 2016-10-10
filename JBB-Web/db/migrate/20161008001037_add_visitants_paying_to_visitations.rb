class AddVisitantsPayingToVisitations < ActiveRecord::Migration[5.0]
  def change
    add_column :visitations, :visitants_paying, :integer
  end
end
