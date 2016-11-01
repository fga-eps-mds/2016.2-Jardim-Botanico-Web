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
      flash[:success] = "Cadastro efetuado com sucesso!"
      redirect_to home_path
  	else
  		render 'new'
    end
  end

  # Editing the user profile
  def edit
    if @user != current_user
      redirect_to home_path
    end
  end

  #Update User
  def update
    if @user.update(user_params)
      flash[:success] = "Perfil atualizado com sucesso"
      redirect_to @user
    else
      flash[:warning] = "Erro ao atualizar o perfil"
    end
  end

  #Show the User
  def show
    @phone = @user.phones.all
     if @user != current_user
       redirect_to home_path
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
    flash[:warning] = "Perfil deletado com sucesso"
    redirect_to home_path
  end

  private
  def user_params
    params[:user].permit(:name, :email, :password, :is_employee, :cpf, :birth, :gender, phones_attributes: :phone)
	end
end
