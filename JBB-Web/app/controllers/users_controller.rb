class UsersController < ApplicationController
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
      redirect_to @user, notice: "Usuário foi criado com sucesso!"	
      sign_in(@user)
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
		params.require(:user).permit(:name, :email, :password_digest, :password_digest_confirmation, :cpf, :gender, :phone, :birth)
	end

end
