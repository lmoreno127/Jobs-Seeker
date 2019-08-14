class JobsController < ApplicationController
    def all_jobs
      
    end
    def index 
     
     render component: 'MyJobs', props: { company: current_company,jobs: current_company.jobs } 
    end
    def new
        @job =Job.new
        render component: 'CreateJob', props: { company: current_company } 
    end
    def create
        @job=Job.new(job_params)
        @job.company=current_company
        @job.city=current_company.city
        if @job.save!
            redirect_to root_path
        end
        
    end
    def show
        @job=Job.find(params[:id])
        render component: 'jobD',props: { company: current_company, job:@job } 
    end
    def edit

    end
    def update

    end
    def destroy
     
    end

    private

    def job_params
        params.require(:job).permit(:jobtitle,:description,:experience_required,:contract)
      end
    
end
