Rails.application.routes.draw do

  get 'welcome/new'

  resources :users
  resources :visitations
  

  resources :users
  
  get 'trails/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'
  get 'visitations/index'


  get 'employees/new'

  get 'users/new'

  root 'welcome#welcome'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
