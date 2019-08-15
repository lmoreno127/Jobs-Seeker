class AppjobsController < ApplicationController
    before_action :authenticate_user!

    def create
        @job=Job.find(params[:job_id])
        @appjob=Appjob.new
        @appjob.user=current_user
        @appjob.job=@job
        @appjob.save!
        redirect_to all_jobs_path
    end

    def index 
      @applications=current_user.appjobs
      @companies=Company.all
      render component: 'myApplications',props: {appjobs:@applications,myjobs:current_user.jobs.as_json(include: :company),companies:@companies,user:{ info:current_user, signOut: destroy_user_session_path} }
    end
    
end
