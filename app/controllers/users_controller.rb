class UsersController < ApplicationController
    def index
     @users=User.all
    end
    def show
       @user=current_user 
    end
    def destroy
        @user=current_user
    end
    def update
        @user=current_user
    end
    def edit
        @user=current_user
    end
    
    
    
    
end
