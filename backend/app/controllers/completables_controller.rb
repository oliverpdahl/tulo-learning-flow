class CompletablesController < ApplicationController
  def index
    completables = Completable.all
    render json: completables
  end

  def toggle_complete
    completable = Completable.find(params[:id])
    completable.update(complete: !params[:complete])
    render json: completable
  end
end
