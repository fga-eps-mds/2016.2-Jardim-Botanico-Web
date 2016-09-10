class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
  		flash[:sucess] = "Bem vindo ao Jardim Botânico"
  		redirect_to @user
  	else
  		render 'new'
    end
  end

  def edit
  end

  def show
  end

  def update
  end

  def delete
  end

  private

	def user_params
		params.require(:user).permit(:name, :email, :password_sieger, :password_confirmation, :cpf, :gender, :phone, :birth)
	end

end
