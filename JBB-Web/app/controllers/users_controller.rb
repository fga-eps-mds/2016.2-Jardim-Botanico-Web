class UsersController < ApplicationController
  
  # New user
  def new
    if !logged_in?
      @user = User.new
    else
      redirect_to home_path
  end

  #Creating a new user
  def create
  	@user = User.new(user_params)
  	if @user.save
      redirect_to '/', notice: "Cadastro efetuado com sucesso!"
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

  #Update user
  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params_update)
      flash[:notice] = "Perfil atualizado com sucesso"
    else
      flash[:notice] = "Erro ao atualizar o perfil"
    end  
    redirect_to :action => "show",:id => @user.id
  end

  #Update user password
  def update_password
    @user = User.find(params[:id])
    if  @user.authenticate(params[:user][:password_older])
      if @user.update_attributes(password_params)
        flash[:notice] = 'Senha atualizada com sucesso'
      end
    else
      flash[:notice] = 'Senha invalida!'
    end
    redirect_to :action => "show",:id => @user.id
  end


  def show
    @user = User.find(params[:id])
    if @user != current_user
      redirect_to home_path
    end
  end

  def delete
  end

  private

	def user_params
		params.require(:user).permit(:name, :email, :password, :cpf, :gender, :phone, :birth)
	end

  def user_params_update
    params[:user].permit(:name, :email, :cpf, :gender, :phone, :birth)
  end

  def password_params
    params[:user].permit(:password)
  end
end
