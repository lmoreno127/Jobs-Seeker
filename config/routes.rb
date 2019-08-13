Rails.application.routes.draw do
  root "welcome#home"
  devise_for :companies
  devise_for :users
  resources :jobs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
