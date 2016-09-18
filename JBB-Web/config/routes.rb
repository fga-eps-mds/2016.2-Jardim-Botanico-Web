Rails.application.routes.draw do

  #users
  resources :users
  get '/users/new' => 'users#new'
  post '/users/new' => 'users#create', :as => 'create_user'
  get '/users/:id' => 'users#show', :as => 'user_show'
  get '/users/edit/:id' => 'users#edit', :as => 'user_edit'

  patch '/users/update/', controller: 'users', action: 'update', :as => 'update_user'
  patch '/users/update/:id', controller: 'users', action: 'update_password', :as => 'update_user_password'
  patch '/users/destroy/', controller: 'users', action: 'destroy', :as => 'destroy_user'

  #sessions_login
  get    '/sign_in'   => 'sessions#new'
  post   '/sign_in'   => 'sessions#create', :as => 'sign_in_path'
  get '/sign_out' => 'sessions#destroy'
  delete '/sign_out' => 'sessions#destroy'

  #root
  root 'welcome#index', :as => 'home'

  get 'sessions/new'

  get 'trails/new'
  
                                                    #VISITATIONS
  resources :visitations, :except => [:show, :update, :destroy]
  
  get 'visitations/home', as: 'home_visitation'
  get 'visitations/show', as: 'show_visitation'
  get 'visitations/index', as: 'index_visitation'

  #Visitation Employee
  get 'visitations/accept_visitation_employee', as: 'get_accept_visitation_employee'
  post 'visitations/accept_visitation_employee', as: 'post_accept_visitation_employee'

  get 'visitations/refuse_visitation_employee', as: 'get_refuse_visitation_employee'
  post 'visitations/refuse_visitation_employee', as: 'post_refuse_visitation_employee'
  

  get 'visitations/cancel_visitation_employee', as: 'get_cancel_visitation_employee'
  post 'visitations/cancel_visitation_employee', as: 'post_cancel_visitation_employee'

  get 'visitations/delete_visitation_employee', as: 'get_delete_visitation_employee'
  post 'visitations/delete_visitation_employee', as: 'post_delete_visitation_employee'


  #Visitation User
  get 'visitations/cancel_visitation_user', as: 'get_cancel_visitation_user'
  post 'visitations/cancel_visitation_user', as: 'post_cancel_visitation_user'
 
  get 'visitations/delete_visitation_user', as: 'get_delete_visitation_user'
  post 'visitations/delete_visitation_user', as: 'post_delete_visitation_user'
 
 end
