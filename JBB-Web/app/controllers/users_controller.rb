class UsersController < ApplicationController
  before_action only: [:edit, :update, :show] do
    @user = User.find(params[:id])
  end

  #New user
  def new
    @user = User.new
		@phone = @user.phones.build
  end


  #Creating a new user
  def create
  	@user = User.new(user_params)
    @user.set_as_not_employee
  	if @user.save
      UserMailer.welcome(@user).deliver_now
			@phone = @user.phones.build(params[:phone])
      session[:user_id] = @user.id
      flash[:success] = t(:sucessful_user_registration)
      redirect_to "/#{I18n.locale}/"
  	else
  		render 'new'
    end
  end

  # Editing the user profile
  def edit
    if @user != current_user
      redirect_to "/#{I18n.locale}/"
    end
  end

  #Update User
  def update
    if @user.update(user_params)
      flash[:success] = t(:sucessful_profile_update)
      redirect_to @user
    else
      flash[:warning] = t(:error_profile_update)
    end
  end

  #Show the User
  def show
    @phone = @user.phones.all
     if @user != current_user
       redirect_to "/#{I18n.locale}/"
     end
  end

  #Visitation's and event's request
  def my_requests
    @user = current_user
  end

  #Delete the user
  def destroy
    current_user.destroy
    session[:user_id] = nil
    flash[:warning] = t(:sucessful_profile_remove)
    redirect_to "/#{I18n.locale}/"
  end

  private
  def user_params
    params[:user].permit(:name, :email, :password, :is_employee, :cpf, :birth, :gender, phones_attributes: :phone)
	end
end
