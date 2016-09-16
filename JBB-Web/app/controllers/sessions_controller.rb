class SessionsController < ApplicationController
  def new
    render 'new'
  end
  def create  
    @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to user_show_path
    else
      render 'new'
    end
  end
  def destroy 
    sign_out
    redirect_to root_url
  end
end