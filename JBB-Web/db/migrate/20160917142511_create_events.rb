class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.belongs_to :user
      t.date :date
      t.time :time
      t.string :status
      t.string :jbb_space_requested
      t.integer :estimated_public
      t.integer :rental_period
      t.boolean :need_eletricity
      t.boolean :need_water
      t.boolean :need_clean_service
      t.boolean :commercial_use_photos
      t.string :description
      t.string :other_informations
      t.string :jbb_response_to_request


      # necessary information if the requester is a institute
      t.string :name_institute
      t.string :institute_address
      t.string :institute_cnpj
      

      t.timestamps
    end
    add_index :events, :status
  end
end
