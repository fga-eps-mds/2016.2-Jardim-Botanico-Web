Rails.application.routes.draw do

  
  #resources :users
  resources :visitations, :except => [:show, :update, :destroy]
  
  get 'visitations/home', as: 'home_visitation'
  get 'visitations/show', as: 'show_visitation'
  get 'visitations/index', as: 'index_visitation'

  #Visitation Employee
  get 'visitations/accept_visitation_employee', as: 'get_accept_visitation_employee'
  get 'visitations/accept_visitation_employee', as: 'post_accept_visitation_employee'

  get 'visitations/refuse_visitation_employee', as: 'get_refuse_visitation_employee'
  post 'visitations/refuse_visitation_employee', as: 'post_refuse_visitation_employee'
  

  get 'visitations/cancel_visitation_employee', as: 'get_cancel_visitation_employee'
  post 'visitations/cancel_visitation_employee', as: 'post_cancel_visitation_employee'

  

  #Visitation User
  get 'visitations/cancel_visitation_user', as: 'get_cancel_visitation_user'
  post 'visitations/cancel_visitation_user', as: 'post_cancel_visitation_user'
 
  get 'visitations/delete_visitation_user', as: 'get_delete_visitation_user'
  get 'visitations/delete_visitation_user', as: 'post_delete_visitation_user'
 
 # get 'visitations/edit', as: 'edit_visitation'
  
=begin
  get 'trails/new'

  get 'welcome/new'

  get 'jbb_spaces/new'

  get 'events/new'

  get 'visitations/new'
 
  get 'visitations/show'


  get 'employees/new'

  get 'users/new'

  root 'welcome#welcome'
=end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end