class SessionsController < ApplicationController
  def new
    render 'new'
  end
  def create  
    @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to :action => "show",:id => @user.id, notice: "Login realizado com sucesso"
    else
      flash.now[:notice] = 'Login ou senha inválidos, por favor verique novamente'
      render 'new'
    end
  end
  def destroy 
    session[:user_id] = nil
    flash.now[:notice] = 'Logout efetuado com sucesso'
    redirect_to home_path
  end
end