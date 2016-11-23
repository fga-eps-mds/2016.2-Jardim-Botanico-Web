Rails.application.routes.draw do

  #mailer
  get '/user_mailers/welcome'
  post '/user_mailers/welcome'

  resources :users


  scope "(:locale)", locale: /en|pt/ do

    #root
    # get '/:locale' => 'welcome#index', :as => 'home'
    # get '/:locale' => 'welcome#index', :as => 'root'
    root 'welcome#index', :as => 'home'
    root 'welcome#index', :as => 'root'

    get '/education_choice' => 'welcome#education_choice'


    #users
    get '/users/new' => 'users#new'
    post '/users/new' => 'users#create', :as => 'create_user'
    get '/users/:id' => 'users#show', :as => 'user_show'
    get '/users/edit/:id' => 'users#edit', :as => 'user_edit'
    get '/users/my_requests/:id' => 'users#my_requests', :as =>'user_my_requests'

    patch '/users/update/', controller: 'users', action: 'update', :as => 'update_user'
    patch '/users/update/:id', controller: 'users', action: 'update_password', :as => 'update_user_password'
    patch '/users/destroy/', controller: 'users', action: 'destroy', :as => 'destroy_user'

    #sessions_login
    get    '/sign_in'   => 'sessions#new'
    post   '/sign_in'   => 'sessions#create', :as => 'sign_in_path'
    get '/sign_out' => 'sessions#destroy'

    #root
    get 'sessions/new'
    get 'trails/new'

    #Visitations
    resources :visitations, :except => [:show, :update, :destroy]

    get 'visitations/home', as: 'home_visitation'
      get 'visitations/show_employee', as: 'show_visitation_employee'
    get 'visitations/show_user', as: 'show_visitation_user'
    get 'visitations/index_employee', as: 'index_visitation_employee'
    get 'visitations/index_user', as: 'index_visitation_user'
    get 'visitations/user_information', as: 'visitations_user_information'

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
    get 'visitations/advices', as: 'get_visitation_advices'
    get 'visitations/cancel_visitation_user', as: 'get_cancel_visitation_user'
    post 'visitations/cancel_visitation_user', as: 'post_cancel_visitation_user'

    #sessions_login
    get 'visitations/delete_visitation_user', as: 'get_delete_visitation_user'
    post 'visitations/delete_visitation_user', as: 'post_delete_visitation_user'

    get    'sign_in'   => 'sessions#new'
    post   'sign_in'   => 'sessions#create'
    delete '/sign_out' => 'sessions#destroy'
    delete 'sign_out'  => 'sessions#destroy'


    #root 'sessions#new'

    get 'events/new' => 'events#new', as: 'events'
    post 'events/new' => 'events#create', as: 'events_save'
    get 'events/show' => 'events#show', as: 'show_event'
    get 'events/show_user', as: 'show_event_user'
    get 'events/show_employee', as: 'show_event_employee'
    get 'events/index_user'
    get 'events/user_information', as: 'events_user_information'
    get 'events/index_employee', as: 'index_event_employee'
    post 'events/index_employee', as: 'index_event_employee_save'

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

    #Map
    get 'maps/jbb_map', as: 'get_jbb_map'
    post 'maps/jbb_map', as: 'post_jbb_map'

    # schedule route
    get 'events/index_calendar_month' => 'events#index_calendar_month', as: 'show_event_calendar'
    get 'visitations/index_calendar_month' => 'visitations#index_calendar_month', as: 'show_visitation_calendar'

    get 'events/index_calendar_week' => 'events#index_calendar_week', as: 'show_event_calendar_week'
    get 'visitations/index_calendar_week' => 'visitations#index_calendar_week', as: 'show_visitation_calendar_week'

  end

end
