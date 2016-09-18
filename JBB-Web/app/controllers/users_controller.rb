class UsersController < ApplicationController
  
<<<<<<< HEAD
  before_action :set_user, only:[:edit, :update, :show]
  # flash[:notice] = "Informações salvas com sucesso"
  # flash[:warning] =  "Preencha todos os campos obrigatórios"
  # flash[:error] = "Não foi possível salvar as informações"
  # flash[:info] = "Alguns itens necessitam da sua atenção"


  # New user
  def new
    @user = User.new
  end

  #Creating a new user
  def create
  	@user = User.new(user_params)
  	if @user.save
      session[:user_id] = @user.id
      flash.now[:notice] = "Perfil criado com sucesso"
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

  #Update user
  def update
    if @user.update(user_params)
      flash[:notice] = "Perfil atualizado com sucesso"
      redirect_to :action => "show",:id => @user.id
    else
      flash[:notice] = "Erro ao atualizar o perfil"
    end  
  end

 #Show the user profile  
  def show
    if @user != current_user
      redirect_to home_path
    end
  end

  #Delete the user
  def destroy
    current_user.destroy
    session[:user_id] = nil
    # user.events.delete_all
    # user.visitations.delete_all
    flash.now[:notice] = "Perfil deletado com sucesso"
    redirect_to home_path
  
  
  private

  def set_user
    @user = User.find(params[:id])
  end

	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation, :cpf, :gender, :phone, :birth)
	end
end