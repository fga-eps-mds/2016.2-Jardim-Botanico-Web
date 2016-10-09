class AddVisitationTypeToVisitations < ActiveRecord::Migration[5.0]
  def change
    add_column :visitations, :visitation_type, :string
    add_column :visitations, :add_groups_age_to_visitations, :string
    add_column :visitations, :groups_age, :integer
    add_column :visitations, :add_objective_to_visitations, :string
    add_column :visitations, :objective, :string
    add_column :visitations, :add_spaces_to_visitations, :string
    add_column :visitations, :spaces, :string
    add_column :visitations, :add_has_guide_to_visitations, :string
    add_column :visitations, :has_guide, :boolean
  end
end
