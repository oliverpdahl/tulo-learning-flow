class CreateCompletables < ActiveRecord::Migration[6.0]
  def change
    create_table :completables do |t|
      t.string :title

      t.timestamps
    end
  end
end
