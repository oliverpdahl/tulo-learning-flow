class PathsNodes < ActiveRecord::Migration[6.0]
  def change
    create_table :paths_nodes, id: false do |t|
      t.belongs_to :path
      t.belongs_to :node
    end
  end
end
