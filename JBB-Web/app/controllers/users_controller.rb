class UsersController < ApplicationController
  
  #New user
  def new
    @user = User.new
		@phone = @user.phones.build
  end

  
  #Creating a new user
  def create
  	@user = User.new(user_params)
  	if @user.save
			@phone = @user.phones.build(params[:phone])
      

      session[:user_id] = @user.id
      redirect_to @user, notice: "Cadastro efetuado com sucesso!"
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
      flash[:notice] = "Perfil atualizado com sucesso"
      redirect_to :action => "show",:id => @user.id
    else
      flash[:notice] = "Erro ao atualizar o perfil"
    end
  end


  #Show
  def show
    if @user != current_user
      redirect_to home_path
    end
  end

  
  #Delete the user
  def destroy
    current_user.destroy
    session[:user_id] = nil

    flash.now[:notice] = "Perfil deletado com sucesso"
    redirect_to home_path
  end


  private
  def user_params
    params[:user].permit(:name, :email, :password, :is_employee, :cpf, :gender, :phone, :birth)
	end
end
