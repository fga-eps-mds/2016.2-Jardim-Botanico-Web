Rails.application.routes.draw do

  #users
  resources :users

  get '/users/new' => 'users#new'
  post '/users/new' => 'users#create', :as => 'create_user'
  get '/users/:id' => 'users#show', :as => 'user_show'
  get '/users/edit/:id' => 'users#edit', :as => 'user_edit'


  resources :visitations
  

  resources :users

  #sessions_login
  get    'sign_in'   => 'sessions#new'
  post   'sign_in'   => 'sessions#create'
  delete 'sign_out'  => 'sessions#destroy'

  #root
  root 'welcome#index', :as => 'home'

  #root 'sessions#new'

  get 'sessions/new'

  resources :visitations
  

  resources :users
  
  get 'trails/new'

  get 'jbb_spaces/new'


  resources :events
  get 'events/new'


  get 'visitations/new'
  get 'visitations/index'


  get 'employees/new'

  #root 'welcome#welcome'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
