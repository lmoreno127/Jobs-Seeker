Rails.application.routes.draw do
  root "welcome#home"
  devise_for :companies
  devise_for :users
  resources :companies do
      resources :jobs
  end
  get "/all_jobs", to: "jobs#all_jobs"
  resource :company, only: [:show]
  resource :user, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
