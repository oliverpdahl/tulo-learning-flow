# frozen_string_literal: true

class Path < Completable
  has_many :nodes
  attr_accessor :num_nodes_complete
  after_save :update_num_nodes_complete

  def update_num_nodes_complete
    complete = this.nodes.count { |n| n.complete == true }
    count = this.nodes.length
    [count, complete]
  end
end
