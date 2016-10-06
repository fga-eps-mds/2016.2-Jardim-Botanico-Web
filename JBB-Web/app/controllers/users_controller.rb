class UsersController < ApplicationController

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
    @user = User.find(params[:id])
    if @user != current_user
      redirect_to home_path
    end
  end

  #Update User
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = "Perfil atualizado com sucesso"
      redirect_to @user
    else
      flash[:warning] = "Erro ao atualizar o perfil"
    end
  end

  #Show
  def show
    @user = User.find(params[:id])
    @phone = @user.phones.all
     if @user != current_user
       redirect_to home_path
     end
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