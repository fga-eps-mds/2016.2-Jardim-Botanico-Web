class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
      redirect_to @user, notice: "Cadastro efetuado com sucesso!"	
  	else
  		render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    redirect_to home_path
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
		params.require(:user).permit(:name, :email, :password_digest, :cpf, :gender, :phone, :birth)
	end

end
