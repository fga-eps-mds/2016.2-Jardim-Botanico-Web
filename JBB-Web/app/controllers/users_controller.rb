class UsersController < ApplicationController
  
  helper_method :cancel_confirmation

  def new
  	@user = User.new
  end

  def create
  	@user = User.new(params[:user])
  	if @user.save
  		log_in @user
  		flash[:sucess] = "Bem vindo ao Jardim Botânico"
  		redirect_to @user
  	else
  		render 'new'
  end


  def show
  end

  def cancel_confirmation
    @visitation.stuts = "Cancelado pelo usuario"
  end

  private

  	def user_params
  		params.require(:user).permit(:name, :email, :password, :password_confirmation, :cpf, :gender, :phone, :birth)
  	end


end
