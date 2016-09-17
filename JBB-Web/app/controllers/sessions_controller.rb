class SessionsController < ApplicationController
  def new
    render 'new'
  end
  def create  
    @user = User.find_by(email: params[:email])
    puts(params[:email])
      if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      sign_in(@user)
      redirect_to home_path 
    else
      flash.now[:notice] = 'Login ou senha inválidos'
      render 'new'
    end
  end
  def destroy 
    sign_out
    flash.now[:notice] = 'Logout efetuado com sucesso'
    redirect_to home_path
  end
end