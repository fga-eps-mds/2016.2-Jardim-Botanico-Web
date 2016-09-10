Rails.application.routes.draw do


  resources :users
  get    'sign_in'   => 'sessions#new'
  post   'sign_in'   => 'sessions#create'
  delete 'sign_out'  => 'sessions#destroy'

  get 'sessions/new'

  get 'welcome/new'

  get 'trails/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'

  get 'employees/new'

  get 'users/new'

  root 'welcome#welcome'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
