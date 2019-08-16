class AppjobsController < ApplicationController

    def create
        @job=Job.find(params[:job_id])
        @appjob=Appjob.new
        @appjob.user=current_user
        @appjob.job=@job
        @appjob.save!
        redirect_to all_jobs_path
    end

    def indexjobsc
      @job=Job.find(params[:job_id])
      @appjobs=@job.appjobs
      render component: 'jobApplications',props: {appjobs:@appjobs,job:@job,users:@job.users,user:{ info:current_company, signOut: destroy_user_session_path}}
    end
    def indexa
      render component: 'myApplications',props: {myjobs:current_user.jobs.as_json(include: :company),user:{ info:current_user, signOut: destroy_user_session_path} }
    end
    
end
