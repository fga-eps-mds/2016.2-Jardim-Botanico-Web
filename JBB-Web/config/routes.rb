Rails.application.routes.draw do

  
  #resources :users
  resources :visitations, :except => [:show, :update, :destroy]
  

  get 'visitations/show', as: 'show_visitation'
  get 'visitations/home', as: 'home_visitation'
  get 'visitations/index', as: 'index_visitation'
  get 'visitations/cancel_visitation', as: 'get_cancel_visitation'
  post 'visitations/cancel_visitation', as: 'post_cancel_visitation'
  
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
