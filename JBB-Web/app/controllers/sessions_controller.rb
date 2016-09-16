class SessionsController < ApplicationController
  def new
    render 'new'
  end
  def create  
    @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to home_path, notice: "Login realizado com sucesso"
    else
      flash.now[:notice] = 'Login ou senha inválidos'
      render 'new'
    end
  end
  def destroy 
    sign_out
    redirect_to root
  end
end