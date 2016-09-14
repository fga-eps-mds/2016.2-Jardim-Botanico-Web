class ChangeCpfTypeToStringInEventsTable < ActiveRecord::Migration[5.0]
  def change
  	change_column :events, :cpf, :string
  end
end
