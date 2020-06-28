Rails.application.routes.draw do
  scope '/api/v1' do
    resources :completables, only: [:index]
    get '/paths', to: 'completables#paths'
    scope '/completables' do
      patch '/complete/:id', to: 'completables#toggle_complete'
    end
  end
end
