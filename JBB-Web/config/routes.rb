Rails.application.routes.draw do

  #users
  resources :users

  get '/users/new' => 'users#new'
  post '/users/new' => 'users#create', :as => 'create_user'
  get '/users/:id' => 'users#show', :as => 'user_show'
  get '/users/edit/:id' => 'users#edit', :as => 'user_edit'
  

  resources :users

  #sessions_login
  get    'sign_in'   => 'sessions#new'
  post   'sign_in'   => 'sessions#create'
  delete 'sign_out'  => 'sessions#destroy'

  #root
  root 'welcome#index', :as => 'home'

  #root 'sessions#new'

  get 'events/new' => 'events#new', as: 'events'
  post 'events/new' => 'events#create', as: 'events_save'
  get 'events/show' => 'events#show', as: 'show_event'
  get 'events/index'
  
  #Event Employee
  get 'events/accept_event_employee', as: 'get_accept_event_employee'
  post 'events/accept_event_employee', as: 'post_accept_event_employee'

  get 'events/refuse_event_employee', as: 'get_refuse_event_employee'
  post 'events/refuse_event_employee', as: 'post_refuse_event_employee'
  
  get 'events/cancel_event_employee', as: 'get_cancel_event_employee'
  post 'events/cancel_event_employee', as: 'post_cancel_event_employee'

  get 'events/delete_event_employee', as: 'get_delete_event_employee'
  post 'events/delete_event_employee', as: 'post_delete_event_employee'



  #event User
 
  get 'events/cancel_event_user' => 'events#cancel_event_user'
  post 'events/cancel_event_user' => 'events#cancel_event_user'
  

end
