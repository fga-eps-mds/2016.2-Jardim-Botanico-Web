class UsersController < ApplicationController
  def new
    @user = User.new
		@phone = @user.phones.build
  end

  #Creating a new user
  def create
  	@user = User.new(user_params)
  	if @user.save
			@phone = @user.phones.build(params[:phone])
      redirect_to @user, notice: "Cadastro efetuado com sucesso!"
  	else
  		render 'new'
    end
  end

  # Editing the user profile
  def edit
    @user = User.find(params[:id])
		@phone = @user.phones.find(:all)
  end

  def show
    @user = User.find(params[:id])
		@phone = @user.phones.find(:all)
    if @user != current_user
      redirect_to home_path
    end
  end

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
  end

  private
	def user_params
		params.require(:user).permit(:name, :email, :password, :password_confirmation, :cpf, :gender, :birth, phones_attributes: :phone)
	end
end
