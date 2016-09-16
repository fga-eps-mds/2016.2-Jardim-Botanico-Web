Rails.application.routes.draw do

  #users
  resources :users
  get '/users/new' => 'users#new'
  post '/users/new' => 'users#create', :as => 'create_user'
  get '/users/:id' => 'users#show', :as => 'user_show'
  get '/users/edit/:id' => 'users#edit', :as => 'user_edit'

  patch '/users/update/', controller: 'users', action: 'update', :as => 'update_user'
  patch '/users/update/:id', controller: 'users', action: 'update_password', :as => 'update_user_password'

  #sessions_login
  get    '/sign_in'   => 'sessions#new'
  post   '/sign_in_suceful'   => 'sessions#create'
  delete '/sign_out'  => 'sessions#destroy'

  #root
  root 'welcome#index', :as => 'home'

  get 'sessions/new'

  get 'trails/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'

  get 'employees/new'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
