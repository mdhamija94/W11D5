class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    # if logout!
    #   render json: ['success']
    # else
    #   render json: ['No user is currently signed in.'], status: 404
    # end
    logout!
    redirect_to new_api_session_url
  end

end
