class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :user
      t.date :date_start
      t.date :date_end
      t.time :time_start
      t.time :time_end
      t.string :status
      t.string :JBB_space_requested
      t.boolean :is_institute
      t.boolean :need_eletricity
      t.boolean :need_water
      t.boolean :need_clean_service
      t.boolean :has_photographer
      t.integer :estimated_public
      t.string :other_informations
      t.string :JBB_response_to_request

      # necessary information if the requester is a institute
      t.string :name_institute
      t.string :institute_address
      t.string :institute_cnpj

      # necessary information if the event will have a photographer
      t.boolean :commercial_use_photos

      t.timestamps
    end
    add_index :events, :status, :date_start, :date_end
  end
end
