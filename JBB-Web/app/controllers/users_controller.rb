class UsersController < ApplicationController
  def new
    if !logged_in?
  	 @user = User.new
    end
    redirect_to home_path
  end

  def create
  	@user = User.new(user_params)
  	if @user.save
      redirect_to @user, notice: "Usuário foi criado com sucesso!"	
  	else
  		render 'new'
    end
  end

  def edit
  end

  def show
    @user = User.find(params[:id])
    if @user != current_user
      redirect_to home_path
    end
  end

  def update
  end

  def delete
  end

  private

	def user_params
		params.require(:user).permit(:name, :email, :password_digest, :cpf, :gender, :phone, :birth)
	end

end
