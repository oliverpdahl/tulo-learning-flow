class CompletablesController < ApplicationController
  def index
    completables = Completable.order("created_at DESC")
    render json: completables
  end

  def update
    completable = Completable.find(params[:id])
    completable.update_attributes(completable_param)
    render json: completable
  end
end
