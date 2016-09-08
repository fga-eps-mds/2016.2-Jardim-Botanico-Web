Rails.application.routes.draw do

  get 'welcome/new'

  resources :users

  get 'trails/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'

  get 'employees/new'

  devise_for :users, controllers: { sessions: 'users/sessions' }

  get 'users/new'

  root 'welcome#welcome'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
