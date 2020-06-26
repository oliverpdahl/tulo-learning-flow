class CreateNodes < ActiveRecord::Migration[6.0]
  def change
    create_table :nodes do |t|
      t.integer :path_id

      t.timestamps
    end
  end
end
