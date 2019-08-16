class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable       
  has_many :appjobs,dependent: :destroy
  has_many :jobs, through: :appjobs
  mount_uploader :curriculum, CvUploader 
  mount_uploader :profile_photo, PhotoUserUploader

end
