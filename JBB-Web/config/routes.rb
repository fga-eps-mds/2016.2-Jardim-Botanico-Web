Rails.application.routes.draw do
  
  resources :users
  
  get 'trails/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'

  get 'employees/new'

  get 'users/new'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
