class UsersController < ApplicationController
  
  # New user
  def new
    @user = User.new
  end

  #Creating a new user
  def create
  	@user = User.new(user_params)
  	if @user.save
      session[:user_id] = @user.id
      redirect_to home_path, notice: "Cadastro efetuado com sucesso!"
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

  #Update user
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:notice] = "Perfil atualizado com sucesso"
    else
      flash[:notice] = "Erro ao atualizar o perfil"
    end  
    redirect_to :action => "show",:id => @user.id
  end

 #Show the user profile  
  def show
    @user = User.find(params[:id])
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
    redirect_to home_path
  end



  private

	def user_params
		params[:user].permit(:name, :email, :password, :cpf, :gender, :phone, :birth)
	end
end

