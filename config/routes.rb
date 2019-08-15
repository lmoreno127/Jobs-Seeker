Rails.application.routes.draw do
  root "welcome#home"
  devise_for :companies, controllers: { registrations: 'companies/registrations' }
  devise_for :users, controllers: { registrations: 'users/registrations' }
  resources :companies do
      resources :jobs
  end
  get "/all_jobs", to: "jobs#all_jobs"
  resource :company, only: [:show]
  resource :user, only: [:show]
  resources :users do 
      resources :jobs do
        resources :appjobs
      end
  end
  get "/myapplications", to: "appjobs#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
